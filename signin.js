// //=============started countact Us js============//
    const username = document.querySelector('#usernameuser');
    const email =document.querySelector('#exampleFormControlInput1')
    const password = document.querySelector('#inputPassword6');
    const message =document.querySelector('#exampleFormControlTextarea1')
    const form = document.querySelector('form')
    const button = document.querySelector('.submit')

button.addEventListener('click',async(e)=>{
    e.preventDefault();
    fetch('https://65ea117bc9bf92ae3d3b05d0.mockapi.io/users', {
        method: 'POST',
        body: JSON.stringify({ 
            name: username.value,
            email:email.value,
             password: password.value }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if(response.ok) {
            alert('Login successful');
        } else {
            alert('Login failed. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });

username.value = ''
password.value =''
email.value =''
message.value=''
})

//===================ended countact us js================//


//=====================started formpage js =============//
