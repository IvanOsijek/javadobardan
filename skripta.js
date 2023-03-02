var div = document.getElementsByClassName("description")[0];
console.log("x=", div);
var y = document.createElement("h1");
y.innerHTML = "ovo je naš Pero"
div.parentNode.insertBefore(y, div);

//2

var divInfo = document.createElement("div");
divInfo.className = "info";

var foot = document.getElementById("footer");
foot.parentNode.insertBefore(divInfo, foot);

