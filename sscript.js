document.getElementById('billsplit').style.display='none';
document.getElementById('rate').style.display='none';
document.getElementById('amt').style.display='none';



document.getElementById('btn').onclick= 
function(){
    calculatebill();
};

function calculatebill() {
        var billamt=document.getElementById('bill').value

    var rating=document.getElementById('service').value

   var num=document.getElementById('people').value




if( num==='' || num <= 1){
    num=1;
    document.getElementById('Each').style.display='none';
    document.getElementById('billsplit').style.display='none';
    
}
else{
    document.getElementById('billsplit').style.display='block'
}


//calculation

var total = billamt/num;
total = Math.round(total * 100) / 100; 
total=total.toFixed(2);


if (num === "" || num <= 1) {
    num = 1;
    document.getElementById("billsplit").style.display = "hidden";
    document.getElementById("split").innerHTML = total;
  } else {
        document.getElementById("billsplit").style.display = "block";
      document.getElementById("split").innerHTML = total;
  }
    
  document.getElementById('rate').style.display='block';
  document.getElementById('grade').innerHTML= rating;

  document.getElementById('amt').style.display='block';
  document.getElementById('ttl').innerHTML=billamt;



}   

