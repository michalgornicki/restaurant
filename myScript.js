

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


function fadePhoto1() {
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
  fadePhoto1()
}
