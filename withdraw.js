document.getElementById('btn-user-2').addEventListener("click" , function (){
    var haguraw = document.getElementById('hagu') ;
    var hagustring = haguraw.value ;
    var freshhagu = parseFloat(hagustring) ;
    var turaw = document.getElementById('tu') ;
    var tustring = turaw.innerText ;
    var freshtu = parseFloat(tustring) ;
    
    var equationwithdraw = freshhagu - freshtu ;
    turaw.innerText = equationwithdraw ;
 
    var puraw = document.getElementById('pu');
    var pustring = puraw.innerText ;
    var freshpu = parseFloat(pustring) ;
 
    var equationwithdrawbalance = freshhagu - freshtu ;
    turaw.innerText =  equationwithdrawbalance ;

    hagustring = "" ;
 })