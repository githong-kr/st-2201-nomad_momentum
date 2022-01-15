const clock = document.querySelector('h2#clock');

const getTime = () => {
  const date = new Date();
  let hours = date.getHours();
  if (hours < 10) hours = `0${hours}`;
  let minutes = date.getMinutes();
  if (minutes < 10) minutes = `0${minutes}`;
  let seconds = date.getSeconds();
  if (seconds < 10) seconds = `0${seconds}`;

  clock.innerText = `${hours}:${minutes}:${seconds}`;
};

getTime();
let timer = setInterval(getTime, 1000);
