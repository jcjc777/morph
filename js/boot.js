
    
/*$(document).ready(function(){
    $(".hmh1").hide();
    $(".hmh1").fadeIn(5000);
});*/    

/*$(document).ready(function(){
    $("#button").animate({height:'160px'},2000,function(){
        $("#button").animate({height:"200px"},2000,function(){
        $("#button").animate({height:"240px"},2000,function(){
        $("#button").animate({height:"280px"},2000,function(){
        $("#button").animate({height:"320px"},2000,function(){
        $("#button").effect("bounce",{times:5},2000);
    });
    });
    });
    });
    });
});*/ 


/*$(document).ready(function(){
    $(".hmtop").show({background-color:"olive"}3000,function(){
        
});*/

/*jQuery for index page*/


$("#button").mouseenter(function(){
    $(".hmh1").html("Let's find out! ......"+" ");
    
});

/*$("#button").mouseout(function(){
    $(".hmh1").html("Thank you! Mr. Sheldon Norman "+" ");
    
});*/


/*$("#button").mouseenter(function(){
    $(".hmh1").html("Let's find out! ......"+" ", function(){
        $("#button").mouseout(function(){    
            $(".hmh1").html("Thank you! Mr. Sheldon Norman "+" ");    
    
});    
});
});*/

/*jQuery for schst6 page*/

/*$(document).ready(function(){
    $(".schcdcontainer").hide()
     $(".ball1").fadeIn(1000, function(){
       $(".ball2").fadeIn(1000, function(){
        $(".ball3").fadeIn(1000, function(){
});
});
});
});*/

/*$("ball1").delay(1000).fadeIn(2000).effect("bounce",{times:3},1000, function(){*/
/* or just this (not performing smoothly: .effect("bounce", function(){*/


$(document).ready(function(){
  $(".scd1, .scd2, .scd3, .ball1, .ball2, .ball3").hide();
    $(".ball1").delay(1000).fadeIn(2000, function(){
    $(".ball2").delay(500).fadeIn(1000, function(){ 
    $(".ball3").delay(500).fadeIn(1000, function(){
        $(".ball1").delay(500).fadeOut(700, function(){
        $(".scd1").delay(300).slideDown(2000, function(){ 
            $(".ball3").delay(500).fadeOut(700, function(){
            $(".scd3").delay(200).slideDown(1500, function(){ 
                $(".ball2").delay(500).fadeOut(700, function(){
                $(".scd2").delay(200).slideDown(1500, function(){ 
});
});
});
});
    });
    });
        });
        });
            });
            });


/*jQuery for gallery page*/

//$("#gallery").delay(2000).css("backgroundImage","url(img/bigmoonandtree.jpg").effect("explode",{pieces:1000},2000);//



$(document).ready(function(){
 $(".glbox, .glh1").hide();
    $(".glh1").delay(2000).fadeIn(2000, function(){
        $(".gl5").delay(2300).fadeIn(2000, function(){
     $(".gl4").delay(2300).fadeIn(2000, function(){
       $(".gl1").delay(2300).fadeIn(2000, function(){
         $(".gl2").delay(2300).fadeIn(2000, function(){
         $(".gl3").delay(2300).fadeIn(2000, function(){
          $(".gl6").delay(2300).fadeIn(2000, function(){
          $(".gl9").delay(2300).fadeIn(2000, function(){
            $(".gl8").delay(2300).fadeIn(2000, function(){             
            $(".gl7").delay(2300).fadeIn(2000, function(){
   $("#gallery").delay(3000).css("backgroundImage","url(img/blueaurora.jpg");             
 });
 });
 });
 });
});
});
});
 });
 });
});
});


/*$("#gallery").delay(1000).effect("explode",{pieces:500},3000, function(){*/