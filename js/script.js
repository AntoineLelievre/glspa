let body = document.getElementById('body')
let logoname = document.getElementById('name')
let circle = document.getElementById('logo-circle')
let entete = document.getElementById('entete')
let header = document.getElementsByTagName("header")[0]
let back = document.getElementById('back1')
let titre = document.getElementById('backtitre')
let num = document.getElementById('num')
body.onscroll = function(){
   
    if(window.scrollY == "0"){
        logoname.classList.remove('name_small')
        circle.classList.remove('circle_small')
        entete.classList.remove('entete_small')
        header.classList.remove('header_small')
        num.classList.remove('num_small')
        titre.style.marginTop="140px"
    }
    else{
        logoname.classList.add('name_small')
        circle.classList.add('circle_small')
        entete.classList.add('entete_small')
        header.classList.add('header_small')
        num.classList.add('num_small')

        header.style='scale(0.5)'

        /* console.log(((back.scrollHeight-window.scrollY)-header.scrollHeight)/2)
        titre.style.marginTop=(((back.scrollHeight-window.scrollY)-header.scrollHeight))+"px" */
    }
}