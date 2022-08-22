
var img1 = 'image\\s_user1.png';
var img2 = 'image\\p_user1.png';
var img3 = 'image\\c_user1.png';
var userScore = 0;
var result;

function com(v){
    var random = Math.floor(Math.random()*3);
    var image = 'comp'+random+'.png';
    var imagefile= 'image\\'+image;
    var img = document.querySelectorAll('img')[0];
    img.setAttribute('src',imagefile);

    if(v===random){
      result = "draw";
        document.querySelector('h1').innerHTML='🤝Draw ';
    }

    if (v===1 & random ===0){
        document.querySelector('h1').innerHTML='💖 You Wins! ';
        result = "you win";
    }
    if(v===2 & random===1) {
      result = "you win";
        document.querySelector('h1').innerHTML='💖 You Wins!';
    }
     if(v===0 & random===2) {
      result = "you win";
        document.querySelector('h1').innerHTML='💖 You Wins!';
    }
    if(v===0 & random===1) {
      result = "you lose";
        document.querySelector('h1').innerHTML='💔 You Lose!';
    }
    if(v===1 & random===2) {
      result = "you lose";
        document.querySelector('h1').innerHTML='💔 You Lose!';
    }
    if(v===2 & random===0) {
      result = "you lose";
        document.querySelector('h1').innerHTML='💔 You Lose!';
    }

    if(result ==="you win"){
      userScore +=1;
    }
    if(result==="you lose"){
      if(userScore !=0){
        userScore -=1;
      }

    }

    document.querySelector("h2").innerHTML=`Score:${userScore}`;
    localStorage.setItem("highScore",userScore);

    let highScore = localStorage.getItem("highScore");

    if(highScore !==null){
      if(userScore>highScore){
        localStorage.setItem("highScore",userScore);
        console.log(highScore);
      }
    }
    else {
      localStorage.setItem("highScore",userScore);

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

//
// chrome.action.setBadgeText({text:"playing"});
// function playing(){
//   chrome.notifications.create({
//     type:"basic",
//     iconUrl:"favicon/favicon.ico",
//     title:"let's play",
//     message:"time to create new high score",
//     buttons:[{
//       title:"play"
//     }],
//     priority:0
//   });
// }
// playing()
//
// chrome.commands.onCommand.addListener(command=>{
//   chrome.tabs.query({currentWindow:true},tabs=>{
//     tabs.sort((a,b)=>a.index-b.index);
//     const activeIndex= tabs.findIndex((tab)=>tab.active);
//     const lastTab = tabs.length-1;
//     let newIndex = -1;
//     if(command === "flip-tabs-forward"){
//       newIndex=activeIndex===0?lastTab:activeIndex-1;
//     }
//     chrome.tabs.update(tabs[newIndex].id,{active:true,highlighted:true});
//     })
// })
