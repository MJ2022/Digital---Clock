function setdate (){

const date = new Date();
const hours= date.getHours();
const minutes= date.getMinutes();
const seconds= date.getSeconds();
let time= hours+ ":" + minutes + ":" + seconds;
document.getElementById("clock").innerHTML = time;
 };

 setInterval (setdate,1000);
 
setdate();
