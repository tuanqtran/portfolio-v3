var randomQuotes =[
	{
		quote: "The best thing about a boolean is even if you are wrong, you are only off by a bit.",
		artist: "-Anonymous"
	},
	{
		quote: "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
		artist: "-Rick Osborne"
	},
	{
		quote: "Programming is like kicking yourself in the face, sooner or later your nose will bleed.",
		artist: "-Kyle Woodbury"
	},		
	{
		quote: "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
		artist: "-Martin Golding"
	},
	{
		quote: "There are two ways of constructing a software design. One way is to make it so simple that there are obviously no deficiencies. And the other way is to make it so complicated that there are no obvious deficiencies.",
		artist: "-C.A.R. Hoare"
	},
	{
		quote: "A computer once beat me at chess, but it was no match for me at kick boxing.",
		artist: "-Emo Philips"
	}
]

randomQuoteGenerator = randomQuotes[Math.floor(Math.random() * randomQuotes.length)];
$("#chosen-quotes").html(randomQuoteGenerator.quote);
$("#chosen-artist").html(randomQuoteGenerator.artist);
$("#chosen-quotes-port").html(randomQuoteGenerator.quote);
$("#chosen-artist-port").html(randomQuoteGenerator.artist);