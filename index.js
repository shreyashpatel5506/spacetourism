let menu= document.getElementsByClassName("hamburger");

function menuh(){
    if(document.getElementById("ham").className=="mobilemenu1"){
        document.getElementById("imgmenu").src="icon-hamburger.svg"; 
        document.getElementById("ham").classList.remove("mobilemenu1");
        document.getElementById("ham").classList.add("mobilemenu");     
    }
    else{
    document.getElementById("ham").classList.add("mobilemenu1");
    document.getElementById("ham").classList.remove("mobilemenu");
    document.getElementById("imgmenu").src="icon-close.svg";
    }
}
