// yıl + scroll reveal — tüm sayfalarda ortak
const yr = document.getElementById('yr');
if (yr) yr.textContent = new Date().getFullYear();

const io = new IntersectionObserver((entries) => entries.forEach((e) => {
  if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}), { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
