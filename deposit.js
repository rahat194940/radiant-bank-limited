document.getElementById('btn-user').addEventListener("click" , function () {
   var maguraw = document.getElementById('magu') ;
   var magustring = maguraw.value ;
   var freshmagu = parseFloat(magustring) ;
   var depositmulraw = document.getElementById('deposit-mul') ;
   var depositmulstring = depositmulraw.innerText ;
   var freshdepositmul = parseFloat(depositmulstring) ;

   var balancemulraw = document.getElementById('balance-mul') ;
  var balancemulstring = balancemulraw.innerText ;
  var freshbalancemul = parseFloat(balancemulstring)

  if (maguraw.value === ""){
   alert("PLEASE TYPE THE VALUE OF DEPOSIT")
   var halum = document.getElementById('btn-user').addEventListener("click", setAttribute(this.ariaDisabled)) 
}

var himu = maguraw.value ;
if (isNaN(maguraw) === true){
   alert("please type number")
var malum = getElementById("btn-user").addEventListener('click',setAttribute(this.ariaDisabled))
}

   var equationDeposit = freshmagu + freshdepositmul ;
  depositmulraw.innerText = equationDeposit ;

  var depositbalaceequation = freshmagu + freshbalancemul ;
  balancemulraw.innerText = depositbalaceequation ;

  maguraw.value = '' ;
})