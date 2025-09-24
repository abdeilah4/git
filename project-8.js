const player =document.getElementById('player');
const prob=document.getElementById('prob');
let sc=document.getElementById('score')
let score=0;
function moveleft(){
    const curleft=parseInt(window.getComputedStyle(player).getPropertyValue('left'));
    if(curleft<=0)return;
    const newleft =curleft- 100;
    player.style.left=newleft+'px';
}
function moveright(){
    const curleft=parseInt(window.getComputedStyle(player).getPropertyValue('left'));
    if(curleft>=200)return;
    const newleft =curleft+ 100;
    player.style.left=newleft+'px';
}
document.addEventListener('keydown',function (event){
    if(event.key==='ArrowLeft')
        moveleft();
    else if(event.key==='ArrowRight') moveright()
})
prob.addEventListener('animationiteration',function(){
    const rand=Math.floor((Math.random() * 3))*100;
    prob.style.left=rand +'px';
    score++;
    sc.innerHTML=` Your Score :  ${score} `
    
})
setInterval(function(){
    let playerRight =parseInt(window.getComputedStyle(player).getPropertyValue('right'));
    let playerTop =parseInt(window.getComputedStyle(prob).getPropertyValue('top'));
    let boxright =parseInt(window.getComputedStyle(prob).getPropertyValue('right'));
    if(playerRight===boxright && playerTop<450 && playerTop>310)
    {
        alert(`Game Over !!!!!!!!!!!!!!! \n Your Score is ${score}`);
        prob.style.top=-100;
        score=-1

    }

})