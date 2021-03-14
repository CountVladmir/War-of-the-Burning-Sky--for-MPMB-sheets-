var iFileName = "War of the Burning Sky";
RequiredSheetVersion(13);

// Define the source
SourceList["ENP:WBS"] = {
	name : "EN Publishing: War of the Burning Sky",
	abbreviation : "ENP:WBS",
	group : "DriveThruRPG",
	url : "https://www.drivethrurpg.com/product/242812/War-of-the-Burning-Sky-5E-Players-Guide",
	date : "2018/05/24"
};

SpellsList["cancel"] = {
	name : "Cancel",
	classes : ["bard", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
	source : ["ENP:WBS", 36],
	level : 2,
	school : "Abjur",
	time : "1 a",
	range : "Self",
	components : "V,S",
	duration : "Conc, 1 min",
	description : "Form sphere of antimagic, can throw to end concentration or casting of a spell",
	descriptionFull : "I form a sphere of antimagic in my hand. As a bonus action, I can throw it at a creature I think is concentrating on a spell, as a reaction I can throw it at a creature I see casting a spell. For each spell they are casting or concentrating on of this spell's level or lower en, for higher I must make a spellcasting ability check (DC of 10+spell's level) to end it."
};