window.onload = function() {
  document.getElementsByClassName("content")[0].style.transition="2s";
  document.getElementsByClassName("content")[0].style.filter="brightness(1)";
  document.getElementById("navbar").style.transition="2s";
  document.getElementById("navbar").style.filter="opacity(1)";
}

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


function nightMode(){
  if (document.getElementById("container1").style.backgroundColor==="rgb(255, 245, 235)") {
    document.getElementById("nightday-mode").style.filter="saturate(1) opacity(1)";
  document.getElementById("navbar").style.boxShadow="0px 0px 50px 0px rgb(167, 122, 76)";
  setTimeout(function(){
    document.getElementById("container1").style.backgroundColor="rgb(110, 95, 80)";
    document.getElementById("container2").style.backgroundColor="rgb(110, 95, 80)";
    document.getElementsByClassName("photo1")[0].style.border="solid 30px rgb(154, 133, 110)";
    document.getElementsByClassName("photo1")[1].style.border="solid 30px rgb(154, 133, 110)";
    document.getElementsByClassName("photo1")[2].style.border="solid 30px rgb(154, 133, 110)";
    document.getElementsByClassName("photo2")[0].style.border="solid 30px rgb(154, 133, 110)";
    document.getElementsByClassName("photo2")[1].style.border="solid 30px rgb(154, 133, 110)";
    document.getElementsByClassName("photo2")[2].style.border="solid 30px rgb(154, 133, 110)";
    document.getElementsByClassName("content")[0].style.color="rgb(255, 245, 235)";
  }, 1500);

  }
  else {
  document.getElementById("nightday-mode").style.filter="saturate(0) opacity(0.5)";
  document.getElementById("navbar").style.boxShadow="0px 0px 50px 0px rgb(252, 223, 193)";
  setTimeout(function(){
    document.getElementById("container1").style.backgroundColor="rgb(255, 245, 235)";
    document.getElementById("container2").style.backgroundColor="rgb(255, 245, 235)";
    document.getElementsByClassName("photo1")[0].style.border="solid rgb(252, 223, 193) 30px";
    document.getElementsByClassName("photo1")[1].style.border="solid rgb(252, 223, 193) 30px";
    document.getElementsByClassName("photo1")[2].style.border="solid rgb(252, 223, 193) 30px";
    document.getElementsByClassName("photo2")[0].style.border="solid rgb(252, 223, 193) 30px";
    document.getElementsByClassName("photo2")[1].style.border="solid rgb(252, 223, 193) 30px";
    document.getElementsByClassName("photo2")[2].style.border="solid rgb(252, 223, 193) 30px";
    document.getElementsByClassName("content")[0].style.color="rgb(74, 74, 74)";
  }, 1500);
  }
}
