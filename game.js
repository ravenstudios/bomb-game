console.log("Bomb Game");
let number = Math.floor(Math.random() * (9999 - 0)) + 0;
number = formatNumber(number);

let numArray = number.split("");
let guessedNumAray = [];
let result;

$(()=>{
  console.log("jquery");

  $("#submit").click(()=>{
    guess();
  });
});

function guess(){
  let guess = $("#input").val();



  if(guessedNumAray.length === 4){
    part2(guess);
  }

  else{
    for (var i = 0; i < numArray.length; i++) {
      if(guess === numArray[i]){

        guessedNumAray.push(guess);
      }
      else{
        console.log("wrong number");
      }
    }


    result = guessedNumAray.join("");
    $("#output").val(result);
  }
}



function part2(guess){
  

  if(guess === number){
    alert("You won");
  }

  else{
    console.log("not guessed right");
  }
}

//rand num from 0000 - 9999 //1234  4231  1234

//guess number

// show all numbers that were right

// keep guessing untill all numbrs guessed

//find order of numbers

//have timer



function formatNumber(num){

  if(num < 10){
    return "000" + num;
  }

  else if(num < 100){
    return "00" + num;
  }

  else if(num < 1000){
    return "0" + num;
  }
  else{
    return num.toString();
  }
}
