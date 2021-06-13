function Cryptosquare(text){
  let strArray= text.split("");
  let criptoStr = ' '
  for(let j=0;j<=(strArray.length/8);j++){
    criptoStr = criptoStr + ' '
    for(let i=j;i<=strArray.length-1;i=i+8){
      criptoStr = criptoStr + strArray[i];
    }
  }
  console.log("test",criptoStr)
}

$(document).ready(function() {
  $("#formCry").submit(function(event){
    event.preventDefault();
    const UserInput = $("#user-input").val();
    console.log("user-input",UserInput)
    const message = Cryptosquare(UserInput);
    console.log("message",message);
    $("#output").html(message);
  });
});

