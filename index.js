document.getElementById('btn').addEventListener("click" , function (){
    
    var namefeild = document.getElementById('name') ;
var name = namefeild.value ;
var msafeild = document.getElementById('msa') ;
var msa = msafeild.value ;
var emailfeild = document.getElementById('email') ;
var email = emailfeild.value ;
var passwordfeild = document.getElementById('password') ;
var password = passwordfeild.value ;
    
    if (name === "Abu Sufian Rahat" && email === "abusufianrahat1949@gmail.com" && msa === "194940" && password === "@@KMASR194940" || name === "Abu Sufian Rahat" && msa === "194940" ||  msa === "194940" ){
        window.location.href = 'user.html' ;
    }
    
}
)