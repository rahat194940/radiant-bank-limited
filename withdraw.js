document.getElementById('btn-user-2').addEventListener("click" , function () {
    var haguraw = document.getElementById('hagu') ;
    var hagustring = haguraw.value ;
    var freshhagu = parseFloat(hagustring) ;
    var withdrawmulraw = document.getElementById('withdraw-mul') ;
    var withdrawmulstring = withdrawmulraw.innerText ;
    var freshwithdrawmul = parseFloat(withdrawmulstring)

    var balancemulraw = document.getElementById('balance-mul') ;
    var balancemulstring = balancemulraw.innerText ;
    var freshbalancemul = parseFloat(balancemulstring)

    if (freshhagu > freshbalancemul){
        alert('SORRY ! SOMETHING ELSE PLEASE TRY AGAIN')
        var ganja = document.getElementById('btn-user-2').addEventListener("click", setAttribute(this.ariaDisabled)) 
    }
    if (haguraw.value === ""){
        alert("PLEASE TYPE THE VALUE OF WITHDRAW")
        var halum = document.getElementById('btn-user-2').addEventListener("click", setAttribute(this.ariaDisabled)) 
    }

var limu = haguraw.value ;
if (isNaN(limu) === true){
   alert("please type number")
var malum = getElementById("btn-user-2").addEventListener('click',setAttribute(this.ariaDisabled))
}
    var withdrawequation = freshwithdrawmul + freshhagu ;
    withdrawmulraw.innerText = withdrawequation ;

    var balancewithdrawequation = freshbalancemul - freshhagu ;
    balancemulraw.innerText = balancewithdrawequation ;

    haguraw.value = "" ;
  
})