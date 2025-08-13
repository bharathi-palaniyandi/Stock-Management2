function register(){
    const username=document.getElementById("username").value;
    const password=document.getElementById("password").value;

    if(username && password){
        localStorage.setItem('username',username)
        localStorage.setItem('password',password);
        alert('registration sucessful please login')
        window.location.href='login.html';
    }
    else{
        alert('please enter the  both username password')
    }
}


// login  //

function login(){
    const username=document.getElementById("logiusername").value;
    const password=document.getElementById("logipassword").value;

    const storedusername=localStorage.getItem('username')
    const storedpassword=localStorage.getItem('password');

    if(username===storedusername && password===storedpassword){
        alert("login successful")
        window.location.href='product.html'
    }
    else{
        alert("invalid username and password")
    }
}