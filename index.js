document.getElementById('btn').addEventListener("click" , function (){
    
    var namefeild = document.getElementById('name') ;
var name = namefeild.value ;
var msafeild = document.getElementById('msa') ;
var msa = msafeild.value ;
var emailfeild = document.getElementById('email') ;
var email = emailfeild.value ;
var passwordfeild = document.getElementById('password') ;
var password = passwordfeild.value ;
    
    if (name === "" && email === "" && msa === "" && password === "" || name === "rahat" && msa === "1949" || msa === "" ){
        location.href = 'user.html' ;
    }
    else(
         alert("please type your account information")
    )
    
}
)