
			// Russian, English, Deutsch
var words = [['я', 'I', 'ich'],
			 ['ты', 'you', 'du'],
			 ['он', 'he', 'er'],
			 ['она', 'she', 'sie'],
			 ['оно', 'it', 'es'],
			 ['мы', 'we', 'wir'],
			 ['вы', 'you', 'ihr'],
			 ['они', 'they', 'sie']
			 // You can add here a word and its translation
			];

$(document).ready(function randomize() {
	var i = Math.floor(Math.random() * words.length); //Random number
	$("#ru-word").append(words[i][0]);
	$("#en-word").append(words[i][1]);
	$("#de-word").append(words[i][2]);
	
	$('body').click(function(){
		location.reload();
	});
});

