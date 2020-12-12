try {
  window.addEventListener("load", () => {
    Particles.init({
      selector: ".particle-bg",
      maxParticles: 75,
      color: "#f2f2f2",
      connectParticles: true,
      speed: 0.4,
      minDistance: 120,
      responsive: [
        {
          breakpoint: 576,
          options: {
            maxParticles: 50,
            color: "#f2f2f2",
            minDistance: 100,
          },
        },
      ],
    });
  });
} catch (error) {
  console.error(error);
}

Chart.defaults.global.defaultFontColor = "rgba(255, 255, 255, 0.5)";
Chart.defaults.global.defaultFontFamily = '"Nunito", sans-serif';
Chart.defaults.global.defaultFontStyle = "bold";

const hash = window.location.hash
  .substring(1)
  .split("&")
  .reduce(function (initial, item) {
    if (item) {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
  }, {});
window.location.hash = "";

// Set token
let _token = hash.access_token;

let album = null;

var spotifyAPI = new SpotifyWebApi();

spotifyAPI.setAccessToken(_token);

let user = spotifyAPI
  .getMe()
  .then((data) => {
    const user = document.getElementById("user");
    user.querySelector("img").src = data.images[0].url;
    user.querySelector("h3").innerText = data.display_name;
    user.querySelector("a").href = data.external_urls.spotify;
  })
  .catch((err) => {});

let topTracks = async (_token) => {
  let result = await fetch(`https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=5`, {
    method: "GET",
    headers: { Authorization: "Bearer " + _token },
  })
    .then((response) => response.json())
    .then((data) => {
      let tracks = [];
      let popularity = [];
      let id = [];

      for (let i = 0; i < data.items.length; i++) {
        tracks.push(data.items[i].name);
        popularity.push(data.items[i].popularity);
        id.push(data.items[i].id);
      }
      var typed = new Typed("#typed", {
        strings: tracks.slice(0, 5),
        typeSpeed: 100,
        startDelay: 1000,
        backSpeed: 80,
        backDelay: 500,
        loop: true,
        smartBackspace: false,
      });

      var popDiv = document.getElementById("top-5-popularity").getContext("2d");
      var top5Popularity = new Chart(popDiv, {
        type: "bar",
        data: {
          labels: tracks,
          datasets: [
            {
              label: "popularity of songs",
              data: popularity,
              backgroundColor: ["#F2223D", "#6D0000", "#D00026", "#8D0000", "#AE0011"],
            },
          ],
        },
        options: {
          scales: {
            xAxes: [
              {
                gridLines: {
                  color: "rgba(0,0,0,0)",
                  zeroLineColor: "rgba(255, 255, 255, 0.5)",
                },
                ticks: {
                  fontColor: "rgba(255, 255, 255, 0.5)", // this here
                },
              },
            ],
            yAxes: [
              {
                ticks: {
                  fontColor: "#rgba(255, 255, 255, 0.5)",
                  beginAtZero: true,
                },
                gridLines: {
                  color: "rgba(0,0,0,0)",
                  zeroLineColor: "rgba(255, 255, 255, 0.5)",
                },
                scaleLabel: {
                  display: true,
                  labelString: "popularity",
                },
              },
            ],
            scaleLabel: {
              fontColor: "rgba(255, 255, 2555, 0.5)",
              fontFamily: '"Roboto Mono", "monospace"',
            },
          },
          title: {
            display: true,
            text: "Popularity of your top tracks",
            fontFamily: '"Montserrat", "sans-serif"',
            fontSize: 14,
            fontColor: "#rgba(255, 255, 255, 0.75)",
          },
        },
      });

      var featDiv = document.getElementById("top-5-features").getContext("2d");
      let audioFeatures = spotifyAPI.getAudioFeaturesForTracks(id).then((data) => {
        let dance = [];
        let energy = [];
        let loud = [];
        let speech = [];
        let acoustic = [];
        let instrument = [];
        let valence = [];

        for (let i = 0; i < data.audio_features.length; i++) {
          dance.push(data.audio_features[i].danceability);
          energy.push(data.audio_features[i].energy);
          loud.push(data.audio_features[i].loudness);
          speech.push(data.audio_features[i].speechiness);
          acoustic.push(data.audio_features[i].acousticness);
          instrument.push(data.audio_features[i].instrumentalness);
          valence.push(data.audio_features[i].valence);
        }

        var top5Features = new Chart(featDiv, {
          type: "radar",
          data: {
            labels: tracks,
            datasets: [
              {
                label: "Danceability",
                data: dance,
                borderColor: ["#F2223D"],
              },
              {
                label: "Energy",
                data: energy,
                borderColor: ["#22F2D7"],
              },
              // {
              //   label: "Loudness",
              //   data: loud,
              // },
              {
                label: "Speechiness",
                data: speech,
                borderColor: ["#F26F22"],
              },
              {
                label: "Acousticness",
                data: acoustic,
                borderColor: ["#22A5F2"],
              },
              {
                label: "Instrumentalness",
                data: instrument,
                borderColor: ["#F222A5"],
              },
              {
                label: "Valence",
                data: valence,
                borderColor: ["#22F26F"],
              },
            ],
          },
          options: {
            scale: {
              gridLines: {
                color: "rgba(255, 255, 2555, 0.5)",
              },
              ticks: {
                backdropColor: "transparent",
                fontColor: "rgba(255, 255, 2555, 0.5)",
              },
              scaleLabel: {
                fontColor: "rgba(255, 255, 2555, 0.5)",
              },
            },
            title: {
              display: true,
              text: "Properties of your top tracks",
              fontFamily: '"Montserrat", "sans-serif"',
              fontSize: 14,
              fontColor: "#rgba(255, 255, 255, 0.75)",
            },
          },
        });
      });
    });
};

topTracks(_token);
// user.then((data) => (document.querySelector("div").innerHTML = data.display_name));

// document.querySelector("div").innerHTML = JSON.stringify(album);

function slicify(arr, size) {
  let step = 0;
  let len = arr.length;
  let tempArr = [];

  while (step < len) {
    tempArr.push(arr.slice(step, (step += size)));
  }

  return tempArr;
}

let savedTracks = async (_token) => {
  var dataExt = null;
  let savedURL = [];

  for (let i = 0; i < 1000; i += 50) {
    // savedURL.push(spotifyAPI.getMySavedTracks({ limit: 50, offset: `${i}` }));
    savedURL.push(`https://api.spotify.com/v1/me/tracks?limit=50&offset=${i}`);
  }

  const result = Promise.all(
    savedURL.map((url) =>
      fetch(url, {
        method: "GET",
        headers: { Authorization: "Bearer " + _token },
      }).then((response) => response.json())
    )
  ).then((json) => {
    const tracks = [];
    json.forEach((data) => data.items.forEach((item) => tracks.push(item)));

    let getProperties = (tracks) => {
      let trackName = [];
      let popularity = [];
      let id = [];

      tracks.forEach((_item) => {
        id.push(_item.track.id);
        trackName.push(_item.track.name);
        popularity.push(_item.track.popularity);
      });

      return { id: id, name: trackName, popularity: popularity };
    };

    let dataExt = getProperties(tracks);

    let idSet = slicify(dataExt.id, 100);
    let featUrls = [];

    for (let i = 0; i < idSet.length; i++) {
      let xURL = "https://api.spotify.com/v1/audio-features?ids=";
      for (let j = 0; j < idSet[i].length; j++) {
        xURL = xURL + idSet[i][j] + "%2C";
      }
      featUrls.push(xURL);
    }

    const audioFeatures = Promise.all(
      featUrls.map((url) =>
        fetch(url, {
          method: "GET",
          headers: { Authorization: "Bearer " + _token },
        }).then((response) => response.json())
      )
    ).then((_json) => {
      const trackAudioFeaturesSet = [];
      _json.forEach((data) => data.audio_features.forEach((item) => trackAudioFeaturesSet.push(item)));

      let getFeatures = (trackAudioFeaturesSet) => {
        let dance = [];
        let energy = [];
        let loud = [];
        let speech = [];
        let acoustic = [];
        let instrument = [];
        let valence = [];

        trackAudioFeaturesSet.forEach((item) => {
          dance.push(item.danceability);
          energy.push(item.energy);
          loud.push(item.loudness);
          speech.push(item.speechiness);
          acoustic.push(item.acousticness);
          instrument.push(item.instrumentalness);
          valence.push(item.valence);
        });

        return {
          danceability: dance,
          energy: energy,
          loudness: loud,
          speechiness: speech,
          acousticness: acoustic,
          instrumentalness: instrument,
          valence: valence,
        };
      };

      const trackAudioFeatures = getFeatures(trackAudioFeaturesSet);
      const finalSavedTrackDataset = {
        ...dataExt,
        ...trackAudioFeatures,
      };

      let scatterData = (dataset, att1, att2) => {
        let scatter = [];
        for (let i = 0; i < dataset.id.length; i++) {
          let sub = {
            x: att1[i],
            y: att2[i],
          };
          scatter.push(sub);
        }
        return scatter;
      };

      const savedScatter = document.getElementById("saved-tracks-scatter").getContext("2d");
      var savedScatterPlot = new Chart(savedScatter, {
        type: "scatter",
        data: {
          labels: finalSavedTrackDataset.name,
          datasets: [
            {
              label: "danceability",
              data: scatterData(
                finalSavedTrackDataset,
                finalSavedTrackDataset.valence,
                finalSavedTrackDataset.danceability
              ),
              backgroundColor: "#F2223D",
              pointHitRadius: 3,
            },
            {
              label: "energy",
              data: scatterData(finalSavedTrackDataset, finalSavedTrackDataset.valence, finalSavedTrackDataset.energy),
              backgroundColor: "#22F2D7",
              pointHitRadius: 3,
            },
          ],
        },
        options: {
          scales: {
            xAxes: [
              {
                type: "linear",
                position: "bottom",
                gridLines: {
                  color: "rgba(0,0,0,0)",
                  zeroLineColor: "rgba(255, 255, 255, 0.5)",
                },
                ticks: {
                  fontColor: "rgba(255, 255, 255, 0.5)", // this here
                },
                scaleLabel: {
                  display: true,
                  labelString: "Valence",
                },
              },
            ],
            yAxes: [
              {
                ticks: {
                  fontColor: "rgba(255, 255, 255, 0.5)",
                  beginAtZero: true,
                },
                gridLines: {
                  color: "rgba(0,0,0,0)",
                  zeroLineColor: "rgba(255, 255, 255, 0.5)",
                },
                scaleLabel: {
                  display: true,
                  labelString: "Danceability/Energy",
                },
              },
            ],
          },
          title: {
            display: true,
            text: "Comparision of Danceability and Energy with Valence",
            fontFamily: '"Montserrat", "sans-serif"',
            fontSize: 14,
            fontColor: "#rgba(255, 255, 255, 0.75)",
          },
          tooltips: {
            callbacks: {
              label: function (tooltipItem, data) {
                var label = data.labels[tooltipItem.index];
                return label + ": (" + tooltipItem.xLabel + ", " + tooltipItem.yLabel + ")";
              },
            },
          },
        },
      });

      const savedScatterAc = document.getElementById("saved-tracks-scatter-ac").getContext("2d");
      var savedScatterPlotAc = new Chart(savedScatterAc, {
        type: "scatter",
        data: {
          labels: finalSavedTrackDataset.name,
          datasets: [
            {
              label: "acousticness-energy",
              data: scatterData(
                finalSavedTrackDataset,
                finalSavedTrackDataset.acousticness,
                finalSavedTrackDataset.energy
              ),
              backgroundColor: "#F2223D",
              pointHitRadius: 3,
            },
          ],
        },
        options: {
          scales: {
            xAxes: [
              {
                type: "linear",
                position: "bottom",
                gridLines: {
                  color: "rgba(0,0,0,0)",
                  zeroLineColor: "rgba(255, 255, 255, 0.5)",
                },
                ticks: {
                  fontColor: "rgba(255, 255, 255, 0.5)", // this here
                },
                scaleLabel: {
                  display: true,
                  labelString: "Acousticness",
                },
              },
            ],
            yAxes: [
              {
                ticks: {
                  fontColor: "rgba(255, 255, 255, 0.5)",
                  beginAtZero: true,
                },
                gridLines: {
                  color: "rgba(0,0,0,0)",
                  zeroLineColor: "rgba(255, 255, 255, 0.5)",
                },
                scaleLabel: {
                  display: true,
                  labelString: "Energy",
                },
              },
            ],
          },
          title: {
            display: true,
            text: "Comparision of non-typical values like Acousticness and Energy",
            fontFamily: '"Montserrat", "sans-serif"',
            fontSize: 14,
            fontColor: "#rgba(255, 255, 255, 0.75)",
          },
          tooltips: {
            callbacks: {
              label: function (tooltipItem, data) {
                var label = data.labels[tooltipItem.index];
                return label + ": (" + tooltipItem.xLabel + ", " + tooltipItem.yLabel + ")";
              },
            },
          },
        },
      });
    });
  });
};

savedTracks(_token);
