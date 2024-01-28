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
   alert("টেহা রজমা দিলে জমা দে তোর টেয়া। মজা করচ ক্যা? সতানে কি লাড়া দ্যায়? হুদাও বাটন এডা টিবস। টেহার পরিমান দে কত টেয়া জমা দিবি এয়ার পর টেহা জমা দে । ভালা হইযা ভালা হইতে টেয়া লাগে না। ")
   var halum = document.getElementById('btn-user').addEventListener("click", setAttribute(this.ariaDisabled)) 
}

   var equationDeposit = freshmagu + freshdepositmul ;
  depositmulraw.innerText = equationDeposit ;

  var depositbalaceequation = freshmagu + freshbalancemul ;
  balancemulraw.innerText = depositbalaceequation ;

  maguraw.value = '' ;
})