
var img1 = 'E:\\js\\pro\\spc\\s_user1.png';
var img2 = 'E:\\js\\pro\\spc\\p_user1.png';
var img3 = 'E:\\js\\pro\\spc\\c_user1.png';

function com(v){
    var random = Math.floor(Math.random()*3);
    var image = 'comp'+random+'.png';
    var imagefile= 'E:\\js\\pro\\spc\\'+image;
    var img = document.querySelectorAll('img')[0];
    img.setAttribute('src',imagefile);
    if (v>random){
        document.querySelector('h1').innerHTML='💖 You Wins! ';
    }
    else if(v>random) {
        document.querySelector('h1').innerHTML='💖 You Wins!';
    }
    else if(v>random) {
        document.querySelector('h1').innerHTML='💖 You Wins!';
    }
    else if(v<random) {
        document.querySelector('h1').innerHTML='💔 You Lose!';
    }
    else if(v<random) {
        document.querySelector('h1').innerHTML='💔 You Lose!';
    }    
    else if(v<random) {
        document.querySelector('h1').innerHTML='💔 You Lose!';
    }
    else{
        document.querySelector('h1').innerHTML='🤝Draw ';
    }
}


var b1= document.querySelectorAll('button')[0].addEventListener("click",click);
function click(){
    var img_stone = document.querySelectorAll('img')[1];
    img_stone.setAttribute('src',img1);
    var v1 = 0;
    com(v1);
}
var b2= document.querySelectorAll('button')[1].addEventListener("click",click1);
function click1(){
    var img_paper = document.querySelectorAll('img')[1];
    img_paper.setAttribute('src',img2);
    var v2 = 1;
    com(v2);
}
var b3= document.querySelectorAll('button')[2].addEventListener("click",click2);
function click2(){
    var img_scissor = document.querySelectorAll('img')[1];
    img_scissor.setAttribute('src',img3);
    var v3 = 2; 
    com(v3);

}

