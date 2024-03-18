const form = document.querySelector('form')

form.addEventListener('submit',async(e)=>{
e.preventDefault()
const usernameLogin =document.querySelector('#nameus')
const emailLogin =document.querySelector('#emailus')
const passwordLogin = document.querySelector('#passus')

        const res = await fetch("https://65ea117bc9bf92ae3d3b05d0.mockapi.io/users")
      const data =await res.json();
    console.log(data);
    const objOfData = data.filter(e => {
      return(e.name === usernameLogin.value&&
      e.email=== emailLogin.value&&
      e.password === passwordLogin.value)
      
    })
 let obj = {
    name : `${usernameLogin}`,
    email:`${emailLogin}`,
    password : `${passwordLogin}`,
   
 }
console.log(objOfData); 
    if (objOfData) {
            alert('login successfly')
        }else{
            alert('you should signin')
        }

           usernameLogin.value = ''
           emailLogin.value = ''
           passwordLogin.value = ''
})



