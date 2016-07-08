$(document).ready(function() {

	var adjectives1 = [
		"", "", "", "",
		"massive",
		"gigantic",
		"total",
		"enourmous",
		"colossal",
		"absolute",
		"stupid",
		"disgusting",
		"haunted",
		"incompetent",
		"reprehensible",
		"back stabbing",
		"great",
		"weapons-grade",
		"witless"
	];

	var adjectives2 = [
		"", "", "", "",
		"fucking",
		"boil‑in‑the‑bag",
		"arse‑cheeked",
		"ventriloquist‑dummy‑faced",
		"spam faced"
	];

	var nouns = [
		"rent‑a‑clown",
		"plum",
		"cockwomble",
		"cocksplat",
		"fuckmuppet",
		"muppet",
		"spunktrumpet",
		"fuck trumpet",
		"bollock‑wagon",
		"arsebadger",
		"jizzmonger",
		"tool‑bag",
		"pork mannequin",
		"plonker",
		"pie",
		"moron",
		"twat",
		"bell",
		"tube",
		"helmet",
		"nobberhead",
		"wazzock",
		"trombone",
		"numpty",
		"tit"
	];

	var pronoun = "You";

	var adjective1 = adjectives1[Math.floor(Math.random()*adjectives1.length)];

	var adjective2 = adjectives2[Math.floor(Math.random()*adjectives2.length)];

	var adjectivePhrase = adjective1 + " " + adjective2;

	var noun = nouns[Math.floor(Math.random()*nouns.length)];

	var insultPhrase = pronoun + " " + adjectivePhrase + " " + noun;

	$('.insult').contents().last()[0].textContent=insultPhrase;

})