
document.getElementById("menu-collapse-icon").addEventListener("click", openMenu);
document.getElementById("menu-collapse-icon-close").addEventListener("click", closeMenu);

function openMenu() {
  document.getElementById("menu-collapse").style.filter="opacity(1)";
  document.getElementById("menu-collapse").style.visibility="visible";
}

function closeMenu() {
  document.getElementById("menu-collapse").style.filter="opacity(0)";
  document.getElementById("menu-collapse").style.visibility="hidden";
}

function fadeNavbar() {
  if (document.body.scrollTop > 1850 || document.documentElement.scrollTop > 1850) {
  document.getElementById("navbar").style.filter="opacity(0)";
  document.getElementById("navbar").style.visibility="hidden";
}
  else {
  document.getElementById("navbar").style.filter="opacity(1)";
  document.getElementById("navbar").style.visibility="visible";
}
}

window.onscroll = function() {
  fadeNavbar()
}


document.getElementById("container1").style.backgroundColor="rgb(255, 245, 235)";

function dinners() {
  document.getElementsByClassName("container")[0].style.display="block";
  document.getElementsByClassName("container")[1].style.display="none";
  document.getElementsByClassName("container")[2].style.display="none";
}

function vegetarian() {
  document.getElementsByClassName("container")[0].style.display="none";
  document.getElementsByClassName("container")[1].style.display="block";
  document.getElementsByClassName("container")[2].style.display="none";
}

function drinks() {
  document.getElementsByClassName("container")[0].style.display="none";
  document.getElementsByClassName("container")[1].style.display="none";
  document.getElementsByClassName("container")[2].style.display="block";
}