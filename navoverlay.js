var nav = document.getElementById("topNav2");
var main = document.getElementById("main");
var menu = document.getElementsByClassName("menuitems");
var close = document.getElementById("closebtn");

//default to measure if/else from
nav.style.height = "45px";
main.style.marginTop = "0px";
for (i = 0; i < menu.length; i++){menu[i].style.marginTop="100px";};

close.addEventListener("click", function(){
  var menuIcon = close.children;
  for (i = 0; i < menuIcon.length; i++){
  menuIcon[i].classList.toggle("active");
  }
});

function navToggle() {
	//to close
	if (nav.style.height <= "100%") {
	nav.style.height = "45px";
	main.style.marginTop = "0px";

    	var i = 0;
    	for (i = 0; i < menu.length; i++){
	menu[i].style.opacity="0.0";
	menu[i].style.marginTop="100px";
	};


	}
	//to open
	else if (nav.style.height <= "50px") {
	nav.style.height = "100%";
	main.style.marginTop = "0px";
    	var i = 0;
    	for (i = 0; i < menu.length; i++){
	menu[i].style.opacity="1.0";
	menu[i].style.marginTop="0px";
	};


	}

};
