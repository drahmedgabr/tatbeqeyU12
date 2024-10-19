const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const userSubject = document.getElementById("userSubject");
const userMessage = document.getElementById("userMessage");


async function sendEmail() {
    if (userName.value == "") {
        alert("Please enter your name");
    } else if(userEmail.value == ""){
        alert("Please enter your email");
    } else if(userSubject.value == ""){
        alert("Please enter subject");
    } else if(userMessage.value == ""){
        alert("Please enter your message");
    } else {
        const apiUrl = `https://tatbeqak.site/apps/tatbeqey/apps/projects/test_api/mail?mail=${userEmail.value}&message=${userMessage.value}&name=${userName.value}&subject=${userSubject.value}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        const status = data.status;
        
        if (status == true) {
            alert("Message sent successfully");
            userName.value = "";
            userEmail.value = "";
            userSubject.value = "";
            userMessage.value = "";
        } else {
            alert("Sending message failed");
        }
        
    }
}