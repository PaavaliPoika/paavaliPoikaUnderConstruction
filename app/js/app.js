window.onload = function () {
  let preloader = document.getElementById('preloader');
  preloader.style.display = 'none';
};
document.addEventListener('DOMContentLoaded', () => {
  /* 100vh */
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});
