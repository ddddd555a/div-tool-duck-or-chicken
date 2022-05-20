document.addEventListener("DOMContentLoaded", function () {

var chicken = document.getElementById("chickenph");
var duck = document.getElementById("duckph");
img(chicken);
img(duck);

var rand_div = Math.floor(Math.random()*10);
var rand = Math.floor(Math.random()*3);

var bad_list = ["camel","frog","lobster"]
var good_list = ["catpaw","oink","horse"]

var good = good_list[rand]
var bad = bad_list[rand]

function img(){
    duck.addEventListener("click", ()=> {
        console.log("duck clicked")
        document.getElementsByClassName("origin")[0].style.display = "none";
        document.getElementsByClassName("btn")[0].style.display = "flex";
    if (rand_div>4){
        document.getElementById(
    "result"
        ).innerHTML =`<img src='./image/${bad}.jpg'/>`;
    }else{
        document.getElementById(
        "result"
    ).innerHTML = `<img src='./image/${good}.jpg'/>`;
    }
    });

    chicken.addEventListener("click", () => {
        console.log("chicken clicked")
        document.getElementsByClassName("origin")[0].style.display = "none";
         document.getElementsByClassName("btn")[0].style.display = "flex";
     if (rand_div>4){      
     document.getElementById(
     "result"
     ).innerHTML = `<img src='./image/${good}.jpg'/>`;
     }else{
     document.getElementById(
       "result"
     ).innerHTML = `<img src='./image/${bad}.jpg'/>`;
     }
       });

}
});