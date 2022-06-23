$(document).ready(function() {
    let slideWidth = 700;
    let index = 0;
    let slideTimer = 15;


    $(".slider").width($(".slider").find(".slide"))
        let timer = setInterval(nextSlide, slideTimer * 1000);
        $(".wrapper").hover(function(){
            clearInterval(timer)
        }, function() {
            timer = setInterval(nextSlide, slideTimer * 1000);
        })
        $("#btnNext").click(function() {
            clearInterval(timer);
            nextSlide();
            timer = setInterval(nextSlide, 15000);
        });
        $("#btnPrev").click(function() {
            clearInterval(timer);
            prevSlide();
            timer = setInterval(nextSlide, 15000);
        });
    
    function nextSlide(){
        let currentSlide = $(".slider").find(".slide").index();
        currentSlide = ++index
        if(currentSlide >= $(".slide").length) {
            currentSlide = 0
            index = 0;
        };
        $(".slider").animate({left: -currentSlide * slideWidth}, 700);
    }

    function prevSlide(){
        let currentSlide = $(".slider").index(); 
        currentSlide = --index
        if(currentSlide < 0) {
            currentSlide = 2
            index = 2
        };
        $(".slider").animate({left: -currentSlide * slideWidth}, 700);
    }
})