
//function in the button in the contact form
document.getElementById("btns").onclick = function sample(){

    const name = document.getElementById("fullname").value;
    const Emails = document.getElementById("Email").value;
    const subject = document.getElementById("subject").value;
    const div = document.getElementById("box");
    const noname= "Enter your Fullname ❗";
    const noemail= "Enter your Email ❗";
    const nomessage= "Enter your Message ❗ ";

//if else condition in contact
    if (name == "") {
        div.setAttribute("id", "error"); 
        div.innerHTML = noname;
        setTimeout(()=> div.remove(), 2000) 
        setTimeout(()=> location.reload(),2000)
    }
    else if (Emails == "") {
        div.setAttribute("id", "error"); 
        div.innerHTML = noemail;
        setTimeout(()=> div.remove(), 3000)
        setTimeout(()=> location.reload(),2000)
    }
    else if (subject == "") {
        div.setAttribute("id", "error"); 
        div.innerHTML = nomessage;
        setTimeout(()=> div.remove(), 3000)
        setTimeout(()=> location.reload(),2000)
    }
    else{
        alert("thank you " + name + " for connecting i will send the my message on your Email in " + Emails);
        document.getElementById('fullname').value = '';
        document.getElementById('Email').value = '';
        document.getElementById('subject').value = '';
    }
}
