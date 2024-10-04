$("document").ready(function(){
	$("#btn_new").click(function(){
    var notes=localStorage.getItem("notes")
    if (notes != null) {
    notes= JSON.parse(notes)
    }else{
      notes= []
    }
		var title=$("#npt_title").val();
		var description=$("#npt_description").val();
		var note=new Note(title,description);
    notes.push(note)
		var notes=JSON.stringify(notes);
		localStorage.setItem("notes",notes);
		$("#npt_title").val("");
		$("#npt_description").val("");
	});
	$("#dropdown-list").hide();
	$("#div_linkMenu").mouseenter(function(){
			$("#dropdown-list").show(200);
	});
	$("#div_linkMenu").mouseleave(function(){
			$("#dropdown-list").hide(200);
	});
});
