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
        alert('হারামজাদা তোর একাউন্টে এত টেহা বর্তমানে আ্যাভেইলএবল নাই। ভাগ অশিব্ব। বাপের হোটেল পাইচচ? আগে নিজের  একাউন্টের ব্যালেন্স দেখ। এহ কিতা ভাবচচ, আমরা তোগোর মতো হোলাইনের লাই সব ব্যাবস্থা করি রাহি। বাটন এডাত টিপতি হাইত্তি ন। এরুম অশব্বি মার্কা কাম কইল্লে। ভালা হইযা ভালা হইতে টেয়া লাগে না।')
        var ganja = document.getElementById('btn-user-2').addEventListener("click", setAttribute(this.ariaDisabled)) 
    }
    if (haguraw.value === ""){
        alert("টেহা লইলে উডা তোর টেয়া। মজা করচ ক্যা? সতানে কি লাড়া দ্যায়? হুদাও বাটন এডা টিবস। টেহার পরিমান দে এয়ার পর টেহা উডা অবশ্যই আগে তোর একাউন্টের ব্যালেন্স ভালা করি দেহি ল। ভালা হইযা ভালা হইতে টেয়া লাগে না। ")
        var halum = document.getElementById('btn-user-2').addEventListener("click", setAttribute(this.ariaDisabled)) 
    }
    var withdrawequation = freshwithdrawmul + freshhagu ;
    withdrawmulraw.innerText = withdrawequation ;

    var balancewithdrawequation = freshbalancemul - freshhagu ;
    balancemulraw.innerText = balancewithdrawequation ;

    haguraw.value = "" ;
  
})