// Title: Assignment 1 - Environment Setup
// Author: Kayla McDanel
// Date: 27 May 2022
// Description: This is the script for local storage
// Per requirements doc/instructions.

//output storage
//functions for setting the theme
function setSelectedTheme(){
  document.body.classList.value = localStorage.getItem("mode") || "light-theme"; 
}

function setDefaultTheme(){
  const theme = localStorage.getItem("mode") || "light-theme";
  const iconMode = localStorage.getItem("iconMode") || "fa-toggle-off";
  const iconText = localStorage.getItem("iconText") || "Light Mode";

  document.body.classList.value = theme;
  document.getElementById("icon-mode").classList.add(iconMode);
  document.getElementById("icon-text").innerHTML = iconText;
}