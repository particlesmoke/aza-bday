if(screen.width>=screen.height) {
    alert("Kid, please don't open on PC, it's not there yet.");
    // document.body.style.backgroundImage = "linear-gradient(to bottom right, rgba(98, 33, 219, 0.8), rgba(221, 27, 179, 0.712))";
    document.body.innerHTML = "<br><br><br><br><br><br><br><br><p style=\"color:black\">why still here, go open on your phone</p>";
}

window.onload = function() {
    var gifs = Gifffer();
}

document.getElementById("count").innerHTML="!!!";


setInterval(function(){

    var countDownDate = new Date("Aug 4, 2020 00:00:00").getTime();

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("count").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("count").innerHTML = "Yayyy!";
    }
}, 1000);

var countDownDate = new Date("Aug 4, 2020 00:00:00").getTime();
var now = new Date().getTime();
var distance = countDownDate - now;
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

var pages = document.getElementsByClassName("section")
var length = pages.length;

if(hours<=1 || hours>=18){
    for (var i = 1; i<length; i++){
        pages[i].style.backgroundImage = "linear-gradient(to bottom right, rgba(10, 100, 150, 0.87), rgba(27, 0, 100, 0.651))";
    }
    document.body.style.backgroundImage = "url(BGn.jpg)";
    document.getElementsByTagName("meta")[0].content = "#0a6596";
    document.getElementById("playbutton").style.backgroundImage = "linear-gradient(to bottom right, rgba(10, 100, 150, 1), rgba(27, 0, 100, 1))";
    document.getElementById("daybutton").style.backgroundImage = "linear-gradient(to bottom right, rgba(10, 100, 150, 1), rgba(27, 0, 100, 1))";
}
else if(hours<=19 && hours>=13){
    for (var i = 1; i<length; i++){
        pages[i].style.backgroundImage = "linear-gradient(to bottom right, rgba(74, 183, 255, 0.9), rgba(255, 247, 129, 0.6))";
    }
    document.body.style.backgroundImage = "url(BGm.jpg)";
    document.getElementsByTagName("meta")[0].content = "#4ab7ff";
    document.getElementById("playbutton").style.backgroundImage = "linear-gradient(to bottom right, rgba(74, 183, 255, 1), rgba(255, 247, 129, 1))";
    document.getElementById("daybutton").style.backgroundImage = "linear-gradient(to bottom right, rgba(74, 183, 255, 1), rgba(255, 247, 129, 1))";
}
else if(hours<=12 && hours>=8){
    for (var i = 1; i<length; i++){
        pages[i].style.backgroundImage = "linear-gradient(to bottom right, rgba(42, 159, 144, 0.651), rgba(255, 214, 34, 0.87))";
    }
    document.body.style.backgroundImage = "url(BGa.jpg)";
    document.getElementsByTagName("meta")[0].content = "#ffd622";
    document.getElementById("playbutton").style.backgroundImage = "linear-gradient(to bottom right, rgba(42, 159, 144, 1), rgba(255, 214, 34, 1))";
    document.getElementById("daybutton").style.backgroundImage = "linear-gradient(to bottom right, rgba(42, 159, 144, 1), rgba(255, 214, 34, 1))";
}
else{
    for (var i = 1; i<length; i++){
        pages[i].style.backgroundImage = "linear-gradient(to bottom right, rgba(98, 33, 219, 0.8), rgba(221, 27, 179, 0.712))";
    }
    document.body.style.backgroundImage = "url(BGe.jpg";
    document.getElementsByTagName("meta")[0].content = "#6221db";
    document.getElementById("playbutton").style.backgroundImage = "linear-gradient(to bottom right, rgba(98, 33, 219, 1), rgba(221, 27, 179, 1))";
    document.getElementById("daybutton").style.backgroundImage = "linear-gradient(to bottom right, rgba(98, 33, 219, 1), rgba(221, 27, 179, 1))";
}

// document.getElementsByClassName("section")[1].style.backgroundImage = "linear-gradient(to bottom right, rgba(98, 33, 219, 0.8), rgba(221, 27, 179, 0.712))";

player = document.getElementById("player"); 
function playmusic()  
{  
    if (player.paused)
    {
        player.play();  
        document.getElementById("button").className = "fas fa-pause";
        gifs[0].click();
    }
    else
    {
        player.pause();
        document.getElementById("button").className = "fas fa-play";
        gifs[0].click();
    }
}  

player.onpause = function(){
    document.getElementById("button").className = "fas fa-play";
}
