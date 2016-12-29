# Plant-enarium

K�sz�tette: Hugyecz Petra

###K�vetelm�nyanal�zis
####C�lkit�z�s
A c�lom egy olyan oldal l�trehoz�sa, ami az egyes vir�gok gondoz�s�t, ig�nyeit �rja le. Vend�gk�nt csak n�zni tudom az egyes le�r�sokat. Lehet�s�g lesz regisztr�lni az oldalra. Bejelentkez�s ut�n tudok majd saj�t le�r�sokat is csin�lni, �s tudom �rt�kelni az egyes vir�gokat.

#####Funkcion�lis k�vetelm�nyek
######Vend�gk�nt:
* f�oldalon l�tni a leg�jabb vir�gokat
* a vir�gok k�z�tt szabadon b�ng�szni
* megn�zni az egyes vir�gok le�r�s�t
* vir�got keresni 
* regisztr�lni az oldalra

#####Felhaszn�l�k�nt:
* bejelentkezni az oldalra
* megtekinteni a szem�lyes adataimat
* m�dos�tani a szem�lyes adataimat
* vir�got �rt�kelni
* vir�g le�r�st hozz�adni
* a saj�t le�r�saimat t�r�lni vagy m�dos�tani
* kijelentkezni

#####Nem funkcion�lis k�vetelm�nyek
* gyors, biztons�gos m�k�d�s (jelszavak t�rol�sa) 
* k�nny� �ttekint�s (vir�gok ABC sorrendben �s kateg�ri�k szerint is)
* karbantarthat�s�g

#####Szakter�leti fogalomjegyz�k
* **Bonsai:** Lapos t�lban nevelt fa. mMsters�gesen, m�v�szien alak�tott, form�ra metszett fa.
* **Rovarem�szt� n�v�nyek:** K�znapi nev�n h�sev� n�v�nyek. Olyan n�v�nyek, amelyek csup�n t�panyagaik egy r�sz�t nyerik �llati h�sb�l, s nem az �lethez sz�ks�ges k�miai energi�t. F�k�nt rovarokat �s m�s �zeltl�b�akat ejtenek csapd�ba. 
* **�vel� n�v�nyek:** Azokat a l�gysz�r�akat szoktuk �gy nevezni, amik hossz� ideig �lnek �s term�s�r�s ut�n a f�ld feletti sz�ruk elpusztul, viszont mindig van f�ldbeli sz�ruk (hagyma, gum�), vagy vastag gy�ker�k, ami �ttelel.
* **Pozsg�sok:** Olyan n�v�nyek, amelyek sz�razs�gt�r�ek, vagyis nem v�zig�nyesek. Ide tartoznak a kaktuszok �s sok sivatagi n�v�ny is. 
* **Balkonn�v�nyek:** Meghat�rozott mennyis�g� f�ldben, �ltal�ban erk�lyeken vagy teraszonok tartott egy�ves n�v�nyek.

##Haszn�lati esetek
####Haszn�latieset-modell
![](docs/usecase.jpg)

####Haszn�latiesetek r�szletes folyamatai
Vegy�k p�ld�nak a regisztr�ci�t:
* felhaszn�l� meg�rkezik a f�oldalra
* f�oldalon kiv�lasztja a Regisztr�ci� gombot
* megadja a k�rt adatokat
* ha azok megfelelnek a szab�lyoknak, akkor k�sz a regisztr�ci�, ha nem, akkor az oldal kijelzi a hib�kat �s �jra k�ri az adatokat
![](docs/reg.jpg)

####Adatb�zisterv
![](docs/adatbazis.jpg)


###V�gpontok
####PlantController
* GET/: f�oldal
* GET/plant/az: vir�gok A-Z
* GET/plant/category: vir�gok kateg�ri�k szerint
* GET/plant/create: �j vir�g l�trehoz�sa
* POST/plant/create: �j vir�g l�trehoz�si adatainak felk�ld�se
* GET/:id/plantEdit: vir�g szerkeszt�se
* POST/:id/plantEdit: vir�g szerkeszt�si adatainak felk�ld�se
* GET/plant/search: vir�g keres�se
* POST/plant/search: vir�g keres�s�si adatok felk�ld�se
* GET/:id/delete: vir�g t�rl�se
* GET/plant/:id: vir�g adatok
* GET/:id/createReview: �j v�lem�ny �r�sa
* POST/:id/createReview: �j v�lem�ny adatainak felk�ld�se

####UserController
* GET/register: regisztr�ci�s oldal
* POST/register: regisztr�ci� adatainak felk�ld�se
* GET/login: bejelentkez�s oldal
* POST/login: bejelentkez�s adatainak felk�ld�se
* GET/logout: kijelentkez�s
* GET/user/:id: saj�t profil oldal
* GET/:id/userEdit: saj�t adatok szerkeszt�se oldal
* POST/:id/userEdit: �j saj�t adatok felk�ld�se
* GET/:id/myList: saj�t vir�gok oldal

####Egy�b
* GET/*: visszair�ny�t�s a f�oldalra

####Oldalv�zlatok

**F�oldal**
![](docs/vazlatok/Fooldal.jpg)

**Vir�gok kateg�ri�k szerint**
![](docs/vazlatok/Viragok_kategoriak_szerint.jpg)

**Keres�s**
![](docs/vazlatok/Kereses.jpg)

**Regisztr�ci�**
![](docs/vazlatok/Regisztracio.jpg)

**Bejelentkez�s**
![](docs/vazlatok/Bejelentkezes.jpg)

**Saj�t vir�gaim**
![](docs/vazlatok/Sajat_viragjaim.jpg)

**Vir�g le�r�sa**
![](docs/vazlatok/Virag.jpg)

**�j vir�g l�trehoz�sa**
![](docs/vazlatok/Uj_virag_letrehozasa.jpg)

####V�gs� megval�s�t�s kin�zete

**F�oldal**
![](docs/vegleges/fooldal.jpg)

**Vir�gok kateg�ri�k szerint**
![](docs/vegleges/kategoriak.jpg)

**�j vir�g l�trehoz�sa**
![](docs/vegleges/ujvirag.jpg)

**Vir�g le�r�s**
![](docs/vegleges/virag.jpg)

####Fontos megjegyz�s
A k�p felt�lt�se csak �gy m�k�dik, ha az a k�p, amit fel szeretn�nk t�lteni, a public/picture mapp�ban van

## 3. beadand� kieg�sz�t�s
###Funkci�kban �rintett f�jlok:
* scripts:
	- categories.js
	- delete.js
	- popup_login.js
	- short_name.js
* controllers:
	- UserController
	- PlantController
* routes.js
* resources


###Funkci�k folyamat�nak le�r�sa
* categories.js:
	- a kateg�ria n�zetn�l (categoryView) megjelennek a kateg�ri�k nevei k�l�n felsorolva
* delete.js: 
	- b�rmely n�v�ny t�rl�sekor felugrik egy �j ki ablak, meger�s�t�st k�r, hogy biztosan t�r�lni 	szeretn�nk-e az adott n�v�nyt
	- ha igen, akkor a PlantController ajaxDelete met�dusa megkapja az adatokat (ajax/id/delete-	n kereszt�l) �s t�rli az adott id-j� n�v�nyt
	- ezut�n visszat�r�nk a f�oldalra
* popup_login.js:
	- a Bejelentkez�s gombra kattintva felugrik egy �j kis ablak, ahol az adatok be�r�s�val 	tudunk bejelentkezni
	- a UserController-beli ajaxLogin met�dus megkapja a be�rt adatokat (ajax/login -on 	kereszt�l), �s leellen�rzi
	- ha nem helyesek, akkor hib�t kapunk
	- ha j�k az adatok, akkor megt�rt�nik a bejelentkez�s
* short_name.js:
	- A-Z n�zetben �s a f�oldalon k�l�n k�k kerettel vannak jelezve a 15 bet�n�l n�videbb nev� 	vir�gok
* resources f�jlokban:
	- azokon az oldalakon, ahol k�telez�en sz�veget kell be�rni (Vir�g szerkeszt�se, 	Regisztr�ci�, Saj�t adatok szerkeszt�se, �j vir�g felv�tele) bootstrap-validator ellen�rzi, 	hogy megvannak-e adva a k�telez� mez�k

##Szekvenciadiagramm
Vegy�k p�ld�na a regisztr�ci�t, bejelentkez�st, f�oldalr�l �j vir�g l�trehoz�s�t, majd annak t�rl�s�t
![](docs/szekvencia.jpg)


 ###Tesztek
* a tesztekhez Selenium IDE telep�t�se sz�ks�ges
* tesztek lefuttat�sa el�tt be kell jelentkezni az oldalra
* aj�nlott sorrend:
	- sajat_profil_szerkesztese (ez �t�ll�tja a jelsz�t is, �j jelsz�: 11111)
	- noveny_kereses
	- velemenyek_irasa
	- uj_virag_felvetele
	- noveny_torlese

####Fontos megjegyz�s
Ha kikapcsoljuk a Javascriptet, akkor nem m�k�dik az Egy�b lehet�s�gekn�l a leny�l� men� sem. Ezt nem tudtam m�shogy megoldani, �gy volt benne a bootswatch-os sablonban. 