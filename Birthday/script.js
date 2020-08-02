function flip(){
    if (!(document.getElementsByClassName("flip-card-inner")[0].classList.contains("flipf")))
    {
        document.getElementsByClassName("flip-card-inner")[0].classList.add("flipf")
    }
    else
    {
        document.getElementsByClassName("flip-card-inner")[0].classList.remove("flipf")
    }
    
}