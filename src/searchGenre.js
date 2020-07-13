let listofgenres = [
	"acoustic",
	"afrobeat",
	"alt-rock",
	"alternative",
	"ambient",
	"anime",
	"black-metal",
	"bluegrass",
	"blues",
	"bossanova",
	"brazil",
	"breakbeat",
	"british",
	"cantopop",
	"chicago-house",
	"children",
	"chill",
	"classical",
	"club",
	"comedy",
	"country",
	"dance",
	"dancehall",
	"death-metal",
	"deep-house",
	"detroit-techno",
	"disco",
	"disney",
	"drum-and-bass",
	"dub",
	"dubstep",
	"edm",
	"electro",
	"electronic",
	"emo",
	"folk",
	"forro",
	"french",
	"funk",
	"garage",
	"german",
	"gospel",
	"goth",
	"grindcore",
	"groove",
	"grunge",
	"guitar",
	"happy",
	"hard-Rock",
	"hardcore",
	"hardstyle",
	"heavy-metal",
	"hip-hop",
	"holidays",
	"honky-tonk",
	"house",
	"idm",
	"indian",
	"indie",
	"indie-pop",
	"industrial",
	"iranian",
	"j-dance",
	"j-idol",
	"j-pop",
	"j-rock",
	"jazz",
	"k-pop",
	"kids",
	"latin",
	"latino",
	"malay",
	"mandopop",
	"metal",
	"metal-misc",
	"metalcore",
	"minimal-techno",
	"movies",
	"mpb",
	"new-age",
	"new-release",
	"Opera",
	"pagode",
	"party",
	"philippines-opm",
	"piano",
	"pop",
	"pop-film",
	"post-dubstep",
	"power-pop",
	"progressive-house",
	"psych-rock",
	"punk",
	"punk-rock",
	"r-n-b",
	"rainy-day",
	"reggae",
	"reggaeton",
	"road-trip",
	"rock",
	"rock-n-roll",
	"rockabilly",
	"romance",
	"sad",
	"salsa",
	"samba",
	"sertanejo",
	"show-tunes",
	"singer-songwriter",
	"ska",
	"sleep",
	"songwriter",
	"soul",
	"soundtracks",
	"spanish",
	"study",
	"summer",
	"swedish",
	"synth-pop",
	"tango",
	"techno",
	"trance",
	"trip-hop",
	"turkish",
	"work-out",
	"world-music",
];
let genrebar = document.getElementById("genre");

for (var i = 0; i < listofgenres.length; i++) {
	let genrediv = document.createElement("option");
	genrediv.setAttribute("value", listofgenres[i]);
	genrediv.innerHTML = listofgenres[i];
	genrebar.append(genrediv);
}

document.getElementById("savegenre").addEventListener("click", (evt) => {
	var sel = document.getElementsByName("genre");
	localStorage.setItem("genre", sel[0].value);
});

const genre = localStorage.getItem("genre");

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
	modal.style.display = "block";
};
span.onclick = function () {
	modal.style.display = "none";
};
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
};
