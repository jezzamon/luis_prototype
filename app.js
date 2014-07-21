$(document).ready(function(){

    var ipsofacto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum  ipsum dolor sit amet, consectetur adipiscing elit. Follow these links lorem ipsum:";
    
    $(".pc_first").hover(function(){
        $(".lower_title_text_heading").text("VDI");    
        $(".lower_title_text").text("Comprehensively track end-to-end all key infrastructure components that affect VDI end-user experiecnce.  Get live to the second awareness of the performance health of your entire VDI without requiring any software agents");
    },function(){
        $(".lower_title_text_heading").text("Intro text here");    
        $(".lower_title_text").text(ipsofacto);
        
    });//end hover (".pc_first")
    
    $(".VI").hover(function(){
        $(".lower_title_text_heading").text("VI(Virtual Infrastructure)"); 
         $(".lower_title_text").text("Improves performance by tracking all the virtual and physical infrastructure components--including your applications.  Proactively track down contention storms that are intermittently affecting the performance of your virtualized applications");
        },function(){
        $(".lower_title_text_heading").text("Intro text here");    
        $(".lower_title_text").text(ipsofacto);
        
    });//end hover (".VI")
    
    $(".Network").hover(function(){
        $(".lower_title_text_heading").text("Network Suite"); 
         $(".lower_title_text").text("This dashboard is ideal for network administrators who need end-to-end visibility into the virtual world and anyone who needs second-by-second monitoring of virtual networks.");
        },function(){
        $(".lower_title_text_heading").text("Intro text here");    
        $(".lower_title_text").text(ipsofacto);
        
    });//end (.Network)
    
    $(".mydashboard").hover(function(){
        $(".lower_title_text_heading").text("My Dashboard"); 
         $(".lower_title_text").text("Customize information into a single, compact dashboard for a single application, datacenter, cost-center, department, customer or any way that you see fit.");
        },function(){
        $(".lower_title_text_heading").text("Intro text here");    
        $(".lower_title_text").text(ipsofacto);
        
    });//end (.mydashboard)

    $(".uberdash").hover(function(){
        $(".lower_title_text_heading").text("Über Dashboard"); 
         $(".lower_title_text").text("Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.");
        },function(){
        $(".lower_title_text_heading").text("Intro text here");    
        $(".lower_title_text").text(ipsofacto);
         
        });//end (.uberdash)
    
    $(".big_button_wrap").hover(function(){
        $(this).css("background-color","rgba(13,121,222,.75)");
    },function(){
    $(this).css("background-color","rgba(13,121,222,.2)");
        
         });//end (.big_button_wrap)
    
     $(".greenbutton").hover(function(){
        $(this).css("background-color","rgba(51, 229, 31, 1)");
    },function(){
    $(this).css("background-color","rgba(86, 168, 56, 1)");

        });//end (.greenbutton)
    });//end ready




