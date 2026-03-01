// Typing Effect
const text = ["Dennis Kiprono","A Visionary","A Builder","Denolion"];
let count=0,index=0;
let currentText="",letter="";
(function type(){
    if(count===text.length) count=0;
    currentText=text[count];
    letter=currentText.slice(0,++index);
    document.querySelector(".typing").textContent=letter;
    if(letter.length===currentText.length){ count++; index=0; }
    setTimeout(type,150);
})();

// Dark Mode Toggle
document.getElementById("toggleMode").onclick=function(){
    document.body.classList.toggle("light-mode");
};

// Counter Animation
const counters=document.querySelectorAll(".counter");
counters.forEach(counter=>{
    counter.innerText="0";
    const updateCounter=()=>{
        const target=+counter.getAttribute("data-target");
        const c=+counter.innerText;
        const increment=target/100;
        if(c<target){
            counter.innerText=`${Math.ceil(c+increment)}`;
            setTimeout(updateCounter,20);
        } else { counter.innerText=target; }
    };
    updateCounter();
});