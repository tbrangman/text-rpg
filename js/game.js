// JavaScript Document
//Inventory
var dagger = false;
var keys = false;
var map = false;
var rock = false;
var mace = false;
var note = false;
var book = false; 
var greenorb = false; 
//
//Enemies
var ghoul = false;
//Current Room
currentroom = "cellar";

$(document).ready(function () {
	$("#message_begin").fadeIn(3000);
	$("#command_line").fadeIn(3000);
	$("form").submit(function () {
		var input = $("#command_line").val();
		
		
		//help
		if (input.indexOf("help") > -1) {
			if (input == "help") {
				$("#message_help").clone().insertBefore("#placeholder").fadeIn(1000);
			}
		} //end help
		

		//look
		else if (input.indexOf("look") > -1) {
			if (input == "look") {
				$("<p>Look where? Be specific. Type ' help ' for a list of commands.</p>").insertBefore("#placeholder").fadeIn(1000);
			//look left
			}
			else if (input == "look left") {
				$("<p>You see a skeleton sitting on a stool with its leg attached to a chain to the wall.<br>Inside of its skull you see a set of keys. Maybe those can help you?</p>").insertBefore("#placeholder").fadeIn(1000);
			} 
			else if (input == "look right") {
				$("<p>You see a half eaten piece of cheese and a mouse quickly run out to retrieve the cheese. In a dark corner you see a note.<br></p>").insertBefore("#placeholder").fadeIn(1000);
			}
			//else if (input == "look right" || input == "look left"){
			/* disable look right/left after you exit the cellar */	
				//currentroom != "cellar";
				//$("<p>YOu already did that.</p")
			//}
		}
		//
		
		//unlock
		else if (input.indexOf("unlock") > -1) {
			
			if (input == "unlock") {
				$('<p>Unlock what? Be specific. Type "help" for a list of all commands.</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			
			//unlock cellar
			else if (input == "unlock door" || input == "unlock cellar" ) {
				if (currentroom == "cellar" && note == true || keys == true) {
					$('<p>You unlock the cellar door.</p>').insertBefore("#placeholder").fadeIn(1000);
					$("#message_hallway").insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>You forgot an item in the room!</p>').insertBefore("#placeholder").fadeIn(1000);
			}

			else $('<p>You can\'t do that.</p>').insertBefore("#placeholder").fadeIn(1000);
		
		}
		//end unlock function

		//kill
		else if (input.indexOf("kill") > -1) {
			
			if (input == "kill") {
				$('<p>Kill what? Be specific. Type "help" for a list of all commands.</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			
			//kill ghoul
			else if (input == "kill ghoul") {
				$('<p>Kill ghoul with what? Be specific. Type "help" for a list of all commands.</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			else if (input == "kill ghoul with keys" || input == "kill ghoul with note" || input == "kill ghoul with book") {
				$("#killGhoul").insertBefore("#placeholder").fadeIn(1000);
				$("input").attr('disabled','disabled');
			}
			else if (input == "kill ghoul with mace"){
				$('<p>You successfully kill the ghoul. One swipe of your mace to the dome was enough. You see an object in the ghoul\'s front pocket (he\'s very fashionable). It looks like a map.</p>').insertBefore("#placeholder").fadeIn(1000);
			}


			//kill hidden figure
			else if (input == "kill hidden figure") {
				$('<p>Kill hidden figure with what? Be specific. Type "help" for a list of all commands.</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			else if (input == "kill hidden figure with keys" || input == "kill hidden figure with note" || input == "kill hidden figure with book") {
				$("#killHiddenFigure").insertBefore("#placeholder").fadeIn(1000);
				$("input").attr('disabled','disabled');
			}
			else if (input == "kill hidden figure with mace") {
				$("#killMace").insertBefore("#placeholder").fadeIn(1000);
				$("input").attr('disabled','disabled');

			}
			else if (input == "kill hidden figure with dagger"){
				$("#message_hiddenroom2").insertBefore("#placeholder").fadeIn(1000);
			}

		else $('<p>Sucks, you can\'t do that.</p>').insertBefore("#placeholder").fadeIn(1000);
		}
		//


		//take
		else if (input.indexOf("take") > -1) {
			
			if (input == "take") {
				$('<p>Take what? Be specific. Type "help" for a list of all commands.</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			
			//take note
			else if (input == "take note") {
				if (note == false) {
					note = true;
					$('<p>You picked up a note. <br>The note reads:<br>"Greetings, welcome to my little game. Find all the items and you can escape through the front door. Good luck"</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>You forgot an item in the room!</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			//take dagger
			else if (input == "take dagger") {
				if (currentroom = "hiddenroom" && dagger == false) {
					dagger = true;
					$('<p>You picked up a dagger. It looks very sharp.</p>').insertBefore("#placeholder").fadeIn(1000);
					$("#message_hiddenroom1").insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			//
			
			//take keys
			else if (input == "take keys") {
				if (keys == false) {
					keys = true;
					$('<p>You picked up the set of keys</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			//
			
			//take map
			else if (input == "take map") {
				if (currentroom == "basement" && map == false) {
					map = true;
					$('<p>You picked up a map.</p>').insertBefore("#placeholder").fadeIn(1000);
					$("#message_basement3").insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			//
			
			//take rock
			else if (input == "take rock") {
				if (rock == false) {
					rock = true;
					$('<p>You picked up a rock.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			//
			
			//take mace
			else if (input == "take mace") {
				if (currentroom == "basement" && mace == false) {
					mace = true;
					$("<p>You picked up a mace.</p>").insertBefore("#placeholder").fadeIn(1000);
					$("#message_basement2").insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
			}

			//take book
			else if (input == "take book") {
				if (book == false) {
					book = true;
					$('<p>You picked up the book.</p>').insertBefore("#placeholder").fadeIn(1000);
					$("#message_stairwell").insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>It seems like you\'re missing something.</p>').insertBefore("#placeholder").fadeIn(1000);
			}

			//take blue orb
			else if (input == "take blue orb") {
					$('<p>You picked up the blue orb.</p>').insertBefore("#placeholder").fadeIn(1000);
					$("#takeBlueOrb").insertBefore("#placeholder").fadeIn(1000);
					$("input").attr('disabled','disabled');
			}

			//take green orb
			else if (input == "take green orb") {
					$('<p>You picked up the green orb.</p>').insertBefore("#placeholder").fadeIn(1000);
					$("#message_hiddenroom").insertBefore("#placeholder").fadeIn(1000);
			}
			//

			//take red orb
			else if (input == "take red orb") {
					$('<p>You picked up the red orb.</p>').insertBefore("#placeholder").fadeIn(1000);
					$("#takeRedOrb").insertBefore("#placeholder").fadeIn(1000);
					$("input").attr('disabled','disabled');
			}
			//
			else $('<p>You can\'t do that.</p>').insertBefore("#placeholder").fadeIn(1000);
		}
		//end take function

		//eat
		else if (input.indexOf ("eat") > -1){
			if (input == "eat apple"){
				$("<p>You eat the apple.</p>").insertBefore("#placeholder").fadeIn(1000);
				$("#eatPoison").insertBefore("#placeholder").fadeIn(1000);
				$("input").attr('disabled','disabled');
			}
			if (input == "eat steak"){
				$("<p>You eat the steak.</p>").insertBefore("#placeholder").fadeIn(1000);
				$("#eatPoison").insertBefore("#placeholder").fadeIn(1000);
				$("input").attr('disabled','disabled');
			}
			else if (input == "eat pizza"){
				$("<p>You eat the pizza.<br> Tastes good, doesn\'t it. You deserve it.</p>").insertBefore("#placeholder").fadeIn(1000);
				$("#message_livingroom").insertBefore("#placeholder").fadeIn(1000);

			}
		}
		
		//inventory
		else if (input.indexOf("inventory") > -1) {
			if (input == "inventory") {
				
				//keys
				if (keys == true) {
					kys = "Keys<br />";
				}
				else {
					kys = "";
				}
				//
				
				//map
				if (map == true) {
					mp = "Map<br />";
				}
				else {
					mp = "";
				}
				//
				
				//rock
				if (rock == true) {
					rck = "Note from Captors<br />";
				}
				else {
					rck = "";
				}
				//
				
				//hammer
				if (dagger == true) {
					dag = "Ha<br />";
				}
				else {
					dag = "";
				}
				//
								
				//mace
				if (mace == true) {
					mce = "Mace<br />";
				}
				else {
					mce = "";
				}

				//note
				if (note == true) {
					nte = "Note<br />";
				}
				else {
					nte = "";
				}

				//book
				if (book == true) {
					bk = "Book<br />";
				}
				else {
					bk = "";
				}
				//green orb
				if (greenorb == true) {
					gorb = "Green Orb<br />";
				}
				else {
					gorb = "";
				}


				if (nte == "" && kys == "" && mp == "" ) {
					$('<p>Inventory:<br /><i>There is nothing in your inventory</i></p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else {
					 $('<p>Inventory:<br />' + kys + mp + rck + dag + mce + nte + bk + gorb + '</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			}
			/* else $('<p>I don\'t understand "' + input + '"</p>').insertBefore("#placeholder").fadeIn(1000); */
		} 
		//end inventory function


		//go to
		if (input.indexOf("go") > -1) {
			if (input == "go to" || input == "go") {
				$("<p>Go to where/at? Be specific. Type 'help' for a list of commands.</p>").hide().insertBefore("#placeholder").fadeIn(1000);
			}

		//go to hallway from starter area
		else if (input == "go to hallway" ){
				$("#message_hallway").clone().insertBefore("#placeholder").fadeIn(1000);
				currentroom = "hallway";
			}
		// go to red door
		else if (input == "go to red door" && book == false){
			$("<p>You\'re missing something.</p>").hide().insertBefore("#placeholder").fadeIn(1000);
		}
		if (input == "go to red door" && book == true) {
			$("#trap").clone().insertBefore("#placeholder").fadeIn(1000);
			$("input").attr('disabled','disabled');
		}
		// go to blue door
		else if (input == "go to blue door" && book == false){
			$("<p>You\'re missing something.</p>").hide().insertBefore("#placeholder").fadeIn(1000);
		}
		if (input == "go to blue door" && book == true){
			$("<p>You proceed into the blue door.</p>").insertBefore("#placeholder").fadeIn(1000);
			$("#message_basement").clone().insertBefore("#placeholder").fadeIn(1000);
			currentroom = "basement";
		}
		//go to kitchen
		else if (input == "go to kitchen" && map == false){
			$("<p>You\'re missing something from the basement.</p>").hide().insertBefore("#placeholder").fadeIn(1000);
		}
		if (input == "go to kitchen" && map == true){
			$("<p>You proceed into the kitchen.</p>").insertBefore("#placeholder").fadeIn(1000);
			$("#message_kitchen").clone().insertBefore("#placeholder").fadeIn(1000);
		}
		//go to living room 
		else if (input == "go to living room"){
			$("#message_livingroom ").hide().insertBefore("#placeholder").fadeIn(1000);
		}
		//go to hidden room 
		else if (input == "go to hidden room"){
			$("#message_hiddenroom").hide().insertBefore("#placeholder").fadeIn(1000);
		}
	}	
 

		// end go to function

		/* else if (input != "") {
			$('<p>I don\'t understand "' + input + '"</p>').insertBefore("#placeholder").fadeIn(1000);
		} */
		
		$("#console").scrollTop($("#console")[0].scrollHeight);
		$("#command_line").val("");
	});
});


