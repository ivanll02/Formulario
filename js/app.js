

const listaAutos=[
    {codigo: 3, nombre: 'nombre1', marca:'FORD',stock:50, precio: 210000},
    {codigo: 2, nombre: 'nombre2', marca:'FIAT',stock:10, precio: 220000},
    {codigo: 6, nombre: 'nombre3', marca:'HONDA',stock:2, precio: 50000000},
    {codigo: 200, nombre: 'nombre4', marca:'NISSAN',stock:30, precio: 4000},
    {codigo: 200, nombre: 'nombre5', marca:'TOYOTA',stock:20, precio: 70000000},
    {codigo: 15 , nombre: 'nombre6', marca:'VOLVO',stock:12, precio: 7000},
    
    ];

    
    function mostrarlistaPb(){
    
    console.log('Lista de Autos')
    for(var i=0; i <listaAutos.length;i++){
        
        console.log(listaAutos[i])
    }
    
    
    }
    
    function codigoAuto(){
        
        var buscarcodigo=parseInt(document.getElementById('codigo').value);
       var pos =-1;
    
       for(var i=0;i<listaAutos.length;i++){
          if(listaAutos[i].codigo=== buscarcodigo){
              pos=i;
          }
         
    
       }
       return pos;
    
    
    
    }
    
    
    function buscarCod_AutoPc(){
    
    var pos= codigoAuto();
    
    if(pos!== -1){
    console.log('la posicion de codigo es :', pos);
    
    
    }else{
        console.log('NO SE ENCONTRO')
    }
    
    }
    function SumaPrecioAutoPi(){
      var suma=0;
      for(var i=0;i<listaAutos.length;i++){

        suma=suma+listaAutos[i].precio


      }

console.log('la suma de todos los precios de los automóviles es :'+suma);



    }
    

    function SumaPrecioAutoMenorPj(){
        var suma=0;
        
        for(var i=0;i<listaAutos.length;i++){
    
            if( listaAutos[i].precio < 150000 ){

                suma=suma+listaAutos[i].precio

            }
          
    
            
        }
        console.log('las sumas de todos los automóviles que tengan un precio menor a 150000 es :'+suma);
    }
    function SumaPrecioAutoMayorCodPk(){
        var suma=0;
        
        for(var i=0;i<listaAutos.length;i++){
    
            if(listaAutos[i].codigo > 100){

                suma=suma+listaAutos[i].precio

            }
          
    
            
        }
        console.log('la suma de los precios de los automóviles con código mayor a 100 es :'+suma);
    }

    
       function limpiarformularioPf(){
        document.getElementById("form").reset();
      }
    
    function multiploPh(){
    var cant=0;
    for(var i=0;i<listaAutos.length;i++)
            {
               
                if(listaAutos[i].codigo  %  3 === 0 ){
    
                  cant++;
                  
                }
                
                
            }
            console.log('los multiplo de 3 son :'+cant);
    
    }
    
    
    function contarPrecioPg(){
    
        var cant=0;
        for(var i=0;i<listaAutos.length;i++)
                {
                   
                    if(listaAutos[i].precio >=200000 && listaAutos[i].precio <=250000){
        
                      cant++;
                      
                    }
                    
                    
                }
                console.log('cantidad de automóviles que tienen precio entre $200000 a $250000. :'+cant);
    
    
    }

    function AutoMasCaroPs(){
        

      var band=true;
     
      for(var i=0;i<listaAutos.length;i++){

        if(band===true){
            max=listaAutos[i];
            band=false;
        }else{
            if(listaAutos[i].precio > max.precio){

                max=listaAutos[i];
            }
        }
          
        

    }
    console.log('el automóvil más caro :')
    console.log(max);

    }

    function AutoMasBaratoPt(){
        

        var band=true;
       
        for(var i=0;i<listaAutos.length;i++){
  
          if(band===true){
              min=listaAutos[i];
              band=false;
          }else{
              if(listaAutos[i].precio < min.precio){
  
                  min=listaAutos[i];
              }
          }
            
          
  
      }
      console.log('el automóvil más barato :')
      console.log(min);
  
      }


      function AutoMaxMinStockPu(){
        

        var band=true;
       
        for(var i=0;i<listaAutos.length;i++){
  
          if(band===true){
              min=listaAutos[i];

              max=listaAutos[i];

              band=false;
          }else{
              if(listaAutos[i].stock > max.stock){
  
                  max=listaAutos[i];
              }else{
                  if(listaAutos[i].stock < min.stock){
                    min=listaAutos[i];
                  }
              }
          }
            
          
  
      }
      console.log('automóviles con el máximo y mínimo stock :')
      console.log(max);
      console.log(min);
  
      }


      function PosicionMinPv(){

        var band=true;
       
        for(var i=0;i<listaAutos.length;i++){
  
          if(band===true){
              min=listaAutos[i];
              posMin=i;
              band=false;
          }else{
              if(listaAutos[i].codigo < min.codigo){
  
                  min=listaAutos[i];
                  posMin=i;
              }
            

          }

          

      }
      console.log('la posición del mínimo automóvil : '+ posMin);
      
      
    }



    function MarcaAutoPl(){

        for(var i=0;i<listaAutos.length;i++)
        {
           
            if(listaAutos[i].marca === 'FORD' || listaAutos[i].marca === 'FIAT' ){
                console.log(listaAutos[i])
              
              
            }
            
            
        }





    }


    function codigoMarca(){
        
        var buscarmarca=document.getElementById('marca').value;
       var pos =-1;
    
       for(var i=0;i<listaAutos.length;i++){
          if(listaAutos[i].marca=== buscarmarca){
              pos=i;
          }
         
    
       }
       return pos;
    
    
    
    }

    function BuscarMarcaPn(){
    
        var pos= codigoMarca();
        
        if(pos!== -1){
            console.log('datos de los automóviles iguales a una marca ingresada por el usuario : ')
        console.log(listaAutos[pos]);
        
        }else{
            console.log('la marca no esta en la lista escribir en "MAYUSCULAS" ')
            
        }
        
        }

        function buscarCod_AutoPm(){
        
        var pos= codigoAuto();
        
        if(pos!== -1){
         
        CargarDatos(listaAutos[pos]);

        
        }else{
            alert('AUTOMOVIL NO ENCONTRADO');
            console.log('AUTOMOVIL NO ENCONTRADO');
        }
        
        }


        function CargarDatos(r){

            document.getElementById("codigo").value=r.codigo;
            document.getElementById("nombre").value=r.nombre;
            document.getElementById("marca").value=r.marca;
            document.getElementById("stock").value=r.stock;
            document.getElementById("precio").value=r.precio;


        }


        function DatosFormulario(){
    
           var cod =parseInt(document.getElementById("codigo").value);
            var nom =document.getElementById("nombre").value;
            var mar =document.getElementById("marca").value;
            var sto =parseInt(document.getElementById("stock").value);
            var pre =parseInt(document.getElementById("precio").value);

            var r2={

                codigo: cod ,
                nombre: nom,
                marca: mar,
                stock: sto,
                precio:pre

            }

            return r2;


            
            }



            function insertarPp(){

                var pos=codigoAuto();

                if(pos === -1){
                    var pos= parseInt(document.getElementById('posicion').value);
                    if (pos !== '' && pos>=0 && pos<= listaAutos.length-1){

                        for (var i=listaAutos.length-1;i>=pos; i--){
                            listaAutos[i+1]=listaAutos[i];
                        }

                        var autonuevo=DatosFormulario();
                        listaAutos[pos]=autonuevo;
                        mostrarlistaPb();


                    }else{
                        console.log('no se ingreso posicion');
                       
                    }

                }else{
                    console.log('ya existe un auto con esa posicion')


                }


            }

            
            function RegistrarPd(){
    
                var pos=codigoAuto();

                if(pos===-1){
                    var autonuevo2=DatosFormulario();
                    listaAutos.push(autonuevo2);
                    mostrarlistaPb();

                }else{
                    console.log('no ingresar automóviles con el mismo código');
                    console.log('AUTOMOVIL YA EXISTENTE');


                }
                 
                 
                 }


                 function EliminarUltimoPq(){
                     if(listaAutos.length!==0){
                         listaAutos.pop();
                         console.log('se elimino el ultimo automovil de la lista');
                         mostrarlistaPb();

                     }else{
                         console.log('lista vacia');
                     }


                 }


                 function EliminarPosicionPr(){

                    var pos=codigoAuto();
    
                    if(pos === -1){
                        var pos= parseInt(document.getElementById('posicion').value);
                        if (pos !== '' && pos>=0 && pos<= listaAutos.length-1){
    
                            for (var i=pos;i<listaAutos.length-1;i++){
                                listaAutos[i]=listaAutos[i+1];
                            }
                            listaAutos.length--;
    
                            console.log('se elimino correctamente');
                            mostrarlistaPb();
    

    
                        }else{
                            console.log('la posicion no es valida');
                           
                        }
    
                    }
                }






































