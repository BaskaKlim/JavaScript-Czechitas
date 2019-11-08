/*
Dole v kódu máš připravené pole jmen.
V HTML je vyhledávací políčko <input id="jmeno"> a tlačítko Hledat.
Zároveň je tam prázdná značka <ul id="seznam"></ul>

Tvým úkolem je:
===============

1) Napsat funkci zobrazSeznam(), která projde v cyklu celé pole a z každého jména
vytvoří HTML kód v tomto formátu: <li>Jana</li>
Tento text pak přidáš do HTML obsahu uvnitř našeho seznamu.
Použij vlastnost innerHTML seznamu, ke které postupně přidávej text
jednotlivých položek seznamu.

(Lepší, ryhlejší a k prohlížeči ohleduplnější varianta je nepřidávat
položky postupně, ale vygenerovat si nejprve obsah všech položek do
proměnné a teprve potom přidat obsah této proměnné do innerHTML seznamu
v jednom kroku.)

Při procházení pole si vzpomeň, že první položka má index 0 a že délku
pole můžeš zjistit pomocí jmena.length.

Tuto funkci zavolej hned při otevření stránky, abys pod hledacím políčkem
viděla seznam jmen.


2) Při kliknutí na tlačítko zjisti, co je v hledacím políčku a zvýrazni
příslušné jméno v seznamu.

Jak to uděláš? Uprav funkci pro výpis jmen tak, aby při generování položek
seznamu porovnala hledací políčko s aktuálním jménem v poli. Pokud souhlasí,
přidej do seznamu jméno v následujícím formátu:
<li class="vybrana">Jana</li>

Tzn. od nevybrané položky se liší pouze přidanou CSS třídou. Výsledný seznam
by měl vypadat zhruba takto:
<ul id="seznam">
	<li>Jana</li>
	<li class="vybrana">Petra</li>
	<li>Markéta</li>
</ul>

Stále jen procházíš pole a přidáváš do HTML postupně položky seznamu. Jen pokud
je jméno stejné jako hledané jméno, přidáš do HTML položky včetně CSS třídy,
jinak tam přidáš původní <li> bez CSS třídy.

Hodnotu z vyhledávacího políčka můžeš získat pomocí vlastnosti .value, takto:
let jmeno = document.querySelector('#jmeno)';
let hledaneJmeno = jmeno.value;

Takto upravenou funkci nezapomeň znovu zavolat pří kliknutí na tlačítko Hledat.



BONUS PRO ŠPRTKY se spoustou volného času:
==========================================

Udělej interaktivní hledání, která zvýrazňuje odpovídající jména ihned při
psaní do hledacího políčka. Takže když začnu psát "D", okamžitě se zvýrazní
Diana a Denisa.

Tj. funkci budeš muset volat při události 'keyup' na hledacím políčku,
ne až po kliknutí na tlačítko Hledat.

Musíš funkci upravit, aby neporovnávala, zda se rovnají celá jména, ale pouze zda
jméno začíná na hledaný text.

Podívej se třeba sem:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith

Najdeš tam seznam metod, které JavaScript nabízí pro práci s textovými řetězci.
Pravděpodobně tam najdeš i něco, co ti s porovnáváním jmen pomůže.



EXTRA BONUS PRO VELKÝ ŠPRTKY:
============================

Uprav kód tak, aby se při nenalezení jména zobrazila pod hledacím políčkem zpráva,
že jméno nebylo nalezeno. Budeš muset přidat něco málo do HTML, CSS a samozřejmě
JavaScriptu.


P.S.: I šprtky se mohou ptát na Facebooku, když nebudou vědět!
Jakože FAKT. Ptej se na cokoliv. Prosím...
*/


let jmena = ['Markéta','Kateřina','Júlia','Lucie','Aneta','Veronika','Petra','Olga','Naďa','Nikola','Eva','Anísa',
	'Terezia','Diana','Anna','Iva','Denisa','Zuzana','Jana','Martina','Lenka','Iveta','Pavla','Lucie','Kamila',
	'Soňa'];

// vyberam si elementy z html, s ktorymi budem v js pracovat
let zoznamMien = document.querySelector("#seznam");
let hladaneMeno = document.querySelector('#jmeno');
let errorHlaska = document.querySelector("#err");
let buttonHledat = document.querySelector("#btn");

function zobrazSeznam() {
	//vytvaram si pole list do ktoreho vlozim neskor mena v tvare html zoznamu a overovanie jeToMoznost, ci take meno v poly jmena mam (vychodiskova hodnota nastavena na 0 akoze false, nemam ju v poly)
	let list = '';
	let jeToMoznost = 0;
	
	
	/* vytvaram si cyklus, ktory mi prejde cez vsetky indexy (a ich hodnoty) v poli 
	pridavam danym polozkam v poli class cez podmienky - ak sa jeho value nachadza v liste,
	pridam classu vybrana, ak nie, ponecham ho iba ako polozku zoznamu 
	*/
	for (let i=0; i<jmena.length; i++) {	

		if (jmena[i].startsWith(hladaneMeno.value)&&hladaneMeno.value!=='') {
			let vybraneMeno = '<li class="vybrana">'+jmena[i]+'</li>';	
			list = list + vybraneMeno;
			jeToMoznost = jeToMoznost + 1;
		} else {
			let listItem = "<li>"+jmena[i]+"</li>";	
			list = list + listItem;
			jeToMoznost = jeToMoznost + 0;
		};
	};

	// erorova hlaska ktora mi zmazava a pridava mnou pridanu classu hidden na novom elemente err v html, 
	if (jeToMoznost === 0 && hladaneMeno.value!=='') {	
		errorHlaska.classList.remove("hidden");
	} else {
		errorHlaska.classList.add("hidden");	
	};

	// zobrazi sa mi zoznamMien obsahujuci moj list 
	zoznamMien = document.querySelector("#seznam").innerHTML = list;
	return zoznamMien;
};

zobrazSeznam();
// pripinam na input, ktory zadam do fieldu eventlistener ktory nacitava pismena
hladaneMeno.addEventListener("keyup", zobrazSeznam);


/*Toto bolo v zadani,  ale funguje to aj bez pridavania :Takto upravenou funkci nezapomeň znovu zavolat pří kliknutí na tlačítko Hledat.
ale kedze som handler dala nakoiec na input co ide do fieldu nebolo treba davat aj na button a tento nizsie som teda nepouzila
buttonHledat.addEventListener("click", zobrazSeznam)*/
