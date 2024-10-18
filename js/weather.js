const API_KEY = 'c075d9c4379bbde28d02ee75d3a31218'

navigator.geolocation.getCurrentPosition(
  async (position) => {
    const lat = position.coords.latitude
    const lon = position.coords.longitude

    console.log(lat, lon)

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`

    const response = await fetch(url)
    const data = await response.json()

    const weather = document.querySelector('#weather span:first-child')
    const city = document.querySelector('#weather span:last-child')
    weather.innerText = data.name
    city.innerText = `${data.weather[0].main} / ${data.main.temp}`
  },
  (t) => {
    console.log(t)
    alert("Can't find you. No weather for you.")
  }
)
