var character = 'system';
var eventArray = [
	{index: "paperwork", name: "File Paperwork", location: 'playerOffice', time: "MorningEvening", 
	itemReq: "", trustMin: 0, trustMax: 0, type: "button", top: 0, left: 0,}
];
var newItems = [ //If price is 0 it isn't for sale
	{name: "Butt", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/butt.jpg", description: ""},
	{name: "Ghost AR", 			key: true, 		price: 0, 	image: "scripts/gamefiles/items/ghostAR.jpg", description: "The brand new mobile game Ghost AR! Track ghosts around the city, collect them all and save the world from their ghastly threat!"},
	{name: "Town Map", 			key: true, 		price: 20, 	image: "scripts/gamefiles/items/map.jpg", description: "Allows you to navigate around town more easily."},
	//{name: "Hypnosis Textbook", key: true, 	price: 50, 	image: "scripts/gamefiles/items/hypnosisTextbook.jpg", description: "A textbook on hypnosis, you can read it at home to improve your skill."},
	//{name: "Hacking Textbook", 	key: true, 	price: 50, 	image: "scripts/gamefiles/items/hackingTextbook.jpg", description: "A textbook on hacking, you can read it at home to improve your skill."},
	//{name: "Counseling Textbook", key: true, 	price: 50, 	image: "scripts/gamefiles/items/counselingTextbook.jpg", description: "A textbook on counseling, you can read it at home to improve your skill."},
	{name: "Lady", 				key: true, 		price: 0, 	image: "scripts/gamefiles/profiles/lady.jpg", description: "For if you'd like to play as a cute lady. Unlocks the Lady character portrait. Aesthetic change only, art by Nusumenaihxseki"},
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default. Tab appears below the map, button appears on the map itself
	{index: "paperwork", 	name: "File some Paperwork", 	location: 'playerOffice', 		time: "MorningEvening", 	itemReq: "", trustMin: 0, trustMax: 0, type: "button", top: 40, left: 65, day: "both",},
	{index: "hotel", 	name: "Continue", 	location: 'hotel', 		time: "MorningEveningNight", 	itemReq: "", trustMin: 0, trustMax: 0, type: "button", top: 40, left: 40, day: "both",},
	{index: "listTextbooks", name: "Read a Book", 			location: 'playerHouse', 		time: "MorningEvening", 	itemReq: "", trustMin: 0, trustMax: 0, type: "button", top: 20, left: 72, day: "both",},
	{index: "listTextbooks", name: "Read a Book", 			location: 'playerOffice', 		time: "MorningEvening", 	itemReq: "", trustMin: 0, trustMax: 0, type: "button", top: 20, left: 72, day: "both",},
	//{index: "gameConsole", 	name: "Game Console", 			location: 'playerHouse', 		time: "MorningEvening", 	itemReq: "", trustMin: 0, trustMax: 0, type: "button", top: 62, left: 72, day: "both",},
	{index: "wardrobe", 	name: "Wardrobe", 				location: 'playerHouse', 		time: "MorningEvening", 	itemReq: "", trustMin: 0, trustMax: 0, type: "button", top: 62, left: 1, day: "both",},
	{index: "laptop", 		name: "Use the Computer", 		location: 'playerHouse', 		time: "MorningEvening", 	itemReq: "", trustMin: 0, trustMax: 0, type: "button", top: 40, left: 5, day: "both",},
	{index: "skillBooks", 		name: "Read up on self-help", 		location: 'library', 		time: "MorningEvening", 	itemReq: "", trustMin: 0, trustMax: 0, type: "button", top: 25, left: 25, day: "both",},
	{index: "styleBooks", 		name: "Read up on artistic styles", 		location: 'library', 		time: "MorningEvening", 	itemReq: "", trustMin: 0, trustMax: 0, type: "button", top: 45, left: 45, day: "both",},
	//index: "gameBooks", 		name: "Read up on the latest trends", 		location: 'library', 		time: "MorningEvening", 	itemReq: "", trustMin: 0, trustMax: 0, type: "button", top: 40, left: 45, day: "both",},
	{index: "nap", 			name: "Take a Nap", 			location: 'cellsDungeon', 		time: "MorningEvening", 			itemReq: "", trustMin: 0, trustMax: 0, type: "button", top: 52, left: 35, day: "both",},
	{index: "nap", 			name: "Take a Nap", 			location: 'lowerDungeon', 		time: "MorningEvening", 	itemReq: "", trustMin: 0, trustMax: 0, type: "button", top: 52, left: 35, day: "both",},
	{index: "nap", 			name: "Wait", 			location: 'map', 		time: "MorningEvening", 	itemReq: "", trustMin: 0, trustMax: 0, type: "button", top: 0, left: 0, day: "both",},
	{index: "newDay", 		name: "Go to Bed", 				location: 'cellsDungeon', 		time: "Night", 		itemReq: "", trustMin: 0, trustMax: 0, type: "button", top: 52, left: 35, day: "both",},
	{index: "shop", 		name: "General Store", 			location: 'shoppingDistrict', 	time: "MorningEvening", 	itemReq: "", trustMin: 0, trustMax: 0, type: "button", top: 40, left: 60, day: "both",},
];

function writeEncounter(scene) {
	console.log('now writing encounter '+scene);
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	if (scene.includes("porn") || data.player.location == 'gallery') {
		document.getElementById('output').innerHTML = '';
	}
	switch (scene) {
		case "hotel": {
			if (checkFlag("demon", "hotelBad") == true) {
				loadEncounter("demon", "hotelBadFinish");
			}
			if (checkFlag("succubus", "hotelGood") == true) {
				loadEncounter("succubus", "hotelGoodFinish");aa
			}
			break;
		}
		case "start" : {
			updateMenu();
			document.getElementById('playerImage').src = "scripts/gamefiles/none.png";
			var bg = "scripts/gamefiles/logo2.png";
			document.getElementById('wrapperBG').style.backgroundImage = "url("+bg+")";
			writeBig("images/18only.png");
			writeCenteredText("<b><i>Loli Universe</i></b> is an adult game created by <b><u><i>Robloxian Productions</i></u></b>, <b><u><i>Shadow</i></u></b>, and <b><u><i>TrinityRR34</i></u></b>. This game was created and is maintained by <a href='https://RobloxianProductions.github.io/'>Robloxian Studios</a>.");
			writeCenteredText("This is the first game Developed by Robloxian Productions. Go ahead and join <a href='https://discord.gg/AtdBE5z4Ub'>Our Wonderful Discord Server.</a>");
			writeCenteredText("Before you begin, please keep in mind that female and male content can be disabled in the button below and Please have fun! <u><b>(Not Implemented Yet)</b></u>");
			//writeFunction("loadEncounter('system', 'otherNotes')", "Review important notes");
			//writeFunction("loadEncounter('system', 'veganMenu')", "Enable vegetarian / carnivore mode, disabling straight/gay content");
			writeText("<hr>");
			writeCenteredText("Once you've read the information and chosen your desired settings...");
			writeCenteredText("<span style='font-size:300%;'><b>Choose Your Character!(WIP)</b></span>");
			document.getElementById('output').innerHTML += `
			<div id="wardrobeGrid" style="display:grid; grid-template-columns:auto auto;">
			
				<img class="medPicture" style="max-width:40vw; filter:brightness(50%);"; id="Shadow" src="images/player/male/main.jpg" 
				onclick="writeEncounter('prologueMale')",
				onmouseover="wardrobeMouseOver('basic')"
				onmouseout="wardrobeMouseOut('basic')">
				
				<img class="medPicture" style="max-width:40vFemalew; filter:brightness(50%);"; id="femaletest" src="images/player/female/main.jpg"
				onclick="writeEncounter('prologue')",
			</div>
			`;
			// replace [\r\n]+ with , 
			writeText("<hr>");
            writeCenteredText("Placeholder Text");
			/*writeCenteredText("<span style='font-size:300%;'>Thank you to all of my fantastic patrons:</span>");
			//writeSpecial("");
			writeText("<hr>");
			writeCenteredText("<span style='font-size:300%;'>And special thanks to:</span>");
			writeSpecial("Stiggy752 for the game's CSS, Wild Bill/Master of Puppets for the game's save to file system, and to OrangeMaestro for his orange eyes helping find many of the typos that plagued this game. Other typo/bug-hunters I'd like to shout out are Atomic Goblin, Chomp, crnicu, DarkNico, DogsAreBetterThanCats, Dowee, Eintei, Goblin Boy, Master of Puppets, M M T, MustafaSerkan, Nico Fox, PancakeLoverAkechi, Papa Primus, Shbers, sinofsloth345, SlackerSavior, and all anonymous posters who posted bugs via the suggestion box. Thanks!");
			writeText("<hr>");
			writeSpecial("Here's a list of authors who's written for the game:");
			writeSpeech("<a href = 'https://noodlejacuzzi.github.io/index.html'>Noodle Jacuzzi</a>", "scripts/gamefiles/characters/noodle.jpg", "<b>Author of momF, Lana, tomgirlF, succubusF, and others.</b><br>I almost named myself Dwayne 'The Guac' Johnson.<br>Click my name to play my other games if you want.");
			writeSpeech("Cryptogreek", "scripts/gamefiles/characters/crypto.jpg", "<b>Author of kuroF, mistressF, maidF, mejiF, housekeepF, and others.</b><br>Thanks for enjoying the game my fellow degenerates!");
			writeSpeech("SlackerSavior", "scripts/gamefiles/characters/slacker.jpg", "<b>Author of sportsF, coachF, coldF, swimmerF, and orangeF.</b><br>I wanted to write 'Don't ask me for shit' here, but it felt a little too rude.<br>So feel free to ask, but don't expect results anytime soon.");*/
			break;
		}
		case "otherNotes": {
			writeText("If");
			writeText("<hr>");
			writeText("Finally, there's also a <a href='https://tiermaker.com/create/hu-best-waifu-1109129'>Tier List Maker</a> for the game. It could be a fun way to start a conversation on the discord. NoodleJacuzzi has already prepared an objectively correct one for your educational benefit:");
			writeBig("scripts/gamefiles/tierList.png");
			writeBig("scripts/gamefiles/alignmentChart.png");
			writeFunction("loadEncounter('system', 'start')", "Go back to the start");
			break;
		}
		case "artistList": {
			listArtists();
			writeFunction("loadEncounter('system', 'start')", "Go back to the start");
			break;
		}
		case "veganMenu": {
			if (data.player.vegetarian != true && data.player.carnivore != true) {
				writeSpecial("Currently neither vegetarian or carnivore mode are active. You are an omnivore who can lewd both sexes!");
			}
			if (data.player.vegetarian == true && data.player.carnivore == true) {
				writeSpecial("... You've disabled both male and female characters. Are you sure this is the right game for you?");
			}
			writeBig("images/locations/vegetarian.jpg");
			if (data.player.vegetarian == true) {
				writeSpecial("Vegetarian mode is active! Femboy / male characters will no longer appear.");
				writeFunction("loadEncounter('system', 'vegetarianToggle')", "Disable vegetarian mode");
			}
			else {
				writeFunction("loadEncounter('system', 'vegetarianToggle')", "Enable vegetarian mode");
			}
			writeBig("images/locations/carnivore.jpg");
			if (data.player.carnivore == true) {
				writeSpecial("Carnivore mode is active! Female characters will no longer appear. System-essential characters such as incubusF and principalF will still appear, but will have alternate interactions with no sex.");
				writeFunction("loadEncounter('system', 'carnivoreToggle')", "Disable carnivore mode");
			}
			else {
				writeFunction("loadEncounter('system', 'carnivoreToggle')", "Enable carnivore mode");
			}
			writeText("All of the artists who's works we've used have different styles, and all work is censored due to Japan's censorship laws. It is worth noting that each have their own appeal / flaws. Oreteki is a divisive artist due to his style of drawing labia lips, and Nagi Ichi's work is 90% M/M. If these features are a dealbreaker for you, consider avoiding characters by these artists.");
			writeFunction("loadEncounter('system', 'oretekiTest')", "See an Oreteki18kin example <br>(LONG LABIA LIPS/FLAPS)");
			writeFunction("loadEncounter('system', 'start')", "Go back");
			break;
		}
		case "vegetarianToggle": {
			if (data.player.vegetarian == true) {
				data.player.vegetarian = false;
			}
			else {
				data.player.vegetarian = true;
			}
			loadEncounter('system', 'veganMenu');
			break;
		}
		case "carnivoreToggle": {
			if (data.player.carnivore == true) {
				data.player.carnivore = false;
			}
			else {
				data.player.carnivore = true;
			}
			loadEncounter('system', 'veganMenu');
			break;
		}
		case "listTextbooks": {
			listTextbooks();
			break;
		}
		case "prologueMale": {
			writeText("Input your name <input type='text' id='nameSubmission' value='Shadow'>");
			writeFunction("renamePlayerMale()", "Begin the story");
			break;
		}
		case "prologueFemale": {
			writeText("Input your name <input type='text' id='nameSubmission' value='Template'>");
			writeText("Character Not Implemented yet");
			break;
		}
		case "prologueMale2": {
			writeBig("images/player/male/main.jpg");
			writeText("You are " + data.player.name + ", An Elementary Schooler in the 5th grade");
			writeText("You just moved to a new small town in Nevada with your dad who is your only parent and your little sister who is in 3rd Grade");
			writeBig("images/Intro/CarDrivingToTown.jpg");
			writeHTML(`
				sp Dad; Ok Kids see over there?
				t he points to a couple of small buildings to your left
				sp Dad; That is our new home
				sp littlesis; Thats our home? It's in the middle of nowhere!
				sp player; Yeah Dad! What are we supposed to do out here!
				sp Dad; Now Now kids. This place isn't as bad as you think
				sp littlesis; ....this place makes me feel uneasy
				t You hug her
				sp player; It's ok i will protect my little sis
				t she leans on you
				sp littlesis; Thank you Big Brother.
				t ...
				t after hours of work helping your dad move the boxes into the house with your little sister you Fall onto your bed tired.
				sp player; Ugh that was alot of work.
				t Your sister is on her bed on the other side of the room already asleep, and she didn't even change into her pajamas.
				sp player; Cute.
				sp player; Well i should get changed and to bed.
				t you get undressed since your sister is sound asleep and get changed into pajamas.
				sp player; God i am tired. I hope tomorrow is easier
				t you get into bed and fall asleep.
			`);
            writeFunction("AbductedPlayerMale()", "You Fall Asleep");
			break;
		}
		
		case "AbductedMale": {
			writeHTML(`
			sp littlesis; BROTHER! HELP ME!!!!!!!!!!!!!
			`);
			writeFunction("changeLocation('playerRoom')", "Start");
			break;
		}
		case "oretekiTest": {
			writeBig("images/porn/5A-3.jpg", "Art by Oreteki18Kin");
			writeBig("images/principal/070.jpg", "Art by Oreteki18Kin");
			writeFunction("loadEncounter('system', 'artistList')", "go back");
			break;
		}
		case "nagiTest": {
			writeBig("images/tomgirl/7-5.jpg", "Art by Nagi Ichi");
			writeFunction("loadEncounter('system', 'start')", "go back");
			break;
		}
		case "gujiraTest": {
			writeBig("images/succubus/1-5.jpg", "Art by Gujira");
			writeFunction("loadEncounter('system', 'start')", "go back");
			break;
		}
		case "cheat": {
			writeCenteredText("You can enter cheat codes here. For example, use the code 'new name' to rename all of the game's other characters.");
			writeCenteredText("I keep a list of all of these on my patreon, go there, even if you aren't a patron, to find them.");
			writeCenteredText("Enter cheat code: <input type='text' id='cheatSubmission' value=''>");
			writeFunction("diagnostic()", "Submit");
			writeFunction("loadEncounter('system', 'gameConsole')", "Go back");
			break;
		}
		/*case "load": {
			document.getElementById('output').innerHTML += `
				<p class='centeredText'>Warning: Save before using. Enter the modded character's index EXACTLY or it will cause issues and you'll need to load the game.</p>
				<p class='centeredText'>As of v8 March 27th 2020, The mod characters by SlackerSavior have been fully added into the game. Type in <b>coach</b> below to load them into the game. Please keep in mind though that only Zoe and Amy have content.</p>
				<p class='centeredText'>Enter character's index: <input type="text" id="indexSubmission" value=""></p>
				<p class='choiceText' onclick='modCharacter()'>Submit</p>
			`;
			if (data.player.location == "") {
				writeFunction("writeEncounter('start')", "Finish");
			}
			else {
				writeFunction("writeEncounter('gameConsole')", "Finish");
			}
			break;
		}*/
		case "newDay": {
			if (data.player.location != scene) {
				randNum = getRandomInt(8);
				randNum += 1;
				data.player.dayID = randNum;
				console.log("Today's day ID is " + data.player.dayID);
				data.player.day += 1;
			}
			for (i = 0; i < data.story.length; i++) {
				data.story[i].encountered = false;
			}
			data.player.time = "Morning";
			updateMenu();
			//checkDay();
			var specialEvent = false;
			//Checking for special events
			console.log("Now checking for special events for on day " + data.player.day);
			if (data.player.day == 3) {
				//specialEvent = true;
				//writeFunction("writeEvent('specialDay')", "Go to the special event");
				//writeTransition("playerHouse", "Skip the event");
			}
			if (checkTrust('succubus') > 70) {
				if (checkFlag('succubus', 'breakfast') == false) {
					specialEvent = "breakfast"; 
				}
			}
			if (checkTrust('fitboi') > 82 && checkFlag("fitboi", "morning") == false) {
				if (checkFlag('fitboi', 'morning') == false) {
					specialEvent = "shecream"; 
				}
			}
			if (checkTrust('succubus') > 77) {
				if (checkFlag('succubus', 'mission') == false) {
					specialEvent = "mission"; 
				}
			}
			var nurseReady = false;
			if (checkTrust("nurse") > 79 || checkTrust("nurse") == 3) {
				nurseReady = true;
			}
			var ojouReady = false
			if (checkTrust("ojou") > 79 || checkFlag("ojou", "incubus") == true) {
				ojouReady = true;
			}
			if (
				checkTrust("scarf") > 99 &&
				nurseReady == true &&
				checkTrust("president") > 99 &&
				checkTrust("mama") > 18 &&
				ojouReady == true &&
				checkTrust("instructor") > 1 &&
				checkTrust("pinstripe") > 1
			) {
				if (checkFlag('president', 'shadowCouncil') == false) {
					specialEvent = "shadowCouncil"; 
				}
			}
			switch (specialEvent) {
				case "breakfast": 
					loadEncounter('succubus', 'breakfast');
				break;
				case "mission": 
					loadEncounter('succubus', 'missionStart');
				break;
				case "shadowCouncil": 
					loadEncounter('president', 'shadowCouncilA');
				break;
				case "shecream": 
					loadEncounter('fitboi', 'fitboiMorning');
				break;
				default: {
					console.log("No events found");
					checkForPhone();
					document.getElementById('output').innerHTML += `
						<div class="playerRoom">
							<img class="backgroundPicture" src="images/locations/newDayMorning.jpg" usemap="#roomMap">
						</div>
					`;
					if (checkFlag("mom", "megaEasy") == true) {
						printLocationButton(
							"Get out of bed", 
							40, 
							40, 
							"map", 
						);
					}
					else {
						printLocationButton(
							"Get up", 
							40, 
							40, 
							"cellsDungeon", 
						);
						println("you wake up and make sure everything is in place for a new day of enslaving")
					}
					if (checkFlag("mom", "megaEasy") != true) {
						var illegalLocations = "map, casino, beach, hotel, playerHouse";
						var morningLocation = "";
						var eveningLocation = "";
						for (locationIndex = 0; locationIndex < locationArray.length; locationIndex++) {
							if (locationArray[locationIndex].index == savedLocations.morning) {
								morningLocation = locationArray[locationIndex].name;
							}
							if (locationArray[locationIndex].index == savedLocations.evening) {
								eveningLocation = locationArray[locationIndex].name;
							}
						}
						if (savedLocations.morning != "" && illegalLocations.includes(savedLocations.morning) != true) {
							writeFunction("changeLocation('"+savedLocations.morning+"')", "Shortcut: "+morningLocation);
						}
						if (savedLocations.evening != "" && illegalLocations.includes(savedLocations.evening) != true && savedLocations.evening != savedLocations.morning) {
							writeFunction("changeLocation('"+savedLocations.evening+"')", "Shortcut: "+eveningLocation);
						}
						savedLocations.morning = "";
						savedLocations.evening = "";
					}
				}
			}
			if (data.player.day % 5 === 0) {
				var paybaby = 10 + data.player.counseling;
				writeSpecial("It's payday! $10 has been wired to your account.");
				if (data.player.counseling > 0) {
					writeSpecial("You've received an extra $" + data.player.counseling + " for being so skilled, you sly dog!");
				}
				data.player.money += paybaby;
			}
			if (checkTrust('principal') == 40) {
				if (data.player.carnivore != true) {
					raiseTrust('principal', 1);
				}
			}
			var failureToRead = false;
			for (z = 0; z < data.story.length; z++) {
				if (data.story[z].unreadText ==true) {
					if (data.story[z].textEvent.includes("eward") != true) {
						failureToRead = true;
					}
				}
			}
			if (failureToRead == true) {
				reminderFontSize += 50;
				writeText("<span style='font-size: "+reminderFontSize+"%'>You have one or more unread text messages!</span>");
			}
			else {
				reminderFontSize = 100;
			}
			break;
		}
		case "laptop": {
			writeFunction("loadEncounter('system', 'porn')", "Look up porn");
			writeFunction("loadEncounter('system', 'gallery')", "View the gallery");
			writeFunction("changeLocation('playerHouse')", "Finish");
			break;
		}
		case "porn": {
			if (data.player.time == "Night") {
				writeText("Looking out your window, you notice it's already night! You'll need to get some sleep.");
			writeFunction("changeLocation('lowerDungeon')", "Finish");
			}
			else {
				if (data.player.carnivore == "true") {
					writeText("Scrolling through the list, most videos uploaded to this porn site are straight. After a quick skim you don't find anything of note except for the personalized adds.")
				}
				else {
					writePorn();
				}
				writeFunction("loadEncounter('system', 'laptop')", "Go back");
				if (data.player.vegetarian != true && checkFlag("camboi", "stream") != true && data.player.day > 1) {
					popup();
				}
			}
			break;
		}
		case "gallery" : {
			data.player.location = 'gallery';
			generateGalleryNav();
			writeFunction("changeLocation('playerHouse')", "Finish up");
			break;
		}
		case "gameConsole": {
			writeFunction("loadEncounter('system', 'cheat')", "Enter cheat code");
			if (checkFlag("mom", "mods") != true) {
				writeFunction("loadEncounter('system', 'existingMods')", "Check out some included mods", "green");
			}
			else {
				writeFunction("loadEncounter('system', 'existingMods')", "Check out some included mods");
			}
			writeFunction("loadEncounter('system', 'load')", "Load an external mod character");
			writeFunction("changeLocation('playerHouse')", "Go back");
			break;
		}
		case "existingMods": {
			writeCenteredText("Here's a list of mods submitted on the Noodle's Jacuzzi discord server. Please keep in mind these may not be the latest versions of these characters, especially if you are playing a downloaded version of the game.");
			writeCenteredText("This list serves as a method for modders to have their characters uploaded and be made playable online, but please keep in mind that certain content, such as underage or bestiality content, shall not be hosted here. If you would like your characters uploaded to this list, please let me know via discord!");
			if (checkFlag("mom", "mods") != true) {
				addFlag("mom", "mods");
			}
			writeMed("images/sports/profile.jpg");
			writeCenteredText("Zoe & the volleyball team - SlackerSavior");
			writeCenteredText("Status - Multiple characters finished, several characters in-progress");
			writeFunction("", "SlackerSavior's characters are implemented into the game by default! Please drop by the discord or the f95zone thread if you'd like to give much-welcome feedback!");
			writeMed("images/intern/profile.jpg");
			writeCenteredText("Dan Flint - Ace");
			writeSpecial("Status - Currently Finished. Now includes a corruption route and a new character! You don't need to load the mod again, just keep playing.");
			writeFunction("writeEncounter('loadIntern')", "Load Dan Flint by Ace, last updated 12/16/2021");
			writeMed("images/serious/profile.jpg");
			writeCenteredText("Aaron Lucky - Ace");
			writeSpecial("Status - Just a preview. The author is a cool guy looking for feedback!");
			writeFunction("writeEncounter('loadSerious')", "Load Aaron Lucky by Ace, last updated 12/29/2021");
			writeMed("images/ghost/profile.jpg");
			writeCenteredText("Sadako Yamamura - PenguinThunder");
			writeSpecial("Status - Currently Finished. Assumes you have progress with Gou, a male character. If you don't, the content might be confusing, but you don't <i>need</i> to understand Gou to follow the plot.");
			writeFunction("writeEncounter('loadGhost')", "Load Sadako Yamamura by PenguinThunder, last updated 12/16/2021");
			writeFunction("writeEncounter('gameConsole')", "Go back");
			break;
		}
		case "loadIntern": {
			document.getElementById('output').innerHTML += `
				<input type="text" id="indexSubmission" value="intern">
			`;
			modCharacter();
			break;
		}
		case "loadSerious": {
			document.getElementById('output').innerHTML += `
				<input type="text" id="indexSubmission" value="serious">
			`;
			modCharacter();
			break;
		}
		case "loadGhost": {
			document.getElementById('output').innerHTML += `
				<input type="text" id="indexSubmission" value="ghost">
			`;
			modCharacter();
			break;
		}
		case "wardrobe": {
			writeWardrobe();
			writeFunction("changeLocation('playerHouse')", "Go back");
			break;
		}
		case "renamingRoom": {
			for (i = 0; i < data.story.length; i++) {
				writeMed("images/"+data.story[i].index+"/profile.jpg");
				document.getElementById('output').innerHTML += `
				<p class="centeredText"><input type="text" id="nameSubmission`+i+`1" value="`+data.story[i].fName+`"> <input type="text" id="nameSubmission`+i+`2" value="`+data.story[i].lName+`"></p>
				`;
				writeFunction("resetProgress('"+data.story[i].index+"')", "Reset progress with "+data.story[i].fName);
			}
			writeFunction("renameEveryone()", "Rename characters");
			writeFunction("changeLocation('playerHouse')", "Cancel and leave");
			break;
		}
		case "youwillcallme": {
			writeBig("scripts/gamefiles/characters/"+data.player.character+".jpg", "Art by Ishimura");
			writeText("You are <input type='text' id='nameSubmission' value='"+data.player.name+"'>");
			writeText("Those you've hypnotized call you <input type='text' id='nicknameSubmission' value='*Master'>");
			writeFunction("renameNickname()", "Continue");
			writeFunction("changeLocation('playerHouse')", "Cancel and leave");
			break;
		}
		case "paperwork": {
			writeText("You can do paperwork here, earning some quick overtime cash based on your Counseling skill. Would you like to spend a few hours doing that?");
			writeFunction("loadEncounter('system', 'filing')", "Yes");
			writeFunction("changeLocation('playerOffice')", "No");
			break;
		}
		case "filing": {
			var moneyMade = 10 + data.player.counseling + data.player.counseling;
			passTime();
			data.player.money += moneyMade;
			updateMenu();
			writeText("You spent some time doing paperwork. It's a slow and boring job, but money is money after all. As a hypnotist aren't there better things to be doing though?");
			writeSpecial("You earned $" + moneyMade + "!");
			if (data.player.time != "Night") {
				writeFunction("changeLocation('playerOffice')", "Finish up");
			}
			else {
				writeFunction("changeLocation('cellsDungeon')", "It's getting late, head home");
			}
			break;
		}
		case "shopLoad": {
			writeFunction("loadEncounter('system','shop')", "test shop");
			break;
		}
		case "shop": {
			changeLocation('store');
			break;
		}
		case "nap": {
			passTime();
			changeLocation(data.player.location);
			break;
		}
		case "skillBooks": {
			updateMenu();
			writeHTML(`
				t It's not the most impressive of libraries, but it fits the school's atmosphere. There are a number of textbooks of all different types, but three catch your eye...
			`);
			if (checkFlag("mom", "lHypnos") != true) {
				writeFunction("loadEncounter('system', 'lHypnos')", "Read up on hypnosis");
			}
			if (checkFlag("mom", "lHack") != true) {
				writeFunction("loadEncounter('system', 'lHack')", "Read up on computer hacking");
			}
			if (checkFlag("mom", "lCoun") != true) {
				writeFunction("loadEncounter('system', 'lCoun')", "Read up on modern counseling techniques");
			}
			writeFunction("changeLocation('library')", "Finish");
			break;
		}
		case "lHypnos": {
			writeHTML(`
				t You thoroughly read through the book on hypnosis. It's an older script, but the techniques are still useful. A section on 'sensitivity enhancement' is particularly interesting.
			`);
			writeSpecial("Your hypnosis skill has increased!");
			data.player.hypnosis += 1;
			updateMenu();
			addFlag("mom", scene);
			passTime();
			writeFunction("changeLocation('library')", "Finish");
			break;
		}
		case "lHack": {
			writeHTML(`
				t You thoroughly read through the book on hacking. It's an older script, but the techniques are still useful. A section on how to install system backdoors is particularly interesting.
			`);
			writeSpecial("Your hacking skill has increased!");
			data.player.brainhacking += 1;
			updateMenu();
			addFlag("mom", scene);
			passTime();
			writeFunction("changeLocation('library')", "Finish");
			break;
		}
		case "lCoun": {
			writeHTML(`
				t You thoroughly read through the book on counseling. It's an older script, but the techniques are still useful. A section on how improve your relationship with your employer is quite interesting.
			`);
			writeSpecial("Your counseling skill has increased! Since you're more talented, that obviously equates to a pay bump!");
			data.player.counseling += 1;
			updateMenu();
			addFlag("mom", scene);
			passTime();
			writeFunction("changeLocation('library')", "Finish");
			break;
		}
		case "styleBooks": {
			writeHTML(`
				t The books here each have a different kind of visual flair, the selection is very chaotic.
				sp player; Interesting...
			`);
			writeFunction("loadEncounter('system', 'basicStyle')", "'The Basics - Written by Stiggy 752.'");
			writeFunction("loadEncounter('system', 'personaStyle')", "'Rebellion Against Rotten Adults - NoodleJacuzzi'");
			writeFunction("loadEncounter('system', 'royaltyStyle')", "'Chill Vaporwave Flows - NoodleJacuzzi'");
			writeFunction("loadEncounter('system', 'lobotomyStyle')", "'Lobotomization For Dummies - NoodleJacuzzi'");
			if (data.player.style == "persona") {
				writeFunction("loadEncounter('system', 'personaToggle')", "Toggle the funky UI font");
			}
			writeFunction("changeLocation(data.player.location)", "Finish");
			//if (checkFlag("mom", "styleBooks") != true) {addFlag("mom", "styleBooks");}
			break;
		}
		case "personaToggle": {
			writeEncounter("styleBooks");
			if (checkFlag("mom", "personaOff") != true) {
				addFlag("mom", "personaOff");
				updateMenu();
				writeSpecial("Funky UI styling has been disabled!");
			}
			else {
				removeFlag("mom", "personaOff");
				updateMenu();
				writeSpecial("Funky UI styling has been enabled!");
			}
			break;
		}
		case "basicStyle": {
			data.player.style = "basic";
			writeEncounter("styleBooks");
			writeSpecial("Visual style 'Basic' applied! Very special thank you to stiggy 752!");
			break;
		}
		case "personaStyle": {
			data.player.style = "persona";
			writeEncounter("styleBooks");
			writeSpecial("Visual style 'Persona' applied!");
			if (data.player.gender == "man") {
				if (checkBody("joker") != true) {
					var goof = {index: "joker", artist: "Art by Shigenori Soejima",};
					data.bodytypes.push(goof);
					writeSpecial("The book's contents reminds you of the importance of freedom. You unlocked a new bodytype! Change via the wardrobe.");
				}
				else {
					goof = "null";
				}
			}
			else {
				if (checkBody("joker") != true) {
					var goof = {index: "jokette", artist: "Art by gau aka ggg",};
					data.bodytypes.push(goof);
					writeSpecial("The book's contents reminds you of the importance of freedom. You unlocked a new bodytype! Change via the wardrobe.");
				}
				else {
					goof = "null";
				}
			}
			break;
		}
		case "royaltyStyle": {
			data.player.style = "royalty";
			writeEncounter("styleBooks");
			writeSpecial("Visual style 'Royalty' applied!");
			break;
		}
		case "lobotomyStyle": {
			data.player.style = "lobotomy";
			writeEncounter("styleBooks");
			writeSpecial("Visual style 'Lobotomy' applied!");
			break;
		}
		case "credits": {
			writeText("Incredible! Outstanding! You've reached one of Hentai University's endings!");
			writeText("This game was made by <a href='https://noodlejacuzzi.github.io/index.html'>Noodle Jacuzzi</a> and <a href='https://www.reddit.com/user/CaptainCryptogreek'>Captain Cryptogreek</a>. Hop on in to our <a href='https://discord.gg/pDht5BZ'>Discord</a> and let us know what you thought, we'd love to hear from you. You can also find a section dedicated to modding in there, maybe check that out? Be sure to show show your support for the members of the modding community of course if you do.");
			writeText("Thank you to: Robbie, SlackerSavior, Here Not, Moony, Rester Tim, Te Tule, Dylan van Hal, NoSelect, Aleanne, Brian Graham, The Baka King, Manny Coutlakis, Yugo KUGA, Maven, Nari Gim, Michael Robles, e3, Ryan German, Robert, Christopher Bartz, Ora494, Vikignir, William Thomson, Ruinn, Louts, Dylan, ArtemisAisu, Adrian Vasquez, xdrake100, Holden Martin, Patrick, Brandon, that GUY, Elias, Iron Diana, 4MinuteWarning, Hi There, michael patrick murphy, æž—å®¶è±ª, yami, jack spencer, J_C_L, Jinouga, Marco Wassmer, Colin E, Badaxe, Scal, BOK, Juan Fernandez, Black Dahlia Studios, Omar Flores, lj-_-22, Tired_Sup, shane reid, NOLAN GRADY, DarkEonWolf, Joseph Meyers, Gabriel, Jamarion Blair, A Really Nice Guy, LightSkater, Snow, Nonetheless, Dredd, joey knight, Merkarion, Ryker, william lagier, michael moon, tito, RedGoblin, ReignVI, Shinikami, Jacob Higgs, jaron, Nathaniel Grams, KÃµzan, daniel moffat, Patrick Hastings, Gavin Moore, EniVanella, dalvin lopez, Dumcanem, Mr. L, Alisdair Gaston, Mason, KOOLAID, Skygods, Jd, Henry Litten, Ouspinousse, Forde Wellman, Alex, Helazz, Shivane, Antoine Panaye, Mac, yjzyjz, Draconet547, kyle fenton, Freya Valentine, Jeff, JOOWHAN SHIN, mitchell cross, Tagaron Zockt, Silverstreak1410, qqss, Tom Harley, sakkra83, ASSIRTIVlizard, Tobias Bischoff, Braedon Jasper, Callum Northedge, zafoche, JulikBerlin, landon xiong, zzeedd, Kyle Jones, Yongjie Zhao, mahdeennave, mora, è‡´è¿œ èˆ’, nathan Deglman, Arkanian001, KIVA, Isaiah Sandoval, Neyafi, Cameron Farabee, Lukas Caspers, GWQwQ, Dylan2019, Venomill, Zachary Schicker, Andrew Corrigan, J, Matthew Preston, Mr.Artrist, DigiReave, Johnathen Likens, Sumanth, Maxwell Dedmon, TeLoad, Kish47, Ary Toussaint, faaaa, Cameron Geddes, brybry, Spartan 5398, Boo3, Danny Surety, robert therrien, Patrik LopariÄ‡, Dylan York, Todd Vogel, A Channel, joseph, dawson, Michael Graham, EgoDraconis, Petrichor, Mariusz, Traveler123, Justin, Sean sullivan, D'andre, David Outram, PIGDER, Andrew, Kient Wong, Harry Foster-major, Aaron Brown, Ash mash, Calla Smith, Bastl, Rafa Smith, pest, Zach allen, Onii-sama, Carson Goodwin, Romnomnom, Dragoon22, mitchellwolbert, Maeuil, undead270, ThatOtherGuy, Ashwinder, arthur lacombe, Hello Darkness, Storyteller, Regulus, Minerve1, Seamus Porter, BINKS, ShadowDragon, Richard Pryor, John Nixon, Noh Bhodie, Billymays, Genxin, Ethan Brian, Greatsage56 ., sb2017, Wysdom, Me Notyou, john sparks, Brandon Leary, Sera, ggboomsky, RatKnight, Bradley Herbert, gabriel, SomebodyElse, Peter H, é•¿å¹³ é¬£, thesingleguy, Kethis Immortalis, Anton Schmidt, david thompson, Jayesonn leleaux, Bleed1ngthunder, Eric Hslew, Vikteren, theoron, AnotherAccount333, Kaliden, greatred, Limitless, Geoff Heimos, Kieron Kow, Slomberg, henry grobins, ddkre, SmolFish, Iâ€™m a Mitch, GirmusCz, Daniel Vivette, Harry Brasch, Markus Hansen, Leanerbike1363, Tanman, waazzzup14, DarthMalak, Danny Nguyen, Grim2011, Joshua Curtis, Phanes, Scumstango, Aegil, Wei, Dugelle, Stollwerk, Chaaaanon, Noah675, mazterlith, john smith, Your Husbando, Carlos, Verillia tristari, ShadowHunter1394, ItsAllOgreNow, Jesse Greene, joe, Nils Maier, Ariados, Jane, Snaked, qwerty, murgatroid99, Roy, Wild Bill, ChronosEdge, and brandon for funding this work!");
			writeSpecial("Special thanks to stiggy752 for the game's CSS, Wild Bill/Master of Puppets for the game's save to file system, and to OrangeMaestro for his orange eyes helping find many of the typos that plagued this game. Other typo/bug-hunters I'd like to shout out are Atomic Goblin, Chomp, crnicu, DannyIlluminus, DarkNico, DogsAreBetterThanCats, Dowee, Eintei, Goblin Boy, M M T, Master of Puppets, MustafaSerkan, Nico Fox, PancakeLoverAkechi, Papa Primus, Shbers, SlackerSavior, Slaanesh Champion, swurtle, and all anonymous posters who posted bugs via the suggestion box. Thanks!");
			writeText("Thanks for playing! It'd really help to give feedback anywhere you can, either through a review or letting us know what you think. The game has an F95Zone thread <a href='https://f95zone.to/threads/hentai-university-v15-noodlejacuzzi.37312/'>HERE</a> and a hypnopics thread <a href='https://hypnopics-collective.net/smf_forum/index.php?topic=23881.0'>HERE</a>, and we also check the reddit threads posted for each release.");
			writeText("If you're shy though you can use this anonymous suggestion box <a href='http://freesuggestionbox.com/pub/oakihbd'>HERE</a> to voice your thoughts!");
			writeFunction("changeLocation('playerHouse')", "Keep playing");
			writeText("<hr>");
			writeSpecial("Here's a list of authors who's written for the game:");
			writeSpeech("<a href = 'https://noodlejacuzzi.github.io/index.html'>Noodle Jacuzzi</a>", "scripts/gamefiles/characters/noodle.jpg", "<b>Author of momF, Lana, tomgirlF, succubusF, and others.</b><br>I almost named myself Dwayne 'The Guac' Johnson.<br>Click my name to play my other games if you want.");
			writeSpeech("Cryptogreek", "scripts/gamefiles/characters/crypto.jpg", "<b>Author of kuroF, mistressF, maidF, mejiF, housekeepF, and others.</b><br>Thanks for enjoying the game my fellow degenerates!");
			writeSpeech("SlackerSavior", "scripts/gamefiles/characters/slacker.jpg", "<b>Author of sportsF, coachF, coldF, swimmerF, and orangeF.</b><br>I wanted to write 'Don't ask me for shit' here, but it felt a little too rude.<br>So feel free to ask, but don't expect results anytime soon.");
			writeText("<hr>");
			listArtists();
			break;
		}
		case "porn0A": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Oreteki18Kin");
			writeText("It looks like there's no audio for this video.");
			writeSpeech("Comments", "scripts/gamefiles/none.png", "Anonymous: Lol what a stupid hat<br>Anonymous: Holy shit is that Angelica from Pop Pop girls?<br>Anonymous: Obviously not you fucking idiot, why would she be doing porn?<br>");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn0B": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Enoshima Iki");
			writeText("It looks like there's no audio for this video.");
			writeSpeech("Comments", "scripts/gamefiles/none.png", "Anonymous: You're living the life bro<br>Anonymous: Cat outfits are stupid (USER WAS BANNED FOR THIS POST)");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn0C": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Akushizu");
			writeText("It looks like there's no audio for this video.");
			writeSpeech("Comments", "scripts/gamefiles/none.png", "Anonymous: Isn't blackmail like this actually illegal?<br>Anonymous: Holy shit guys I think I go to the same school as her<br>Anonymous: Pics or it didn't happen");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn1A": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Oreteki18Kin");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn1B": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Enoshima Iki");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn1C": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Akushizu");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn2A": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Oreteki18Kin");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn2B": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Enoshima Iki");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn2C": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Butakoma 330G");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Butakoma 330G");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Butakoma 330G");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Butakoma 330G");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn3A": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Butakoma 330G");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Butakoma 330G");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Butakoma 330G");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Butakoma 330G");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn3B": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Butakoma 330G");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Butakoma 330G");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Butakoma 330G");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Butakoma 330G");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn3C": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Akushizu");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn4A": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Enoshima Iki");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn4B": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Butakoma 330G");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Butakoma 330G");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Butakoma 330G");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn4C": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Akushizu");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn5A": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Oreteki18Kin");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn5B": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Butakoma 330G");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Butakoma 330G");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Butakoma 330G");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Butakoma 330G");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn5C": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Akushizu");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn6A": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Enoshima Iki");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn6B": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-5.jpg", "Art by Oreteki18Kin");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn6C": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-5.jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-6.jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-7.jpg", "Art by Akushizu");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn7A": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Oreteki18Kin");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn7B": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-5.jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-6.jpg", "Art by Akushizu");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn7C": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Enoshima Iki");
			writeText("It looks like there's no audio for this video.");
			writeSpeech("Comments", "scripts/gamefiles/none.png", "Anonymous: Whoa holy shit is this a mod?<br>Anonymous: Sauce plz<br>Anonymous: Lurk moar dumbass<br>Anonymous: Is this actually programmed into the game?");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn8A": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Wataya");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Wataya");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Wataya");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Wataya");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn8B": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Nagi Ichi");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Nagi Ichi");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Nagi Ichi");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Nagi Ichi");
			writeBig("images/porn/"+sheet+"-5.jpg", "Art by Nagi Ichi");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn8C": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Master Maichin");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Master Maichin");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Master Maichin");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Master Maichin");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		default: {
			writeText("Broken! Error code: failed load encounter("+scene+")");
		}
	}
}

function wardrobeMouseOver(wardrobeImage) {
	//console.log(document.getElementById(wardrobeImage).style.filter)
	document.getElementById(wardrobeImage).style.filter = "brightness(100%)"
}

function wardrobeMouseOut(wardrobeImage) {
	//console.log(document.getElementById(wardrobeImage).style.filter)
	document.getElementById(wardrobeImage).style.filter = "brightness(50%)"
}

console.log('system.js loaded correctly. request type is '+requestType)

switch (requestType) {
	case "encounter": {
		writeEncounter(eventName);
		break;
	}
	case "event": {
		writeEncounter(eventName);
		if (data.player.location == 'gallery' && eventName != 'gallery') {
			//writeFunction("changeLocation('playerHouse')", "Finish");
		}
		break;
	}
	case "check": {
		for (i = 0; i < encounterArray.length; i++) {
			if (encounterArray[i].location.includes(data.player.location)) {
				if (encounterArray[i].time.includes(data.player.time)) {
					if (encounterArray[i].type == "tab") {
						printEncounterTab(character.index, encounterArray[i].index, encounterArray[i].name);
					}
					else {
						printEncounterButton('system', encounterArray[i].index, encounterArray[i].name, encounterArray[i].top, encounterArray[i].left);
					}
				}
			}
		}
		break;
	}
	case "shop": {
		var shopItem = "";
		for (item = 0; item < newItems.length; item++) {
			console.log("generating item "+ item + ": " + newItems[item].name + newItems[item].description + newItems[item].image + newItems[item].price + newItems[item].key);
			if (newItems[item].price != 0) {
				if (newItems[item].key == false) {
					document.getElementById('output').innerHTML += `
						<div class = "shopItem" onclick = "purchase('`+newItems[item].name+`','`+newItems[item].image+`','`+newItems[item].price+`','`+newItems[item].key+`')">
							<p class = "shopName">`+newItems[item].name+`</p>
							<p class = "shopDesc">`+newItems[item].description+`</p>
							<p class = "shopPrice">$`+newItems[item].price+`</p>
							<img class ="shopImage" src="`+newItems[item].image+`">
						</div>
						<br>
					`;
				}
				else {
					if (checkItem(newItems[item].name) == false) {
						document.getElementById('output').innerHTML += `
						<div class = "shopItem" onclick = "purchase('`+newItems[item].name+`','`+newItems[item].image+`','`+newItems[item].price+`','`+newItems[item].key+`')">
								<p class = "shopName">`+newItems[item].name+`</p>
								<p class = "shopDesc">`+newItems[item].description+`</p>
								<p class = "shopPrice">$`+newItems[item].price+`</p>
								<img class ="shopImage" src="`+newItems[item].image+`">
							</div>
						<br>
						`;
					}
				}
			}
		}
		break;
	}
}

//Needs events for computer, wardrobe, textbooks, napping, and paperwork