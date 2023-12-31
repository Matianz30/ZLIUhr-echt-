const min = document.querySelector(".min-hand");
const hour = document.querySelector(".hour-hand");
const sec = document.querySelector(".second-hand");

setInterval(() => {
  const date = new Date();
  const secondDeg = (date.getSeconds() / 60) * 360 - 90;
  const minuteDeg = (date.getMinutes() / 60) * 360 - 90;
  const hourDeg = (date.getHours() / 12) * 360 - 90;

  sec.style.transform = `rotate(${secondDeg}deg)`;
  min.style.transform = `rotate(${minuteDeg}deg)`;
  hour.style.transform = `rotate(${hourDeg}deg)`;
}, 1000);

/* This part of the code makes that if you hover over the clock the background changes*/
document.querySelector(".outer-clock-face").addEventListener("mouseover", () => {

  document.querySelector("body").style.backgroundColor = "white"
});

document.querySelector(".outer-clock-face").addEventListener("mouseout", () => {

  document.querySelector("body").style.backgroundColor = "rgb(225, 195, 156)"
});

