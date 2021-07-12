const colors=["green","red","rgba(133,122,200)","#f15025"]
const btn=document.getElementById("btn");
const color=document.querySelector(".color");

btn.addEventListener("click",function(){
    const randomNum=Math.floor(Math.random(4)*colors.length);
    console.log(randomNum);
    document.body.style.backgroundColor=colors[randomNum]
    color.textContent=colors[randomNum];
});