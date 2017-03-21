function my()
{
	//alert("MyFucntion called");
	var modulecode = document.getElementById("ModuleCode");
	//alert(modulecode.value);
	var dataString= modulecode;
	$.ajax({
		url:"http://192.168.0.104/testconn.php",
		method:"POST",
		dataType:"json",
		cache:false,
		//dataType:"html",
		data: {ModuleCode:modulecode.value},
		success: function(html){
	       //alert("Going");
           
		   var DOM =jQuery("#DOM");// taking division <div> id i.e. DOM..
		   
		   DOM.empty();
		   	   
		   jQuery.each(html,function(key,value){
		   	   
		   DOM.append("<li>" + value.Module_Name + "</li>")
		     		   
		   });
		
		},
		error: function(e){
			alert(e);
		}
		
	});
	
}