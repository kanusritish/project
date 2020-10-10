// Get the element with id="defaultOpen" and click on it
var t = setInterval(function() {
    if (window.innerWidth > 800 && document.getElementById('tab').style.display == "none") {
        document.getElementById('tab').style.display = "block"
    }
}, 0.1)


function disp(eve, name) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none"
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }
    document.getElementById(name).style.display = "block";
    eve.currentTarget.className += " active";
    document.getElementById("title-name").innerHTML = name;
    if (document.getElementById('tab').style.display == "block" && window.innerWidth < 800) {
        document.getElementById("menu-btn").click();
    }
}
document.getElementById("defaultOpen").click();


/*mobile view*/
function openNav() {

    if (document.getElementById('tab').style.display == "block") {
        document.getElementById('tab').style.display = "none"


        return

    }

    document.getElementById('tab').style.display = "block"




    console.log(document.getElementsByTagName('header')[0].style.height)


}