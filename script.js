//selcting Html Elements
let emailElement=document.querySelector("#email");

let messageElement=document.querySelector("#message")

let submitButton = document.querySelector('#submit-button');

function clickListener(event) {
  event.preventDefault();

  let emailValue=emailElement.value;
  let messageValue=messageElement.value;

  console.log("Email: ", emailValue);
  console.log("Message: ", messageValue);

  if (emailValue.includes("@")){
      // All Good
      alert("All Good!!!");
  }else {
      alert("Your Mail Is Wrong");
  }

}

submitButton.addEventListener('click', clickListener);