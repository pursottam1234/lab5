// alert('Hello World');
// var check = confirm('Do you want to delete');
// alert('You choose ' + check);

// var name = prompt("Enter your name: ");
// alert("Hello "+name);

// if(name != '')
//     console.log("Hello there");
// else if(name!=null)
//     console.log("Hello "+ name);

function myLoad() {
  var title = document.getElementById("title");
  title.addEventListener("mouseenter", changeToRed);
  title.addEventListener("mouseleave", changeToBlack);
  var button = document.getElementById("button");
  button.addEventListener("click", changeItems);
}
function changeToRed() {
  title.style.color = "red";
}
function changeToBlack() {
  title.style.color = "black";
}
function changeItems() {
  var news = document.getElementsByClassName("news")[0];

  var items = news.getElementsByTagName("li");

  for (var i = 0; i < items.length; i++) {
    var num = i + 1;
    items[i].innerHTML = "Item " + num;
  }
}
document.addEventListener("DOMContentLoaded", myLoad);
