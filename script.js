var hex_numbers = ["0","1","2","3","4","5","6","7","8","9","A", "B", "C", "D", "E", "F"];

function changePlainColor()
{

  var hexcode = '';
  
  for(var i = 0; i<6; i++){
    var random_index = Math.floor(Math.random() * hex_numbers.length);
    hexcode += hex_numbers[random_index];
  }
// https://www.w3schools.com/jsref/prop_style_background.asp
  document.getElementById("hex-code1").innerHTML = hexcode;
  document.getElementById("plaincontainer").style.backgroundColor = '#' + hexcode;
}
document.querySelector("#submit").addEventListener("click", () => {
    var hexcodea = "";
    var hexcodeb = "";
    var hexcodec = "";
    var random_index = 0;
    
    for(let i = 0; i < 6;i++){
      random_index = Math.floor(Math.random() * hex_numbers.length);
        hexcodea += hex_numbers[random_index];
      random_index = Math.floor(Math.random() * hex_numbers.length);
        hexcodeb += hex_numbers[random_index];
      random_index = Math.floor(Math.random() * hex_numbers.length);
        hexcodec += hex_numbers[random_index];
    }
// https://forum.freecodecamp.org/t/gradual-css-linear-gradient/195068
    document.getElementById("mixcontainer").style.background = `linear-gradient(45deg, #${hexcodea}, #${hexcodeb},#${hexcodec})`;
    document.querySelector("#hexcodea").textContent = hexcodea;
    document.querySelector("#hexcodeb").textContent = hexcodeb;
    document.querySelector("#hexcodec").textContent = hexcodec;
  });