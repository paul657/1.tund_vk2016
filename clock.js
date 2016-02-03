window.onload = function(){
  setInterval(function(){
    var date = new Date();
    var hour = addZero(date.getHours());
    var minute = date.getMinutes();
    var second = date.getSeconds();
    second = addZero(second);

    document.getElementById('clock').innerHTML = hour + ':' + addZero(minute) + ':' + second;

    function addZero(number){
      if(number < 10){
        number = "0" + number;
      }
      return number;
    }


  }, 1000);

};
