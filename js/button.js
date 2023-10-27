const mybutton = document.getElementsByClassName("back-to-top")[0];
const header = document.getElementsByTagName('header')[0];


// Prevent transparent header after page refresh
window.onload = () => {
    if(document.body.scrollTop !== 0)
        header.style.backgroundColor = '#e6e4e2'
}


window.onscroll = function() {scrollFunction()};

function scrollFunction() {

    if(document.body.scrollTop > 70 || document.documentElement.scrollTop > 70){
        header.style.backgroundColor = '#e6e4e2';
    }
    else{
        header.style.backgroundColor = 'rgba(255, 255, 255, 0)';
    }

    
    if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";

    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


