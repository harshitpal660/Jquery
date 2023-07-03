
$(".slider").click(()=>{
    var ele  = $("body");
    // console.log(ele.css('backgroundColor'));
    // console.log("clicked");
    if(ele.css('backgroundColor')=="rgba(0, 0, 0, 0)"){
        ele.css({
            backgroundColor:"rgba(0, 225, 225, 1)"
        })
    }else{
        ele.css({
            backgroundColor:"rgba(0, 0, 0, 0)"
        })
    }
    
});
