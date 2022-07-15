"use strict";
let n ;
let nBefore;
window.addEventListener("DOMContentLoaded",
function(){
    //ページ本体が読み込まれたタイミング
    //ヘッダーのテキストエフェクト
$("header").textillate({
        loop: false, // ループのオンオフ
        minDisplayTime: 2000, // テキストが置き換えられるまでの表示時間
        initialDelay: 2000, // 遅延時間
        autoStart: true, // アニメーションを自動的にスタート
        in: { // フェードインのエフェクトの詳細設定
            effect: "fadeInLeftBig", // エフェクトの名前(animate.css参照)
            delayScale: 1.5, // 遅延時間の指数
            delay: 50, // 文字ごとの遅延時間
            sync: false, // trueはアニメーションをすべての文字に同時に適用
            shuffle: true // trueは文字を順番にではなく、ランダムに
    　      }
     });
    // おみくじボタン(id="btn1") ボヤァと表示させる
    $(function(){
        ScrollReveal().reveal("#btnl", { duration: 9000 });
                });
    setTimeout(
        function(){
            //ポップアッブメッセージ
        let popMesenge="いらっしゃい！おみくじおみくじ引いてって！";
        window.alert(popMesenge);
        },
        "5000"
    );
},false
);
//おみくじボタン1
    let soundEndflag="0";//sound control
    const btnl = document.getElementById("btnl");
    const omikujiText=document.getElementById("omikujiText");
    const omikujiTextImage=document.getElementById("omikujiTextImage");
btnl.addEventListener("click",
    function(){
     //let n=Math.floor(Math.random()*3);
     //switch(n){
     //  case 0:
     //      btnl.textContent="VeryHappy!!";
     //        btnl.style.color="#ff0000";
     //        btnl.style.fontSize="40px";
     //        break;
     //    case 1:
     //        btnl.textContent="Happy!!";
     //        btnl.style.color="#ff001";
     //        btnl.style.fontSize="30px";
     //        break;
     //   case 2:
     //        btnl.textContent="UnHappy!!";
     //        btnl.style.color="#261ec";
     //        btnl.style.fontSize="20px";
     //        break;
     //}
     //sound countrol
     if(soundEndflag==="1"){
        soundControl("end","");
     }
     let resultText =["img/daikichi.png","img/chukichi.png","img/syokichi.png","img/suekichi.png","img/daikyo.png",];
     while(n == nBefore){
         n=Math.floor(Math.random() *resultText.length);
     }
     nBefore =n;
     /*let resultColor=["#ff0000","#c715855","#ff1493","#ff69b4","#ff8c00","#1e90ff"];*/
     let resultsMaxSpeed=[10,10,8,5,5];
     let resultMaxSize=[30,30,30,40,30];
     let resultImage=["img/star.png","img/water2.png","img/water1.png","img/redLeaves4.png","img/snowflakes.png"];
     let resultSound=["sound/omikuji_sound1.mp3","sound/omikuji_sound2.mp3","sound/omikuji_sound3.mp3","sound/omikuji_sound4.mp3","sound/omikuji_sound5.mp3",];
     //let n= Math.floor(Math.random() *resultText.length);
     /*document.getElementById("omikujiText").textContent=resultText[n];
     /*document.getElementById("omikujiText").style.color=resultColor[n];
     /*document.getElementById("omikujiText").style.fontSize=resultFontSize[n];*/
     omikujiTextImage.src=resultText[n];
     omikujiTextImage.classList.add("omikujiPaper");
     omikujiTextImage.addEventListener("animationend",
      function(){
        omikujiTextImage.classList.remove("omikujiPaper")
      },false
     );
     //sound control
     w_sound=resultSound[n];
     soundControl("start",w_sound);//サウンド
     soundEndflag="1";
        // snowfall stop
    $(document).snowfall("clear");
    setTimeout(
        function(){
            // jQueryのsnowfall
            $(document).ready(function(){
                $(document).snowfall({
                maxSpeed : resultsMaxSpeed[n], // 最大速度
                minSpeed : 1, // 最小速度
                maxSize : resultMaxSize[n], // 最大サイズ
                minSize : 1, // 最小サイズ
                image :resultImage[n]
            });
        　});
        },
        "200"
    );
 　},false
);
//sound control
let w_sound
let music
function soundControl(status,w_sound){
    if(status==="start"){
        music=new Audio(w_sound);
        music.currentTime=0;
        music.play();
    }else if(status==="end"){
        music.pause();
        music.currentTime=0;
    }
}