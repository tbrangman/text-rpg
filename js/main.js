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
});