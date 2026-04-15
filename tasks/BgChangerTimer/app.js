const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");

const randomColor = () => {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;

const startBgColorChanger = () => {
  function changeBg() {
    document.querySelector("section").style.backgroundColor = randomColor();
  }
  if (!intervalId) {
    intervalId = setInterval(changeBg, 1000);
  }
};

const stopBgColorChanger = () => {
  clearInterval(intervalId);
  intervalId = null;
};

startButton.addEventListener("click", startBgColorChanger);

stopButton.addEventListener("click", stopBgColorChanger);
