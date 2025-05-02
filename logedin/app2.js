let signupform = document.getElementById("signup");



if(signupform) {
  signupform.addEventListener("submit", (event) => {
    event.preventDefault();

    let data = {
      email: document.getElementById("floatingInput").value,
      password: document.getElementById("floatingPassword").value,
    };
    

   const  users =  JSON.parse(localStorage.getItem("users"))  || [];
    users.push(data)
    localStorage.setItem("users",JSON.stringify(users))   
    // let user =JSON.parse(localStorage.getItem("user") || [])





    // localStorage.setItem(key, JSON.stringify(data));
    console.log(localStorage.getItem("users"));  // Debugging to verify data
    
    window.location.href = "login.html"; // Redirect to login page
  });
}

let loginform = document.getElementById("loginform");
if (loginform) {
  loginform.addEventListener("submit", (event) => {
    event.preventDefault();
    
    let emailinput = document.getElementById("email");
    let passwordinput = document.getElementById("password");
    let email = emailinput.value;
    let password = passwordinput.value;


    let users = JSON.parse(localStorage.getItem("users") || [] );
    // console.log(saveuser)
    let matchuser=users.find((user) => user.email===email && password === user.password  )
    if ( matchuser) {
      // alert("go to home ");
      window.location.href = "homepage.html"; // Redirect to homepage
    } else {
let para=document.getElementById("para")
para.innerText="Please enter a valid email or password"
      
      } 
    
  });
}

let form3=document.getElementById("todo")
let paragraph=document.getElementById("paragraph")
let todoinput=document.getElementById("todoinput")
// let input=todoinput.value.trim() 
// console.log(str)
// let div=document.getElementById("todoobject")
todo=[];

if(form3){
  
  form3.addEventListener("submit",(event)=>{
    event.preventDefault()
    let input=todoinput.value.trim()

    // let  todo =  JSON.stringify(input)  || [];
    console.log(todo)
    todo.push(input)
    JSON.stringify(1+todo)   
    // todolengtn=todo.length
    let index = todo.indexOf(input); 
     let result=todo.map((item,index) => ++index +") " +item ).join (`
     `)  
    paragraph.innerText=`   {
      ${ result}
  }`
    
    
  })
}








