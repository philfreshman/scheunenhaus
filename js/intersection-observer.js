const dasHaus1Section = document.querySelector('#s0');
const dasHaus2Section = document.querySelector('#img17');
const grundrissSection = document.querySelector('#grundriss');
const ausstattungSection = document.querySelector('#ausstattung');
const preiseSection = document.querySelector('#preise');
const kontaktSection = document.querySelector('#belegung');
const lageSection = document.querySelector('#kontakt');

const options = {
    threshold: 0.7
};

const observer0 = new IntersectionObserver(function(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting === true){
            changeFont("DAS HAUS");
        }
    })
}, options);

const observer1 = new IntersectionObserver(function(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting === true){
            changeFont("DAS HAUS");
        }
    })
}, options);

const observer2 = new IntersectionObserver(function(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting === true){
            changeFont("GRUNDRISS");
        }
    })
}, options);

const observer3 = new IntersectionObserver(function(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting === true){
            changeFont("AUSSTATTUNG");
        }
    })
}, options);

const observer4 = new IntersectionObserver(function(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting === true){
            changeFont("PREISE");
        }
    })
}, options);

const observer5 = new IntersectionObserver(function(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting === true){
            changeFont("BELEGUNG");
        }
    })
}, options);

const observer6 = new IntersectionObserver(function(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting === true){
            changeFont("KONTAKT");
        }
    })
}, options);

observer0.observe(dasHaus1Section);
observer1.observe(dasHaus2Section);
observer2.observe(grundrissSection);
observer3.observe(ausstattungSection);
observer4.observe(preiseSection);
observer5.observe(kontaktSection);
observer6.observe(lageSection);



const buttons = document.querySelectorAll("header a");
function makeFontBoldAndReturnNode(a_text){
    let aNode = null;
    buttons.forEach(buttonLink => {
        if(buttonLink.innerHTML === a_text){
            aNode = buttonLink;
            aNode.style.fontFamily = `'Raleway-Bold'`;
            aNode.isCurrentlyFocused = true;
        }
    })
    return aNode;
}

function makeFontDefault(node){
    node.style.fontFamily = `'Raleway'`;
    node.isCurrentlyFocused = false;
}

let currentBoldObj = null;
function changeFont(a_text){
    if(currentBoldObj == null){
        currentBoldObj = makeFontBoldAndReturnNode(a_text)
    } else {
        makeFontDefault(currentBoldObj);
        currentBoldObj = makeFontBoldAndReturnNode(a_text)
    }
}


buttons.forEach(b => b.onmouseover = function(e){
    if(!e.target.isCurrentlyFocused){
        e.target.style.fontFamily = `"Raleway-Bold"`
    }
});


buttons.forEach(b => b.onmouseout = function(e){
    if(e.target.isCurrentlyFocused === false || e.target.isCurrentlyFocused === undefined){
        e.target.style.fontFamily = `"Raleway"`
    }
})
