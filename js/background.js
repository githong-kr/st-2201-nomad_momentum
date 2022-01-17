const IMAGE_LENGTH = 6;
const images = [];

for (let i = 0; i < IMAGE_LENGTH; i++) {
  images.push(`${i}.jpeg`);
}

const chosenImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url(img/${chosenImage})`;
