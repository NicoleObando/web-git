id=0;
        var arrFiguras = []
        var arrLetras = []
    class Figura{
	constructor(imagenFondo, texto, posicionX, posicionY, id){
    
	this.imagenFondo= imagenFondo;
	this.texto = texto;
	this.posicionX = posicionX;
	this.posicionY = posicionY;
	this.id = id;
	}
	
}
        
    var arrObjetos = []
    
    $(document).ready(function(){
        
        $("#save").click(function(){
//        var txtFile = "test.txt";
//        var file = new File(txtFile,"write");
				
			
            var figuras = JSON.stringify(arrObjetos)
            localStorage.setItem("Figuras", figuras)
            console.log("se guardo con exito")          

    })
    
        $("#cargar").click(function(){
             
             var elementosGuardados = localStorage.getItem("Figuras")
             arrFiguras = JSON.parse(elementosGuardados)
             
             
			 console.log(localStorage.getItem("Figuras"))
			 
			 
			 arrFiguras.forEach(function(figura){
			 	var elementoCargado = $('<div id='+ figura.id +'></div>');
			 	elementoCargado.addClass("ui-draggable")
			 	elementoCargado.addClass(figura.imagenFondo)
			 	elementoCargado.append('<input  type="text" name="" placeholder="" value='+ figura.texto +'>')
			 	elementoCargado.css({"left":figura.posicionX,"top":figura.posicionY});
			 	
			 	$("#frame").append(elementoCargado)
			 	
			 	
			 })
			 
			 
			 
           
     
            
        })
        
        
        $('#limpiar').click(function() {
            $("#frame").empty();
          
        })
        
        //Counter
        counter = 0;
        //Make element draggable
        $(".drag").draggable({
            helper:'clone',
            containment: 'frame',
            
            //When first dragged
            stop:function(ev, ui) {
            	var pos=$(ui.helper).offset();
            	objName = "#clonediv"+counter
            	$(objName).css({"left":pos.left,"top":pos.top});
            	$(objName).removeClass("drag");
            	
            	


               	//When an existiung object is dragged
                $(objName).draggable({
                	containment: 'parent',
                    stop:function(ev, ui) {
                    	var pos=$(ui.helper).offset();
                    	console.log($(this).attr("id"));
						console.log(pos.left)
                        console.log(pos.top)
                    }
                });
            }
        });
        
        
        
        
        
        
        
        
        
        
        //Make element droppable
        $("#frame").droppable({
			drop: function(ev, ui) {
				
				if (ui.helper.attr('id').search(/drag[0-9]/) != -1){
					counter++;
					var element=$(ui.draggable).clone();
					element.find('input').change(function(){
						
						var input = $(this)
						//figuras[0].text = '';
						arrObjetos.forEach(function(figura) {
							
							if(figura.id==input.parent().attr('id')){
								
								figura.texto = input.val()
								console.log(figura)
							}
						    
						    	//console.log("encontrado")
						})
						
						
						
					})  
					element.addClass("tempclass");
					$(this).append(element);
					//$(".tempclass").attr("id","clonediv"+counter);
					element.attr("id","clonediv"+counter);
					$("#clonediv"+counter).removeClass("tempclass");
                    
                                
					//Get the dynamically item id 
					draggedNumber = ui.helper.attr('id').search(/drag([0-9])/)
					
					itemDragged = "dragged" + RegExp.$1
					
					
					
					$("#clonediv"+counter).addClass(itemDragged);
					
					
                    var pos=$(ui.helper).offset();
                    var figTmp = new Figura(itemDragged,"", pos.left, pos.top,"clonediv"+counter)
                    arrObjetos.push(figTmp);
                    id++;
                    console.log(arrObjetos)
				}
        	}
        });
    });
    
    
     