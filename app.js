$(document).ready(function(){

    var ipsofacto = "Xangati dashboards deliver state-of-the-art live, continuous and proactive intelligence about any and all aspects of your virtual infrastructure as well as of the applications running on them";
    
    $(".pc_first").hover(function(){
        $(".lower_title_text_heading").text("VDI (Virtual Desktop Infrastructure)");    
        $(".lower_title_text").text("Live, continuous and scalable end-to-end intelligence to ensure a smoothly operating VDI environment.");
    },function(){
        $(".lower_title_text_heading").text("Welcome");    
        $(".lower_title_text").text(ipsofacto);
        
    });//end hover (".pc_first")
    
    $(".VI").hover(function(){
        $(".lower_title_text_heading").text("VI(Virtual Infrastructure)"); 
         $(".lower_title_text").text("Live, continuous and scalable cross-silo intelligence to ensure a smoothly operating virtual infrastructure.");
        },function(){
        $(".lower_title_text_heading").text("Welcome");    
        $(".lower_title_text").text(ipsofacto);
        
    });//end hover (".VI")
    
    $(".Network").hover(function(){
        $(".lower_title_text_heading").text("Network Suite"); 
         $(".lower_title_text").text("Live, continuous and scalable network intelligence to ensure a smoothly operating virtual and physical network infrastructure.");
        },function(){
        $(".lower_title_text_heading").text("Welcome");    
        $(".lower_title_text").text(ipsofacto);
        
    });//end (.Network)
    
    $(".app").hover(function(){
        $(".lower_title_text_heading").text("App Dashboard"); 
         $(".lower_title_text").text("Live, continuous and scalable application delivery intelligence to ensure acceptable end-user experience of applications.");
        },function(){
        $(".lower_title_text_heading").text("Welcome");    
        $(".lower_title_text").text(ipsofacto);
        
    });//end (.mydashboard)

    $(".webdash").hover(function(){
        $(".lower_title_text_heading").text("Web Dashboard"); 
         $(".lower_title_text").text("Live, continuous and scalable service delivery intelligence to ensure acceptable end-user experience of web services.");
        },function(){
        $(".lower_title_text_heading").text("Welcome");    
        $(".lower_title_text").text(ipsofacto);
         
        });//end (.webdash)

     $(".mydash").hover(function(){
        $(".lower_title_text_heading").text("My Dashboard"); 
         $(".lower_title_text").text("Live, continuous and customized dashboard for scoped intelligence about your application, your silo, your department, or your customer.");
        },function(){
        $(".lower_title_text_heading").text("Welcome");    
        $(".lower_title_text").text(ipsofacto);
         
        });//end (.mydash)
    $(".big_button_wrap").hover(function(){
        $(this).css("background-color","rgba(13,121,222,.75)");
    },function(){
    $(this).css("background-color","rgba(13,121,222,.2)");
        
         });//end (.big_button_wrap)
    
     $(".buttonmaker").hover(function(){
        $(this).css("background-color","rgb(85, 173, 224)");
    },function(){
    $(this).css("background-color","rgba(62, 133, 168, 1)");

        });//end (.greenbutton)
    });//end ready




