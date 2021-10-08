

let count, minute = 0,second = 0,hour = 0;

let Timer = {
  addTime() {
    document.getElementById("addHour").innerHTML = hour;
    document.getElementById("addMinute").innerHTML = minute;
    document.getElementById("addSecond").innerHTML = second;
    ++second;
    if (second == 60){second = 0; minute++;}
    if (minute == 60){hour++; minute = 0;}
    count = window.setTimeout("Timer.addTime()",1000);
  },
  start() {
    if (!count)
      this.addTime();
  },
  stop() {
    if (count) {
      clearTimeout(count);
      count=0;}
  },
  startAgain(){
    hour = 0;
    minute = 0;
    second = 0;
    window.clearInterval(count);
    count = 0;
    document.getElementById("addHour").innerHTML="0";
    document.getElementById("addMinute").innerHTML="0";
    document.getElementById("addSecond").innerHTML="0";
  },
};
