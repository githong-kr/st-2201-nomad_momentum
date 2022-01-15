const h1 = document.querySelector('div.hello:first-child h1');

const handleTitleClick = () => {
  h1.style.color = 'blue';
};

const handleMouseEnter = () => {
  h1.innerText = `Mouse is here!`;
};

const handleMouseLeave = () => {
  h1.innerText = `Mouse is gone!`;
};

const handleWindwResize = () => {
  document.body.style.backgroundColor = 'tomato';
};

const hadnleWindowCopy = () => {
  alert('copier!');
};

const handleWindowOffline = () => {
  alert('SOS no WIFI');
};

const handleWindowOnline = () => {
  alert('ALL GOOOOD!!');
};

h1.addEventListener('click', handleTitleClick);
h1.addEventListener('mouseenter', handleMouseEnter);
h1.addEventListener('mouseleave', handleMouseLeave);

window.addEventListener('resize', handleWindwResize);
window.addEventListener('copy', hadnleWindowCopy);
window.addEventListener('offline', handleWindowOffline);
window.addEventListener('online', handleWindowOnline);
