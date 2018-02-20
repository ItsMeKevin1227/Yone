$(function(){
				  $("#quantity").keyup(function(){
				    if(isNaN($(this).val())||parseInt($(this).val())<1){
				      $(this).val("1");
				      $("#totalPrice").html($("#price").val());
				      return;
				    }
				    var total=parseFloat($("#price").val())*parseInt($(this).val());
				    $("#totalPrice").html(total.toFixed(0));
				  })
				  $("#add").click(function(){
				    numAdd();
				  });
				  $("#del").click(function(){
				    numDec();
				  });
				})
				/*商品數量+1*/
				function numAdd(){
				  var num_add = parseInt($("#quantity").val())+1;
				  if($("#quantity").val()==""){
				    num_add = 1;
				  }
				  $("#quantity").val(num_add);
				  var total = parseFloat($("#price").val())*parseInt($("#quantity").val());
				  $("#totalPrice").html(total.toFixed(0));
				}
				/*商品數量-1*/
				function numDec(){
				  var num_dec = parseInt($("#quantity").val())-1;
				  if(num_dec<1){
				    //購買數量必須大於或等於1
				    alert("購買數量必須大於或等於1");
				  }
				  else{
				    $("#quantity").val(num_dec);
				    var total = parseFloat($("#price").val())*parseInt($("#quantity").val());
				    $("#totalPrice").html(total.toFixed(0));
				  }
				}