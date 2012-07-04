/*
ORDENANDO TABELAS COM JAVASCRIPT
Yugi: 04/07/2012
*/
// ============================================================
window.onload = function () {
	// acessando os elementos...
	conteudo = document.getElementById("content");   
	tab = conteudo.getElementsByTagName("table");
	tabRow = tab.getElementsByTagName("tr");
	
	// controle do cabeçalho da tabela:
	c1 = tabRow[0].getElementsByTagName("td")[0];
	c2 = tabRow[0].getElementsByTagName("td")[1];
	c3 = tabRow[0].getElementsByTagName("td")[2];
	c4 = tabRow[0].getElementsByTagName("td")[3];
	
	// efeito onclick:
	c1.onclick = function() {};
	c2.onclick = function() {};
	c3.onclick = function() {};
	c4.onclick = function() {};
	
}
// ============================================================
