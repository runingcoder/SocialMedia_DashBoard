console.log("asdf");
var icon = document.getElementById("icon");
icon.addEventListener("click", function () {
  icon.classList.add("dark");

  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    icon.src = "images/darkT.png";
  } else {
    icon.src = "images/whiteT.png";
  }
});
