document.getElementById("count").innerHTML="!!!";

setInterval(function(){

    var countDownDate = new Date("Aug 4, 2020 00:00:00").getTime();

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if(hours<=1 || hours>=18){
        document.body.style.backgroundImage = "url(BGn.jpg)";
        document.getElementById("p2").style.backgroundImage = "linear-gradient(to bottom right, rgba(10, 100, 150, 0.87), rgba(27, 0, 100, 0.651))";
        document.getElementsByTagName("meta")[0].content = "#0a6596";
        document.getElementById("playbutton").style.backgroundImage = "linear-gradient(to bottom right, rgba(10, 100, 150, 1), rgba(27, 0, 100, 1))";
    }
    else if(hours<=19 && hours>=13){
        document.body.style.backgroundImage = "url(BGm.jpg)";
        document.getElementById("p2").style.backgroundImage = "linear-gradient(to bottom right, rgba(74, 183, 255, 0.9), rgba(255, 247, 129, 0.6))";
        document.getElementsByTagName("meta")[0].content = "#4ab7ff";
        document.getElementById("playbutton").style.backgroundImage = "linear-gradient(to bottom right, rgba(74, 183, 255, 1), rgba(255, 247, 129, 1))";
    }
    else if(hours<=12 && hours>=8){
        document.body.style.backgroundImage = "url(BGa.jpg)";
        document.getElementById("p2").style.backgroundImage = "linear-gradient(to bottom right, rgba(192, 87, 45, 0.651), rgba(255, 214, 34, 0.87))";
        document.getElementsByTagName("meta")[0].content = "#ffd622";
        document.getElementById("playbutton").style.backgroundImage = "linear-gradient(to bottom right, rgba(192, 87, 45, 1), rgba(255, 214, 34, 1))";
    }
    else{
        document.body.style.backgroundImage = "url(BGe.jpg";
        document.getElementById("p2").style.backgroundImage = "linear-gradient(to bottom right, rgba(98, 33, 219, 0.8), rgba(221, 27, 179, 0.712))";
        document.getElementsByTagName("meta")[0].content = "#6221db";
        document.getElementById("p2").style.backgroundImage = "linear-gradient(to bottom right, rgba(98, 33, 219, 1), rgba(221, 27, 179, 1))";
    }

    document.getElementById("count").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("count").innerHTML = "Yayyy!";
    }

}, 1000);


player = document.getElementById("player"); 
function playmusic()  
{  
    if (player.paused)
    {
        player.play();  
        document.getElementById("button").className = "fas fa-pause";
    }
    else
    {
        player.pause();
        document.getElementById("button").className = "fas fa-play";
    }
}  

player.onpause = function(){
    document.getElementById("button").className = "fas fa-play";
}

if( !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ) {
    alert("Kid, please don't open on PC, it's not there yet, working on it.");
    // document.body.style.backgroundImage = "linear-gradient(to bottom right, rgba(98, 33, 219, 0.8), rgba(221, 27, 179, 0.712))";
    document.body.innerHTML = "<br><br><br><br><br><br><br><br><p>why still here, go open on your phone</p>";
   }