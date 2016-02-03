window.onload = function(){

  var cm = document.getElementById('cm').value;
  var inch = document.getElementById('inch').value;

  document.getElementById('to_inch').addEventListener('click', convertToInch);

  document.getElementById('to_cm').addEventListener('click', function(){
      cm.value = inch.value * 2.54;
  });



};

function convertToInch(){
  inch.value = cm.value / 2.54;
}
