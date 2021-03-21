let body = document.getElementById('body')
let logoname = document.getElementById('name')
let circle = document.getElementById('logo-circle')
let entete = document.getElementById('entete')
let header = document.getElementsByTagName("header")[0]

body.onscroll = function(){
    if(window.scrollY == "0"){
        logoname.classList.remove('name_small')
        circle.classList.remove('circle_small')
        entete.classList.remove('entete_small')
        header.classList.remove('header_small')
    }
    else{
        logoname.classList.add('name_small')
        circle.classList.add('circle_small')
        entete.classList.add('entete_small')
        header.classList.add('header_small')
        header.style='scale(0.5)'
    }
}