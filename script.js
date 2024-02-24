const display = document.getElementById("display");

function appendToDisplay(value) {
    document.getElementById('display').value += value;
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
