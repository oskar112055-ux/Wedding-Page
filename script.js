const weddingDate = new Date("2028-06-09T00:00:00").getTime();

setInterval(() => {

const now = new Date().getTime();
const distance = weddingDate - now;

document.getElementById("days").textContent =
Math.floor(distance / (1000 * 60 * 60 * 24));

document.getElementById("hours").textContent =
Math.floor((distance % (1000*60*60*24)) / (1000*60*60));

document.getElementById("minutes").textContent =
Math.floor((distance % (1000*60*60)) / (1000*60));

document.getElementById("seconds").textContent =
Math.floor((distance % (1000*60)) / 1000);

},1000);
