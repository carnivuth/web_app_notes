$("document").ready(function(){
	//$("#dropdown-menu").hide();
	$("#dropdown-menu").mouseenter(function(){
			$("#dropdown-list").show(1000);
	
	});
	$("#dropdown-menu").mouseleave(function(){
			$("#dropdown-list").hide(1000);
	
	});
});
