$(document).ready(function (e) {
	"use strict";
	
	$(".more-info a").click(function () {
    $("#about").css("display", "block");
		$("#info-close").css("display", "block");
   });
	
	$("#info-close").click(function () {
		$("#about").css("display", "none");
		$("#info-close").css("display", "none");
   });
	
	function NameofThanos() {
		var x = document.getElementById("name-box").value;
		document.getElementById("display-name").innerHTML = x;
	}
	
	var name, race, className;
});