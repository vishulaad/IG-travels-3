Array.from(document.getElementsByTagName('input')).forEach((e,i)=>{

e.addEventListener('keyup',(e1)=>{

    if (e.value.length>1) {
        document.getElementsByClassName('bi bi-caret-down-fill')[i].style.transform="rotate(180deg)";
    } else {
        document.getElementsByClassName('bi bi-caret-down-fill')[i].style.transform="rotate(0deg)";

    }
})
})