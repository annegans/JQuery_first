
var totalbalance1 = 0;
var deposit = ""
var accounttotal = ""

var setUpEventListerners = function(){
  
  $("#deposit1").click(function(){
   desposit = parseInt($("#amount1").val());
   console.log(desposit);
   totalbalance1 = totalbalance1 + Number(desposit);
   $("#balance1").html(totalbalance1); 
  });


 $("#withdraw1").click(function(){
   desposit = parseInt($("#amount1").val());
   console.log(desposit);
   totalbalance1 = totalbalance1 - Number(desposit);
   $("#balance1").html(totalbalance1); 
  });

}

$(document).ready(function(){
  
  // call a function with your event listeners
  setUpEventListerners();

});

 // var accounttotal = balance + desposit;
 //    var balance = accounttotal;
 //    $('#balance1').text('$' + accounttotal);