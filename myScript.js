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

document.getElementById("container1").style.backgroundColor="rgb(255, 245, 235)";


function nightMode(){
  if (document.getElementById("container1").style.backgroundColor==="rgb(255, 245, 235)") {
  const darkMode =
  document.getElementById("nightday-mode").style.filter="saturate(1) opacity(1)";
  document.getElementById("navbar").style.boxShadow="0px 0px 50px rgb(228, 149, 2)";
  setTimeout(function(){
    document.getElementsByClassName("container")[0].style.backgroundColor="rgb(110, 95, 80)";
    document.getElementsByClassName("container")[1].style.backgroundColor="rgb(110, 95, 80)";
    document.getElementsByClassName("container")[2].style.backgroundColor="rgb(110, 95, 80)";
    document.getElementsByClassName("container")[3].style.backgroundColor="rgb(110, 95, 80)";
    document.getElementsByClassName("footer")[0].style.color="rgb(255, 255, 255)";
    document.getElementsByClassName("footer")[1].style.color="rgb(255, 255, 255)";
    document.getElementsByClassName("header")[0].style.color="rgb(252, 223, 193)";
    document.getElementsByClassName("header")[1].style.color="rgb(252, 223, 193)";
    document.getElementsByClassName("header")[0].style.borderBottom="2px solid rgb(252, 223, 193)";
    document.getElementsByClassName("header")[1].style.borderBottom="2px solid rgb(252, 223, 193)";
    document.getElementsByClassName("alt-header")[0].style.color="rgb(252, 223, 193)";
    document.getElementsByClassName("alt-header")[0].style.borderBottom="2px solid rgb(252, 223, 193)";
    document.getElementById("header-contact").style.color="rgb(252, 223, 193)";
    document.getElementById("header-contact").style.borderBottom="2px solid rgb(252, 223, 193)";
    document.getElementById("meals").style.color="rgb(255, 255, 255)";
    document.getElementById("list-beginning").style.color="rgb(255, 255, 255)";
    document.getElementById("contact-list").style.color="rgb(255, 255, 255)";
    document.getElementById("map-subtitle").style.color="rgb(255, 255, 255)";
    document.getElementById("photo1").style.outline="inset 10px rgb(154, 133, 110)";
    document.getElementById("photo2").style.outline="inset 10px rgb(154, 133, 110)";
    document.getElementById("photo3").style.outline="inset 10px rgb(154, 133, 110)";
    document.getElementById("photo4").style.outline="inset 10px rgb(154, 133, 110)";
    document.getElementById("map").style.border="ridge 10px rgb(154, 133, 110)";
    document.getElementById("photo1small").style.outline="inset 10px rgb(154, 133, 110)";
    document.getElementById("photo2small").style.outline="inset 10px rgb(154, 133, 110)";
    document.getElementById("photo3small").style.outline="inset 10px rgb(154, 133, 110)";
    document.getElementById("map-subtitle").style.color="rgb(255, 255, 255)";
    document.getElementsByClassName("open-hours")[0].style.borderBottom="2px inset rgb(252, 223, 193)";
    document.getElementsByClassName("brown-font")[0].style.color="rgb(252, 223, 193)";
    document.getElementsByClassName("brown-font")[1].style.color="rgb(252, 223, 193)";
    document.getElementsByClassName("brown-font")[2].style.color="rgb(252, 223, 193)";
    document.getElementsByClassName("brown-font")[3].style.color="rgb(252, 223, 193)";
  }, 1500);

  }
  else {
  const lightMode =
  document.getElementById("nightday-mode").style.filter="saturate(0) opacity(0.5)";
  document.getElementById("navbar").style.boxShadow="0px 0px 0px rgb(228, 149, 2)";
  setTimeout(function(){
    document.getElementsByClassName("container")[0].style.backgroundColor="rgb(255, 245, 235)";
    document.getElementsByClassName("container")[1].style.backgroundColor="rgb(255, 245, 235)";
    document.getElementsByClassName("container")[2].style.backgroundColor="rgb(255, 245, 235)";
    document.getElementsByClassName("container")[3].style.backgroundColor="rgb(255, 245, 235)";
    document.getElementsByClassName("footer")[0].style.color="rgb(74, 74, 74)";
    document.getElementsByClassName("footer")[1].style.color="rgb(74, 74, 74)";
    document.getElementsByClassName("header")[0].style.color="rgb(158, 0, 0)";
    document.getElementsByClassName("header")[1].style.color="rgb(158, 0, 0)";
    document.getElementsByClassName("alt-header")[0].style.color="rgb(158, 0, 0)";
    document.getElementsByClassName("alt-header")[0].style.borderBottom="2px inset rgb(158, 0, 0)";
    document.getElementById("header-contact").style.color="rgb(158, 0, 0)";
    document.getElementById("header-contact").style.borderBottom="2px inset rgb(158, 0, 0)";
    document.getElementById("meals").style.color="rgb(74, 74, 74)";
    document.getElementById("list-beginning").style.color="rgb(74, 74, 74)";
    document.getElementById("contact-list").style.color="rgb(74, 74, 74)";
    document.getElementById("map-subtitle").style.color="rgb(74, 74, 74)";
    document.getElementById("photo1").style.outline="inset 10px rgb(252, 223, 193)";
    document.getElementById("photo2").style.outline="inset 10px rgb(252, 223, 193)";
    document.getElementById("photo3").style.outline="inset 10px rgb(252, 223, 193)";
    document.getElementById("photo4").style.outline="inset 10px rgb(252, 223, 193)";
    document.getElementById("map").style.border="ridge 10px rgb(252, 223, 193)";
    document.getElementById("photo1small").style.outline="inset 10px rgb(252, 223, 193)";
    document.getElementById("photo2small").style.outline="inset 10px rgb(252, 223, 193)";
    document.getElementById("photo3small").style.outline="inset 10px rgb(252, 223, 193)";
    document.getElementsByClassName("reservation")[0].style.color="rgb(255, 245, 235)";
    document.getElementById("map-subtitle").style.color="rgb(255, 245, 235)";
    document.getElementsByClassName("open-hours")[0].style.borderBottom="2px inset rgb(189, 85, 0)";
    document.getElementsByClassName("brown-font")[0].style.color="rgb(189, 85, 0)";
    document.getElementsByClassName("brown-font")[1].style.color="rgb(189, 85, 0)";
    document.getElementsByClassName("brown-font")[2].style.color="rgb(189, 85, 0)";
    document.getElementsByClassName("brown-font")[3].style.color="rgb(189, 85, 0)";
  }, 1500);
  }
}


