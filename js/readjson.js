jQuery(document).ready(function(){
	 jQuery.ajax({
	  url:"http://192.168.0.104/testconn.php",
	  type:"POST",
	  dataType:"json",
	  data:"param=no",
	  success: function(html){
	       //alert("Going");
           var DOM =jQuery("#DOM");// taking division <div> id i.e. DOM..
		   
		   jQuery.each(html,function(key,value){
		   
		   console.log(value);
		   
		   DOM.append("<li>" + value.Module_Name + "</li>")
		   
		   });
	  },
	  error: function(e){
		  
		  alert(e);
	  }
	  
	
	});
	
	});