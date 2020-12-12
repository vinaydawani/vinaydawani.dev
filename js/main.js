const loginButton = document.getElementById("js-btn-login");
// const spotifyToken = null;

loginButton.addEventListener("click", () => {
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
  window.spotifyToken = _token;

  const authEndpoint = "https://accounts.spotify.com/authorize";

  // Replace with your app's client ID, redirect URI and desired scopes
  const clientId = "067e76992f964c878d60d3ab54f5ad58";
  const redirectUri = "http://localhost:5500/app.html";
  // const redirectUri = "https://spotiviz.vinaydawani.dev/app.html";
  const scopes = ["user-read-email", "user-read-private", "user-library-read", "user-top-read"];

  // If there is no token, redirect to Spotify authorization
  if (!_token) {
    window.location = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
      "%20"
    )}&response_type=token`;
  }
});
