const btnNext=document.querySelector(".next");
const btnPrev=document.querySelector(".prev");
const step=document.querySelectorAll(".step-item");
const steps=document.querySelectorAll(".steps");
let i=1;
let stepCount=step[i].childElementCount;




btnNext.addEventListener("click",function(){
    
    btnPrev.classList.remove("disabled");
    btnPrev.classList.add("btn-primary");
    btnPrev.classList.remove("btn-secondary");
    for (let x = 0; x < stepCount ; x++){
        step[i].children[x].classList.add("active")
    }

    if(i==step.length-1){
        btnNext.classList.add("disabled");
        btnNext.classList.remove("btn-primary");
        btnNext.classList.add("btn-secondary");
    }
    i++;

});

btnPrev.addEventListener("click",function(){
    btnNext.classList.remove("disabled");
    btnNext.classList.add("btn-primary");
    btnNext.classList.remove("btn-secondary");
    for (let x = 0; x < stepCount ; x++){
        step[i-1].children[x].classList.remove("active")
    }

    if(i==2){
        btnPrev.classList.add("disabled");
        btnPrev.classList.remove("btn-primary");
        btnPrev.classList.add("btn-secondary");
    }
    i--;
});

