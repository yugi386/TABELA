/*
EFEITO ACORDEON JAVASCRIPT
Yugi: 03/07/2012
*/
// ============================================================
window.onload = function () {
	// acessando os elementos...
	conteudo = document.getElementById("content");   
	pgf = conteudo.getElementsByTagName("p");
	assuntos = conteudo.getElementsByTagName("h2");
	
	// efeito onclick:
	assuntos[0].onclick = function() { init(0);};
	assuntos[1].onclick = function() { init(1);};
	assuntos[2].onclick = function() { init(2);};
	
	init(0);
}
// ============================================================
function init(pagShow) {
	for (var ct=0; ct<pgf.length; ct++) {
		pgf[ct].style.display = "none";
	}
	pgf[pagShow].style.display = "inline";	
}