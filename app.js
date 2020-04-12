function dropDownMenu(){
    var x = document.getElementById("dropDownClick")
    if (x.className == "topNav"){
        x.className += " responsive"
    } else{
        x.className = "topNav"
    }
}
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}