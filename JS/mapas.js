window.onload = function(){

            navigator.geolocation.getCurrentPosition(cargarMapa);

    function cargarMapa(position) {
        var latitud = position.coords.latitude;
        var longitud = position.coords.longitude;

        
        var googlePos = new google.maps.LatLng(latitud, longitud);
        
      
        var parametros = {
            center: googlePos,
            zoom: 8,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        
        var goolgeMap = new google.maps.Map(
            document.getElementById("TCP"), 
            parametros
        );
    }

       


        Amb1.onclick = function(){
            let menu =  
            "<p>sodpsadkaspdpsdkslksldñol</p>"+
            "<p>akdsñkklckñmlksjdalkñsjmk</P>"+
            "<p>akdsñkklckñmlksjdalkñsjmk</P>"+
            "<p>akdsñkklckñmlksjdalkñsjmk</P>"+
            "<p>akdsñkklckñmlksjdalkñsjmk</P>"+
            "<p>akdsñkklckñmlksjdalkñsjmk</P>"+
            "<p>ajdsljkdjñlsjdasldlñsajds</p>"
        pintaAmb.innerHTML = menu
        }
        Amb2.onclick = function(){
            let menu =
            "<div>"+
            "<p>Respecto a la naturaleza</p>"+
            "<p>Todo el monte es oregano y</P>"+
            "<p>frescor matutino entre los</P>"+
            "<p>árboles frescos de la mañana</P>"+
            "<p>que tu pie araña, con todo los</P>"+
            "<p>entresijos de cada cosa.</P>"+
            "<p>Esto me ha salido fatal.</p>"+
            "</div>"
        pintaAmb.innerHTML = menu
        }
        Amb3.onclick = function(){
            let menu =
            "<div>"+
            "<p>La educacion ambienta es</p>"+
            "<p>a su vez fundamentak y</P>"+
            "<p>porque para ayudar a la </P>"+
            "<p>naturaleza antes tenemos que </P>"+
            "<p>aydar a las conciencias de los</P>"+
            "<p>niños del futuro.</P>"+
            "<p>son algo fundamental</p>"+
            "</div>"
        pintaAmb.innerHTML = menu
        }
    }
