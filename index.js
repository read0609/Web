

window.onload = function () {
    var Buttom = document.getElementsByClassName('BigSlideshow_buttom_style');
    var dotNav = document.getElementsByClassName('BigSlideshow_dot');
    var index = 0;

    for (var i = 0; i < Buttom.length ; i++)
    {
        Buttom[i].style.visibility = "hidden";
        dotNav[index].style.background = "black";
    }
    
    var BigSlideshow = document.getElementsByClassName('BigSlideshow');

    BigSlideshow[0].addEventListener("mouseover", function () {
        for (var i = 0; i < Buttom.length ; i++) {
            Buttom[i].style.visibility = "visible";
        }
    }, false);

    BigSlideshow[0].addEventListener("mouseout", function () {
        for (var i = 0; i < Buttom.length ; i++) {
            Buttom[i].style.visibility = "hidden";
        }
    }, false);


    var Buttom_R = document.getElementsByClassName('BigSlideshow_buttom_before_right');
    var Buttom_L = document.getElementsByClassName('BigSlideshow_buttom_after_left');
    var Background = ["url('https://plain.tw/wp-content/uploads/2016/10/slider_plainstorefront2-l.jpg')",
                      "url('https://plain.tw/wp-content/uploads/2016/10/slider_joyfulwriting-l.jpg')",
                      "url('https://plain.tw/wp-content/uploads/2016/10/slider_icco-l.jpg')",
                      "url('https://plain.tw/wp-content/uploads/2016/10/slider_gwpaper-l.jpg')"];

    Buttom_R[0].addEventListener("click", function() {

        dotNav[index].style.background = "none";
        if (index == 0) { index = 3; }
        else
        {
            index--;
        }
        dotNav[index].style.background = "black";
        BigSlideshow[0].style.backgroundImage =  Background[index];
    }
    , false);

    Buttom_L[0].addEventListener("click", function () {

        dotNav[index].style.background = "none";
        if (index == 3) { index = 0; }
        else
        {
            index++;
        }
        dotNav[index].style.background = "black";
        BigSlideshow[0].style.backgroundImage = Background[index];
    }
    , false);

}


