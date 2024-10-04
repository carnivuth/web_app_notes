function Note(title,description){
        this.title=title;
        this.description=description;
       
       
       

        this.toString=function(){
			return this.title+this.description;
        };
        this.getTitle=function(){
			return this.title;
        };
        this.getDescription=function(){
			return this.description;
        };
		

     
}


