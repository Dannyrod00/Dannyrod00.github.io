    var fob  = "1";
    $(document).ready(function() {

        $("body").bind("dblclick", flip);

        function flip(){

            if( fob === "1"){

        $("body").css("background-color","#028900");
        $("header").css("background-color","#00ff83");
        $("nav").css("background-color","#00d27f");
        $("parralax-window").html("data-image-src" ,"space3.jpg");        
        $("h1").css("color" ,"#028900");
        $("panel-panel-default" ,"panel-heading").css("background-color" ,"#028900");
        $("button").css("color" ,"#00ff83");  
        $("button").css("border-color" ,"#028900"); 
        $("button").hover("color" ,"#028900");  
        $("button").hover("border-color" ,"#00ff83");         

            fob = "2";

            } else{
               fob = "1"; 

        $("body").css("background-color","#007777");
        $("header").css("background-color","#004444");
        $("nav").css("background-color","#003333");
        $("parralax").css("data-image-src" ,"parralax.png");        
        $("h1").css("color" ,"#007777");
        $("panel-panel-default" ,"panel-heading").css("background-color" ,"#007777");
        $("button").css("color" ,"#007777");  
        $("button").css("border-color" ,"#003333"); 
        $("button").hover("color" ,"#003333");  
        $("button").hover("border-color" ,"#007777");           

            }


        }


    });
