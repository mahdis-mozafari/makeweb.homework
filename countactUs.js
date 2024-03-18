const nameInput = document.querySelector('#name')
const emailInput  = document.querySelector('#email')
const passwordInput= document.querySelector('#subject')
const massageInput = document.querySelector('#message')
const formEle = document.querySelector('form')


const singIn = document.addEventListener('submit',(e)=>{
e.preventDefault();
const name = e.target.name
const email =e.target.email
const password = e.target.subject
const massage = e.target.massage 
})

