document.addEventListener("DOMContentLoaded", function() {
    const options = {
        strings: ["Poojitha", "IAS"],
        typeSpeed: 100,
        backspeed: 300,
        backDelay: 2500,
        startDelay: 500,
        loop: true,
    };
    const typed = new Typed('.name', options);

    window.addEventListener('beforeunload', () => {
        typed.destroy();
    });
});
