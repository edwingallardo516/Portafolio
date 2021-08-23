function cambiarIdioma(elemento)
{
    // Titulo
    var es_title = 'Desarrollador Web Full Stack';
    var en_title = 'Full Stack Web Developer';

	// Barra de Navegación	
    var es_nav=['Habilidades','Portafolio','Contacto'];
	var en_nav=['Skills','Portfolio','Contact'];

    // Portafolio-Cards
    var es_title_cards=['Server Login','Plataforma e-learning','Biblioteca Digital','Portafolio','Modelado Matemático','Visión artificial','Análisis de datos'];
    var en_title_cards=['Server Login','Platform e-learning','Digital Library','Portfolio','Mathematical modeling','Artificial vision','Analysis of data'];
    var es_p_cards=['Desarrollo Node.js y mongoDB','Desarrollo con PHP y Laravel 8','Desarrollo con Node.js, mongoDB y GraphQL','Desarrollo con HTML ,CSS Y JavaScript','Matemática simbólica con Python','Desarrollo con Python y OpenCV','Desarrollo con Python y Pandas'];
    var en_p_cards=['Development with Node.js y mongoDB','Development with PHP and Laravel 8','Development with Node.js, mongoDB y GraphQL','Development with HTML, CSS Y JavaScript','Symbolic math with Python','Development with Python and OpenCV','Development with Python and Pandas'];
    var es_code = 'Ver código';
    var en_code = 'View code';

    //Contacto
    var es_form = ['Nombre:','Correo electrónico', 'Mensaje'];
    var en_form = ['Name:','Email:','Message'];

	if(elemento == 'en'){
        // Traducir titulo
        document.getElementById("title").innerHTML = en_title;

        // Traducir Nav-bar
        document.getElementById("nav0").innerHTML = en_nav[0];
        document.getElementById("nav1").innerHTML = en_nav[1];
        document.getElementById("nav2").innerHTML = en_nav[2];

        // Traducir Secciones
        document.getElementById("sec0").innerHTML = en_nav[0];
        document.getElementById("sec1").innerHTML = en_nav[1];
        document.getElementById("sec2").innerHTML = en_nav[2];

        // Traducir Portafolio
        document.getElementById("title-card0").innerHTML = en_title_cards[0];
        document.getElementById("title-card1").innerHTML = en_title_cards[1];
        document.getElementById("title-card2").innerHTML = en_title_cards[2];
        document.getElementById("title-card3").innerHTML = en_title_cards[3];
        document.getElementById("title-card4").innerHTML = en_title_cards[4];
        document.getElementById("title-card5").innerHTML = en_title_cards[5];
        document.getElementById("title-card6").innerHTML = en_title_cards[6];
        console.log(en_p_cards)
        document.getElementById("p-card0").innerHTML = en_p_cards[0];
        document.getElementById("p-card1").innerHTML = en_p_cards[1];
        document.getElementById("p-card2").innerHTML = en_p_cards[2];
        document.getElementById("p-card3").innerHTML = en_p_cards[3];
        document.getElementById("p-card4").innerHTML = en_p_cards[4];
        document.getElementById("p-card5").innerHTML = en_p_cards[5];
        document.getElementById("p-card6").innerHTML = en_p_cards[6];
        document.getElementById("vw-code1").innerHTML = en_code;
        document.getElementById("vw-code2").innerHTML = en_code;

        // Traducir Contacto
        document.getElementById("write").innerHTML = 'Write me';
        document.getElementById("form0").innerHTML = en_form[0];
        document.getElementById("form1").innerHTML = en_form[1];
        document.getElementById("form2").innerHTML = en_form[2];
        document.getElementById("submit").innerHTML = 'Send';
        document.getElementById("info").innerHTML = 'More information';
        document.getElementById("down").innerHTML = 'Download CV';
    }

	if(elemento == 'es'){ 
        // Traducir titulo
        document.getElementById("title").innerHTML = es_title;

        // Traducir Nav-bar
        document.getElementById("nav0").innerHTML = es_nav[0];
        document.getElementById("nav1").innerHTML = es_nav[1];
        document.getElementById("nav2").innerHTML = es_nav[2];

        // Traducir Secciones
        document.getElementById("sec0").innerHTML = es_nav[0];
        document.getElementById("sec1").innerHTML = es_nav[1];
        document.getElementById("sec2").innerHTML = es_nav[2];

        // Traducir Portafolio
        document.getElementById("title-card0").innerHTML = es_title_cards[0];
        document.getElementById("title-card1").innerHTML = es_title_cards[1];
        document.getElementById("title-card2").innerHTML = es_title_cards[2];
        document.getElementById("title-card3").innerHTML = es_title_cards[3];
        document.getElementById("title-card4").innerHTML = es_title_cards[4];
        document.getElementById("title-card5").innerHTML = es_title_cards[5];
        document.getElementById("title-card6").innerHTML = es_title_cards[6];
        document.getElementById("p-card0").innerHTML = es_p_cards[0];
        document.getElementById("p-card1").innerHTML = es_p_cards[1];
        document.getElementById("p-card2").innerHTML = es_p_cards[2];
        document.getElementById("p-card3").innerHTML = es_p_cards[3];
        document.getElementById("p-card4").innerHTML = es_p_cards[4];
        document.getElementById("p-card5").innerHTML = es_p_cards[5];
        document.getElementById("p-card6").innerHTML = es_p_cards[6];
        document.getElementById("vw-code1").innerHTML = es_code;
        document.getElementById("vw-code2").innerHTML = es_code;

        // Traducir Contacto
        document.getElementById("write").innerHTML = 'Escríbeme';
        document.getElementById("form0").innerHTML = es_form[0];
        document.getElementById("form1").innerHTML = es_form[1];
        document.getElementById("form2").innerHTML = es_form[2];
        document.getElementById("submit").innerHTML = 'Enviar';
        document.getElementById("info").innerHTML = 'Más información';
        document.getElementById("down").innerHTML = 'Descargar CV';
	}
}