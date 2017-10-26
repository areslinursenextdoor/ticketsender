alert("connected");

var span = document.querySelector("span");
var btn = document.querySelector(".btn");
var href = document.querySelector("a href");
console.log(href);

var sub = prompt("Please select a site");


btn.addEventListener("click", function() {
	//alert("clicked");
    href.textContent = sub;
    });