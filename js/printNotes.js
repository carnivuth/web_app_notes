$("document").ready(function(){
	var s="";
	var note;
	var s2="<ul class='list-group' >";
  notes=localStorage.getItem("notes")
    if (notes != null) {
    notes= JSON.parse(notes)
    }else{
      notes= []
    }
	for(var i=0;i<notes.length;i++){
		note=notes[i];
		s+= "<li class='list-group-item'>"+note.title+" <br>"+ note.description+ "</li><br>";
	}
	s+="</ul>"
	$("#div_inputOutput").html(s);
	$("#dropdown-list").hide();
	$("#div_linkMenu").mouseenter(function(){
			$("#dropdown-list").show(200);
	});
	$("#div_linkMenu").mouseleave(function(){
			$("#dropdown-list").hide(200);
	});
});
