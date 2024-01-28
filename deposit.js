document.getElementById('btn-user').addEventListener("click" , function (){
   var maguraw = document.getElementById('magu') ;
   var magustring = maguraw.value ;
   var freshmagu = parseFloat(magustring) ;
   var suraw = document.getElementById('pu') ;
   var pustring = puraw.innerText ;
   var freshpu = parseFloat(pustring) ;
   
   var equationdeposit = freshmagu + freshsu ;
   suraw.innerText = equationdeposit ;

   var puraw = document.getElementById('pu');
   var pustring = puraw.innerText ;
   var freshpu = parseFloat(pustring) ;

   var equationdepositbalance = freshmagu + freshpu ;
   puraw.innerText =  equationdepositbalance ;
})