let btn = document.getElementById("night_butter");
let link =document.getElementById("main_theme");

btn.addEventListener("click",function(){ ChangeTheme() ; });

function ChangeTheme(){

	let mainTheme="style.css";
	let darkTheme="dark_style.css";

	var currentTheme=link.getAttribute("href");
	var theme="";

	if(currentTheme==mainTheme){
		currentTheme=darkTheme;
		theme="dark";
	}
	else{
		currentTheme=mainTheme;
		theme="main";
	}

	link.setAttribute("href",currentTheme);
	Save(theme);
}