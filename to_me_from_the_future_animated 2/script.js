
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const audio = entry.target.querySelector("audio[data-audio]");

        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            if (audio) {
                audio.play().catch(() => {});
            }
        } else {
            if (audio) {
                audio.pause();
            }
        }
    });
}, {
    threshold: 0.4
});

document.querySelectorAll(".fade-in").forEach(el => {
    observer.observe(el);
});
