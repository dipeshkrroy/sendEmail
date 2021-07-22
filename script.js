sendEmail =()=>{
    const form = document.forms['mail'];
    Email.send({
        Host : "<YOUR_SMTP_HOST>",
        Username : "<SMTP_USERNAME",
        Password : "<SMTP_PASSWORD",
        To : '<TO_EMAI>',
        From : form["email"].value,
        Subject : "You have a new contact request",
        Body : `<b>Dear </b>,<br> ${form["name"].value} is trying to get in touch with you.<br> Message: ${form["message"].value} <br>
        You can reach out to him/her on email: ${form["email"].value}`
    }).then(
      message => alert(message)
    );
}

document.getElementById("chatbtn").addEventListener("click", (e)=>{
    console.log(e);
   var chat = document.getElementById("chat");
   if(chat.style.display==="block"){
    chat.style.display="none";
   }else{
    chat.style.display="block";
   }
});