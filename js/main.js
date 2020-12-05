window.addEventListener("load", () => {
    Particles.init({
        selector: '.particle-bg',
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
                    color: '#f2f2f2',
                    minDistance: 100,
                }
            }
        ]
    });
});

window.addEventListener("load", () => {
    var typed = new Typed("#typing", {
        strings: ["Vinay Dawani.", "A Designer.", "A Developer."],
        typeSpeed: 100,
        startDelay: 1000,
        backSpeed: 80,
        backDelay: 500,
        loop: true,
        smartBackspace: false,
      });
})