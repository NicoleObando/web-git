
//CANVAS
/*
var canvas = new fabric.Canvas('c', { selection: false });

var contexCanvas = $('#c')[0].getContext('2d'); 
    
var line, isDown;

//contexCanvas.beginPath();

canvas.on('mouse:down', function(o){
   console.log("click dw")
  
  isDown = true;
    
  var pointer = canvas.getPointer(o.e);
  var points = [ pointer.x, pointer.y, pointer.x, pointer.y ];
  line = new fabric.Line(points, {
    strokeWidth: 5,
    fill: 'black',  
    stroke: 'black',
    originX: 'center',
    originY: 'center'
  });
  
  canvas.add(line);
});

canvas.on('mouse:move', function(o){

    
  if (!isDown) return;
  var pointer = canvas.getPointer(o.e);
  line.set({ x2: pointer.x, y2: pointer.y });
  canvas.renderAll();
});

canvas.on('mouse:up', function(o){
  
  isDown = false;
});


//-------    */
    
        id=0;
        var flujoContador = 0;
        var flujoAcual = 1;
        var arrFiguras = []
        var arrLetras = []
        var arregloFlujo = []
        
        
        
    class Flujo{
        
        constructor(version, arrDiagramas, usuario){
            this.version = version;
            this.arrDiagramas;
            this.usuario = usuario;
            
        }
        
        
    }   
        
        
    class Figura{
	constructor(imagenFondo, texto, posicionX, posicionY, id, bgColor, idFlufo){
    
    	this.imagenFondo= imagenFondo;
    	this.texto = texto;
    	this.posicionX = posicionX;
    	this.posicionY = posicionY;
        this.id = id;
        this.bgColor = bgColor;
        this.idFlufo = idFlufo;    
	}   
	   
}   
        
  /*funcion login */

 class Usuario{
	constructor(name, username, password){
    this.name = name;
	this.username= username;
	this.password = password;
	
    
	}
	
	
	
}



  /*hasta aqui*/
        
    var arrObjetos = []
    var flujoSeleccionado;
    
    $(document).ready(function(){
        
        
        
       
        
        
        
        $('#selecFlujo').change(function(){
            $("#frame").empty();
             flujoSeleccionado = $("#selecFlujo")[0].selectedIndex
             flujoAcual = flujoSeleccionado +1 
             console.log(flujoAcual)
             
             
             //cargamos las figuras
             var elementosGuardados = localStorage.getItem("Figuras")
             arrFiguras = JSON.parse(elementosGuardados)
             
             
			 //console.log(localStorage.getItem("Figuras"))
			 
			 
			 arrFiguras.forEach(function(figura){
			     if (figura.idFlufo == flujoAcual) {
    			    var elementoCargado = $('<div id='+ figura.id +'></div>');
    			 	elementoCargado.addClass("ui-draggable")
    			 	elementoCargado.addClass(figura.imagenFondo)
    			 	elementoCargado.append('<input  type="text" name="" placeholder="" value='+ figura.texto +'>')
    			 	elementoCargado.css({"left":figura.posicionX,"top":figura.posicionY});
    			 	console.log(elementoCargado.css("background-color",figura.bgColor))
    			 	elementoCargado.css("background-color",figura.bgColor)
    			 	$("#frame").append(elementoCargado)
    			 	
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
			 	
			 	
			 	
			 })
             
             
        })
        
        
        var usuario = new Usuario("Jonathan", "user1", "1234")
        
        
        $("#exportar").click(function(e){
        $("#exportar").attr( "download", "proyecto.json" );
        this.href = 'data:plain/text,' + JSON.stringify(arrFiguras);
        
        });
        
        
        
        

     //COLORES           
        $("#pink").click(function(){
            
            	$(".color").css("background-color","pink");
            	 
        })
        
         $("#blue").click(function(){
            
            	$(".color").css("background-color","#00bfff");
            	
        })
         
           $("#white").click(function(){
            
            	$(".color").css("background-color","white");
            	
        })
         
           $("#yellow").click(function(){
            
            	$(".color").css("background-color","#ffffe0");
            	
        })
         
         
         
         $('#crearFlujo').click(function() {
            var contadorId=0;
            $('#selecFlujo').empty()
            flujoContador ++
            var flujoTmp = new Flujo("Version"+flujoContador ,arrObjetos, usuario)
            arregloFlujo.push(flujoTmp)
            
            arregloFlujo.forEach(function(flujo){
            contadorId++
            console.log(flujo)
            
            $("#selecFlujo").append("<option id="+contadorId+">" + flujo.version + "</option>")
            
            
        })
            
         })
                                   
        $("#save").click(function(){
//        var txtFile = "test.txt";
//        var file = new File(txtFile,"write");
			                       
			localStorage.removeItem("Figuras")
            var figuras = JSON.stringify(arrObjetos)
            localStorage.setItem("Figuras", figuras)
            
            
            console.log("se guardo con exito")          
            console.log(arregloFlujo.length)
    })
    
        
        
        
               
        $('#limpiar').click(function() {
            $("#frame").empty();
      
      /*
      //ELIMINANDO DIVS
          for (var i=0; i<10; i++) {
          itemFrame = "clonediv" + i
                $('#' + itemFrame).remove();
            }
        //LIMPIANDO CANVAS
        contexCanvas.clearRect(0, 0, $('#c')[0].width, $('#c')[0].height); 
       
       */
       
       
        })
        
        //Counter
        counter = 0;
        //Make element draggable
        $(".drag").draggable({
            helper:'clone',
            containment:'frame',
            
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
                    $("#clonediv"+counter).removeClass("color");
					
					var bgColor = $("#clonediv"+counter).css("background-color");
                    
                    var pos=$(ui.helper).offset();
                    var figTmp = new Figura(itemDragged,"", pos.left, pos.top,"clonediv"+counter, bgColor, flujoAcual)
                    arrObjetos.push(figTmp);
                    id++;
                    console.log(arrObjetos)
				}
        	}
        });
        
       
        
    });
    
    
     