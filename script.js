if(screen.width>=screen.height) {
    alert("Kid, please don't open on PC, it's not there yet.");
    // document.body.style.backgroundImage = "linear-gradient(to bottom right, rgba(98, 33, 219, 0.8), rgba(221, 27, 179, 0.712))";
    document.body.innerHTML = "<br><br><br><br><br><br><br><br><p style=\"color:black\">why still here, go open on your phone</p>";
}


document.getElementById("count").innerHTML="!!!";


setInterval(function(){

    var bday = new Date("Aug 4, 2021 00:00:00").getTime();
    var ogbday = new Date("Aug 4, 2000 21:37:30").getTime();
    var now = new Date().getTime();

    var distance = bday - now;
    var age = now - ogbday;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    var ayears = Math.floor((age / (1000 * 60 * 60 * 24 * 365.25 )));
    var adays = Math.floor((age % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 *24));
    var ahours = Math.floor((age % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var aminutes = Math.floor((age % (1000 * 60 * 60)) / (1000 * 60));
    var aseconds = Math.floor((age % (1000 * 60)) / 1000);



    
    document.getElementsByClassName("age")[0].innerHTML = ayears;
    document.getElementsByClassName("age")[1].innerHTML = adays;
    document.getElementsByClassName("age")[2].innerHTML = ahours;
    document.getElementsByClassName("age")[3].innerHTML = aminutes;
    document.getElementsByClassName("age")[4].innerHTML = aseconds;
    
    if (distance < 0) {
        document.getElementById("count").innerHTML = "Yayy! 20 now!";
    }
    else{
        document.getElementById("count").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    }
}, 1000);

var countDownDate = new Date("Aug 4, 2020 00:00:00").getTime();
var now = new Date().getTime();
var distance = countDownDate - now;
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

var pages = document.getElementsByClassName("section");
var buttons = document.getElementsByClassName("button");
var ages = document.getElementsByClassName("age");
var length = pages.length;
var butn = buttons.length;

if(hours<=1 || hours>=18){
    for (var i = 1; i<length; i++){
        pages[i].style.backgroundImage = "linear-gradient(to bottom right, rgba(10, 100, 150, 0.87), rgba(27, 0, 100, 0.651))";
    }
    for(var i = 0; i<butn; i++)
    {
        buttons[i].style.backgroundImage = "linear-gradient(to bottom right, rgba(10, 100, 150, 1), rgba(27, 0, 100, 1))";
    }
    for(var i = 0; i<5; i++){
        ages[i].style.color = "rgba(10, 100, 150, 1)";
    }
    document.body.style.backgroundImage = "url(BGnb.jpg)";
    document.getElementsByTagName("meta")[0].content = "#0a6596";
}
else if(hours<=19 && hours>=13){
    for (var i = 1; i<length; i++){
        pages[i].style.backgroundImage = "linear-gradient(to bottom right, rgba(74, 183, 255, 0.9), rgba(255, 247, 129, 0.6))";
    }
    for(var i = 0; i<butn; i++)
    {
        buttons[i].style.backgroundImage = "linear-gradient(to bottom right, rgba(74, 183, 255, 1), rgba(255, 247, 129, 1))";
    }
    for(var i = 0; i<5; i++){
        ages[i].style.color = "rgba(74, 183, 255, 1)";
    }
    document.body.style.backgroundImage = "url(BGmb.jpg)";
    document.getElementsByTagName("meta")[0].content = "#4ab7ff";
}
else if(hours<=12 && hours>=8){
    for (var i = 1; i<length; i++){
        pages[i].style.backgroundImage = "linear-gradient(to bottom right, rgba(42, 159, 144, 0.651), rgba(255, 214, 34, 0.87))";
    }
    for(var i = 0; i<butn; i++)
    {
        buttons[i].style.backgroundImage = "linear-gradient(to bottom right, rgba(42, 159, 144, 1), rgba(255, 214, 34, 1))";
    }
    for(var i = 0; i<5; i++){
        ages[i].style.color = "rgba(42, 159, 144, 1)";
    }
    document.body.style.backgroundImage = "url(BGab.jpg)";
    document.getElementsByTagName("meta")[0].content = "#ffd622";
}
else{
    for (var i = 1; i<length; i++){
        pages[i].style.backgroundImage = "linear-gradient(to bottom right, rgba(98, 33, 219, 0.8), rgba(221, 27, 179, 0.712))";
    }
    for(var i = 0; i<butn; i++)
    {
        buttons[i].style.backgroundImage = "linear-gradient(to bottom right, rgba(98, 33, 219, 1), rgba(221, 27, 179, 1))";
    }
    for(var i = 0; i<5; i++){
        ages[i].style.color = "rgba(98, 33, 219, 1)";
    }
    document.body.style.backgroundImage = "url(BGeb.jpg)";
    document.getElementsByTagName("meta")[0].content = "#6221db";
}

// document.getElementsByClassName("section")[1].style.backgroundImage = "linear-gradient(to bottom right, rgba(98, 33, 219, 0.8), rgba(221, 27, 179, 0.712))";


player = document.getElementsByClassName("player"); 
function playmusic(x)  
{  
    x=x-8;
    if (player[x].paused)
    {
        player[x].play();  
        document.getElementsByClassName("fa-play")[x].className = "fas fa-pause";
        gifs[x].click();
    }
    else
    {
        player[x].pause();
        document.getElementsByClassName("fa-pause")[0].className = "fas fa-play";
        gifs[0].click();
    }
}  

function openlyric(y){
    var element = "lyricspage"
    element = element.concat(y);
    document.getElementById(element).style.width = "90vw";
    document.getElementById(element).style.opacity = "0.8";
}

function closelyric(y){
    var element = "lyricspage"
    element = element.concat(y);
    document.getElementById(element).style.width = "0vw";
    document.getElementById(element).style.opacity = "0";
}

function opennav(){
    document.getElementById("navpage").style.width = "90vw";
    document.getElementById("navpage").style.opacity = "0.8";
    document.getElementById("navpage").style.zIndex = "2";

}

function closenav(){
    document.getElementById("navpage").style.width = "0vw";
    document.getElementById("navpage").style.opacity = "0";
    document.getElementById("navpage").style.zIndex = "0";
    setTimeout(function(){
        var url = window.location.href;
        var pos = url.lastIndexOf("locate", 15);
        var text = url.slice(pos-1);
        // if (!(text.localeCompare("Home"))){
            // document.getElementById("daybutton").innerHTML = text;
        // }     
    },750)
    

}

player.onpause = function(){
    document.getElementById("button").className = "fas fa-play";
}



var myFullpage = new fullpage('#fullpage', {
    anchors: ['Home','0','1','2','3', '4', '5', '6', '7', '8', '9', '10', '12', '13', '21','22','23','24','25','26','27','28'],
    normalScrollElements : '.scroll',
    loopHorizontal: false,
    continuousHorizontal: true,

    onLeave: function(origin, destination, direction){
        if (origin>1){
            document.getElementsByClassName("fa-pause")[0].className = "fas fa-play";
        }
        if (origin.index==0){
            var elem = document.getElementById("daybutton");   
            var topf = 60;
            var leftf = 50;
            var id = setInterval(frame, 5);
            function frame() {
                if (topf == 3) {
                    clearInterval(id);
                } else {
                    topf--; 
                    leftf = leftf- 0.6;
                    elem.style.top = topf + 'vh'; 
                    elem.style.left = 'calc(' + leftf + 'vw - 3vh)' ;
                }
            }
        }
        if (destination.index==0){
            var elem = document.getElementById("daybutton");   
            var topf = 3;
            var leftf = 15.8;
            var id = setInterval(frame, 5);
            function frame() {
                if (topf == 60) {
                    clearInterval(id);
                } else {
                    topf++; 
                    leftf = leftf+ 0.6;
                    elem.style.top = topf + 'vh'; 
                    elem.style.left = 'calc(' + leftf + 'vw - 3vh)' ;
                }
            }
        }
        
        setTimeout(function(){
            var url = window.location.href;
            var pos = url.lastIndexOf("#");
            var text = url.slice(pos+1);
            document.getElementById("daybutton").innerHTML = text;
            if(text.length>2){
                document.getElementById("daybutton").style.fontSize = "2vh"
                document.getElementById("daybutton").style.padding = "2vh"
            }
            else{
                document.getElementById("daybutton").style.fontSize = "3vh"
                document.getElementById("daybutton").style.padding = "2vh"
            }
        },650)
    }
});

