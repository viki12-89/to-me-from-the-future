const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    entry.target.classList.toggle('visible', entry.isIntersecting);
    const audio = entry.target.querySelector('audio[data-audio]');
    if (!audio) return;
    if (entry.isIntersecting)  audio.play().catch(()=>{});
    else                        audio.pause();
  });
}, { threshold: 0.4 });

document.querySelectorAll('.chapter').forEach(ch => {
  observer.observe(ch);
});
