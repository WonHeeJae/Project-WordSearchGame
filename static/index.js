let timer;

function appStart() {
  function gameTime() {
    const startTime = new Date();

    function setTimer() {
      const time_div = document.querySelector("#gametime");
      const nowTime = new Date();
      const gamingTime = new Date(nowTime - startTime);
      const minutes = gamingTime.getMinutes().toString().padStart(2, "00");
      const seconds = gamingTime.getSeconds().toString().padStart(2, "00");
      console.log(minutes);
      time_div.innerText = `게임시간 : ${minutes}:${seconds}`;
    }

    timer = setInterval(setTimer, 1000);
  }
  gameTime();
}

appStart();
