$(document).ready(function() {

	var adjectives1 = [
		"", "", "", "", "",
		"massive",
		"gigantic",
		"total",
		"enourmous",
		"great crested",
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
		"witless",
		"hateful",
		"low-rent",
		"spineless",
		"bandy legged",
		"useless",
		"brainless",
		"tiny‑handed",
		"sausage fingered"
	];

	var adjectives2 = [
		"", "", "", "", "",
		"fucking",
		"boil‑in‑the‑bag",
		"arse‑cheeked",
		"scratch‑and‑sniff",
		"ventriloquist‑dummy‑faced",
		"spam faced",
		"garden‑variety",
		"cack-handed",
		"orange faced",
		"vacuum packed",
		"gravity defying"
	];

	var nouns = [
		"rent‑a‑clown",
		"fuck nugget",
		"streak of piss",
		"knob cheese",
		"scrote",
		"plum",
		"cockwomble",
		"cocksplat",
		"fuckmuppet",
		"muppet",
		"spunktrumpet",
		"fuck trumpet",
		"bollock‑wagon",
		"shit monger",
		"arse monger",
		"arse badger",
		"jizzmonger",
		"tool‑bag",
		"pork mannequin",
		"plonker",
		"pie",
		"moron",
		"twat",
		"bell",
		"bellend",
		"teggit",
		"tube",
		"helmet",
		"clown",
		"nobberhead",
		"wazzock",
		"trombone",
		"numpty",
		"tit",
		"arse biscuit",
		"arse factory",
		"bigot",
		"tool",
		"arse wipe",
		"wanksplat"
	];

	var pronoun = "You";

	var adjective1 = adjectives1[Math.floor(Math.random()*adjectives1.length)];

	var adjective2 = adjectives2[Math.floor(Math.random()*adjectives2.length)];

	var adjectivePhrase = adjective1 + " " + adjective2;

	var noun = nouns[Math.floor(Math.random()*nouns.length)];

	var insultPhrase = pronoun + " " + adjectivePhrase + " " + noun;

	$('.insult').contents().last()[0].textContent=insultPhrase;

})