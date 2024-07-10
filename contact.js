

function sendMail() {
    const namee = document.getElementById('name');
    const emaill = document.getElementById('email');
    const messagee = document.getElementById('message');

    const params = {
        name: namee.value.trim(),
        email: emaill.value.trim(),
        message: messagee.value.trim(),
    };

    const serviceID = "service_z4vdfpq"; 
    const templateID = "template_e5nkum8"; 

    namee.classList.remove('input-error');
    emaill.classList.remove('input-error');
    messagee.classList.remove('msgError');

    if (params.email === '' || params.name === '' || params.message === '') {
    
        if (params.name === '') {
            namee.classList.add('input-error');
        }
        if (params.email === '') {
            emaill.classList.add('input-error');
        }
        if (params.message === '') {
            messagee.classList.add('msgError');
        }

        return false;
    } else {
        send(params, serviceID, templateID);
        return true;
    }
}

const send = (params, serviceID, templateID) => {
    emailjs.send(serviceID, templateID, params)
        .then((res) => {
     
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
            document.getElementById('name').classList.remove('input-error');
            document.getElementById('email').classList.remove('input-error');
            document.getElementById('message').classList.remove('input-error');
            
            console.log(res);
            alert('Message sent successfully!');
        })
        .catch((error) => console.error('Error sending message:', error));
};
