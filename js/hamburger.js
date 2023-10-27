const checkbox = document.getElementById("check");

function ShowHide(){
    checkbox.click()
}

const items = document.querySelectorAll('#menu a');
items.forEach(i => i.addEventListener("click", ShowHide));



