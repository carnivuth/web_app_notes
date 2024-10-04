$("document").ready(function(){
  $("#btn_delete").click(function(){
    var title=$("#npt_title").val();
    var notes=localStorage.getItem("notes")
    if (notes != null) {
      notes= JSON.parse(notes)
      for(var i=0;i<notes.length;i++){
        note=notes[i]
        if(note.title==title){
          notes.splice(i,i);
        }
      }
    localStorage.setItem("notes",notes)
    }
    $("#npt_title").val("");
  });
  $("#btn_ereaseNotes").click(function(){
    window.localStorage.clear();
  });
  $("#dropdown-list").hide();
  $("#div_linkMenu").mouseenter(function(){
    $("#dropdown-list").show(200);
  });
  $("#div_linkMenu").mouseleave(function(){
    $("#dropdown-list").hide(200);
  });
});

