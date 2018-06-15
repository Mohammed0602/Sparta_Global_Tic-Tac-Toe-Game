document.addEventListener("DOMContentLoaded", function() {
alert('Time To Play Tic Tac Toe');

var dataNum = document.getElementsByTagName('td');
var myXO = "X";
var counter = 1;





function buttonResponseXO (){
for (var i = 0; i < dataNum.length; i++) {
  var cellNum = dataNum[i];
  cellNum.addEventListener('click', getEvent);
  }
  function getEvent(event) {
    if (counter % 2 === 0){
      myXO = "X";
    } else {
      myXO = "O";
    }
    event.target.innerHTML = myXO;
    counter = counter + 1;

  }
}

buttonResponseXO();

function whoWins () {
  if (dataNum[0].innerHTML === "X" && dataNum[1].innerHTML ==="X" && dataNum[2].innerHTML ==="X") {

  } else if (dataNum[3].innerHTML === "X" && dataNum[4].innerHTML ==="X" && dataNum[5].innerHTML ==="X") {

  } else if (dataNum[6].innerHTML === "X" && dataNum[7].innerHTML ==="X" && dataNum[8].innerHTML ==="X") {

  } else if (dataNum[0].innerHTML === "X" && dataNum[3].innerHTML ==="X" && dataNum[6].innerHTML ==="X") {

  } else if (dataNum[1].innerHTML === "X" && dataNum[4].innerHTML ==="X" && dataNum[7].innerHTML ==="X") {

  } else if (dataNum[3].innerHTML === "X" && dataNum[4].innerHTML ==="X" && dataNum[5].innerHTML ==="X") {

  } else if (dataNum[2].innerHTML === "X" && dataNum[5].innerHTML      ==="X" && dataNum[8].innerHTML ==="X") {

  } else if (dataNum[0].innerHTML === "X" && dataNum[4].innerHTML ==="X" && dataNum[8].innerHTML ==="X") {

  } else if (dataNum[2].innerHTML === "X" && dataNum[4].innerHTML ==="X" && dataNum[6].innerHTML ==="X") {

  }
  if (dataNum[0].innerHTML === "O" && dataNum[1].innerHTML ==="O" && dataNum[2].innerHTML ==="O") {

} else if (dataNum[3].innerHTML === "O" && dataNum[4].innerHTML ==="O" && dataNum[5].innerHTML ==="O") {

  } else if (dataNum[6].innerHTML === "O" && dataNum[7].innerHTML ==="O" && dataNum[8].innerHTML ==="O") {

} else if (dataNum[0].innerHTML === "O" && dataNum[3].innerHTML ==="O" && dataNum[6].innerHTML ==="O") {

} else if (dataNum[1].innerHTML === "O" && dataNum[4].innerHTML ==="O" && dataNum[7].innerHTML ==="O") {

  } else if (dataNum[3].innerHTML === "O" && dataNum[4].innerHTML ==="O" && dataNum[5].innerHTML ==="O") {

} else if (dataNum[2].innerHTML === "O" && dataNum[5].innerHTML      ==="O" && dataNum[8].innerHTML ==="O") {

  } else if (dataNum[0].innerHTML === "O" && dataNum[4].innerHTML ==="O" && dataNum[8].innerHTML ==="O") {

} else if (dataNum[2].innerHTML === "O" && dataNum[4].innerHTML ==="O" && dataNum[6].innerHTML ==="O") {

  }
}

});
