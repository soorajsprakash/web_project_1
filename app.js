function dropDownMenu(){
    var x = document.getElementById("dropDownClick")
    if (x.className == "topNav"){
        x.className += " responsive"
    } else{
        x.className = "topNav"
    }
}