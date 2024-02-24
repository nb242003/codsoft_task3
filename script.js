const display = document.getElementById("display");

function appendToDisplay(input){
  display.value += input;
}

function Clear(){
  display.value = "";
}

function Calculate(){
  try{
    display.value=eval(display.value);
  }
  catch(error){
    display.value="error";
  }
}