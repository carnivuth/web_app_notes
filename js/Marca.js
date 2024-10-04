function Marca(marca){
        this.marca=marca;
        this.contatori=new Array();
        this.modelli= new Array();
       
        this.addModello=function(nomeModello){
			this.modelli.push(nomeModello);
			this.contatori.push(0);
        };

        this.toString=function(){
			var s ="<select id="+this.marca+">";
			for(var j = 0; j < this.modelli.length; j++){
				s+="<option value="+j+" >"+this.modelli[j]+"</option>";
			}
			s+="</select>";
			return s;
        };
		this.getCounters=function(){
			var s="";
			for(var i=0;i<this.contatori.length;i++){
				s+=this.modelli[i]+":"+this.contatori[i]+"<br> ";
			}
			return s;
		}

     
}

