function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
var fs = require('fs')
var data = [
    {
        "src" : "1"
    },
    {
        "src" : "2"
    },
    {
        "src" : "3"
    },
    {
        "src" : "https://cdn.discordapp.com/attachments/585068275021512706/680500245532115129/P1480597.jpg",
        type : "link"
    },
    {
        "src" : "5"
    },
    {
        "src" : "6",
        noThumbs : true
    },
    {
        "src" : "7",
        noThumbs : true
    },
    {
        "src" : "8"
    },
    {
        "src" : "9",
        noThumbs : true
    },
    {
        "src" : "10"
    },
    {
        "src" : "11"
    },
    {
        "src" : "4"
    },
    {
        "src" : "https://cdn.discordapp.com/attachments/585068275021512706/621906545877450773/1209-2019-111357168165735984096.png",
        type : "link"
    },
    {
        "src" : "https://cdn.discordapp.com/attachments/585068275021512706/680500527162851462/P1480625.jpg",
        type : "link"
    }, 
    {
        "src" : "https://cdn.discordapp.com/attachments/585068275021512706/680502968847564847/P1480653.jpg",
        type : "link"
    },
    {
        "src" : "P1410836"
    },
    {
        "src" : "P1360224",
        noThumbs : true
    },
    {
        "src" : "P1020030"
    }
]
shuffle(data)
console.log(data)
var output = `
<!DOCTYPE HTML>
<!--
	Multiverse by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3. license (html5up.net/license)
-->
<html>
	<head>
		<title>CryogenicPlanet - Photography</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
		<link rel="stylesheet" href="assets/css/main.css" />
		<noscript><link rel="stylesheet" href="assets/css/noscript.css" /></noscript>
	</head>
	<body class="is-preload">

		<!-- Wrapper -->
			<div id="wrapper">

				<!-- Header -->
					<header id="header">
						<h1><a href="index.html"><strong>Photography</strong> by <a href="https://cryogenicplanet.tech/" target="_blank" rel="noopener noreferrer">Rahul Tarak</a></a></h1>
						<nav>
                            <ul>
                                <li><a href="https://cryogenicplanet.tech" target="_blank" rel="noopener noreferrer" class="icon solid fa-home">Home</a></li>
								<li><a href="#footer" class="icon solid fa-info-circle">About</a></li>
							</ul>
						</nav>
                    </header>
                    
                    <div id="main">

`
for(var photo of data){
    output = output + `
    <article class="thumb">
    ${photo.type != "link" ?`
    <a href="images/fulls/${photo.src}${photo.type != null? "" : ".jpg"}" class="image"><img src=${photo.noThumbs ? `images/fulls/${photo.src}${photo.type != null? "" : ".jpg"}` : `images/thumbs/${photo.src}${photo.type != null? "" : ".jpg"}`} alt="" /></a>
    `: `<a href="${photo.src}${photo.type != null? "" : ".jpg"}" class="image"><img src="${photo.src}${photo.type != null? "" : ".jpg"}" alt="" /></a>
`}
    <!-- <h2>${photo.title ? photo.title : null}</h2> -->
    <!--<p>${photo.description ? photo.description : null}</p> -->
    </article>`
}
output = output + `</div>

<!-- Footer -->
    <footer id="footer" class="panel">
        <div class="inner split">
            <div>
                <section>
                    <h2>Hi, I'm Rahul Tarak</h2>
                    <p>I'm a Amatuer Photographer, Filmmaker. This is to highlight some of my work in its maximum resolution.</p>
                    <p>Gear : Lumix G7</p>
                    <h5>Toronto,Canada - Bangalore,India</h5>
                </section>
                <section>
                    <h2>Follow me on ...</h2>
                    <ul class="icons">
                        <!-- <li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li> -->
                        <li><a href="https://www.youtube.com/channel/UC49yeT9WnpVdIdmo4ZYUteQ" class="icon brands fa-youtube" target="_blank" rel="noopener noreferrer"><span class="label">Youtube</span></a></li>
                        <li><a href="https://www.instagram.com/cryogenicplanet/" class="icon brands fa-instagram" target="_blank" rel="noopener noreferrer"><span class="label">Instagram</span></a></li>
                        <li><a href="https://github.com/CryogenicPlanet" class="icon brands fa-github" target="_blank" rel="noopener noreferrer"><span class="label">GitHub</span></a></li>
                        <li><a href="https://www.linkedin.com/in/rahul-tarak/" class="icon brands fa-linkedin-in" target="_blank" rel="noopener noreferrer"><span class="label">LinkedIn</span></a></li>
                    </ul>
                </section>
                <p class="copyright">
                    &copy; CryogenicPlanet. Design: <a href="http://html5up.net">HTML5 UP</a>.
                </p>
            </div>
            <div>
                <section>
                    <h2>Get in touch</h2>
                    <form name="Photography" method="post" data-netlify="true" netlify-honeypot="bot-field" data-netlify-recaptcha="true">
                        <div class="fields">
                            <div class="field half">
                                <input type="text" name="name" id="name" placeholder="Name" />
                            </div>
                            <div class="field half">
                                <input type="text" name="email" id="email" placeholder="Email" />
                            </div>
                            <div class="field">
                                <textarea name="message" id="message" rows="4" placeholder="Message"></textarea>
                            </div>
                        </div>
                        <div data-netlify-recaptcha="true"></div>
                        <ul class="actions">
                            <li><input type="submit" value="Send" class="primary" /></li>
                            <li><input type="reset" value="Reset" /></li>
                        </ul>
                    </form>
                </section>
            </div>
        </div>
    </footer>

</div>

<!-- Scripts -->
<script src="assets/js/jquery.min.js"></script>
<script src="assets/js/jquery.poptrox.min.js"></script>
<script src="assets/js/browser.min.js"></script>
<script src="assets/js/breakpoints.min.js"></script>
<script src="assets/js/util.js"></script>
<script src="assets/js/main.js"></script>

</body>
</html>`
//console.log(output)
fs.writeFileSync('./index.html',output,function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
