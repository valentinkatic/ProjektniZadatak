
var quotations = new Array()
    quotations[0]= "'Pivo je dokaz da nas Bog voli', izjavio je Benjamin Franklin, jedan od utemeljitelja Sjedinjenih Američkih Država."
    quotations[1]= "Zitologija je znanost o pivu, njegovoj proizvodnji, kao i o tome koju ulogu pojedini sastojci piva imaju u proizvodnji. Već smo napomenuli da postoje instituti u SAD-u i Njemačkoj na kojima se izučavaju pivo i njegove osobitosti."
    quotations[2]= "Od otprilike 3000. godine prije Krista datira najstariji pisani zapis o proizvodnji piva. Napisan je na kamenoj ploči i to u obliku pjesme."
	quotations[3]= "Najstarija pak reklama za pivo stara je oko 6000 godina, a zanimljivo da ima velike sličnosti s današnjim osobito onima u Bavarskoj. Naime reklama prikazuje ženu bujnih grudi, koja drži dva pehara i tvrdi: 'Pijte Ebla pivo - pivo sa srcem lava'."
	quotations[4]= "Prvi profesionalni proizvođači piva bile su žene."
	quotations[5]= "Hmelj je jedan od četiri osnovna sastojka piva, a zanimljivo da dolazi iz iste porodice biljaka kao i marihuana."
	quotations[6]= "Prvi nesavjesni pijani vozač zabilježen je još u staroegipatskoj mitologiji. Mit govori o kočijašu koji je pod utjecajem alkohola pregazio služavku boginje Hator, pa je nakon toga prikovan za vrata pivnice gdje se opio."
	quotations[7]= "Britanski pivari odlučili su Indijcima prodati pivo, ali se tijekom transporta ono kvarilo. Stoga su u putu Britanci usipali dodatan alkohol koji pomaže očuvanju kakvoće iz čega je nastalo posebno Indijsko svijetlo pivo."
	quotations[8]= "Više od 400 vrsta piva postoji, a najviše registriranih marki ima Belgija."
	quotations[9]= "Cenosilikofobija je strah od prazne pivske čaše!"
	quotations[10]= "Najskuplje pivo je 'Vielle Bon Secours'. Jedna boca ovog piva košta 1000 dolara, a moguće ju je kupiti samo u Birdromeu u Londonu."
	quotations[11]= "Kotač, plug i sustav za navodnjavanje izumljeni su kako bi mogla porasti proizvodnja piva."
	quotations[12]= "U vrijeme starih Inka, djevojčice od osam do deset godina žvakale su kukuruz i pljuvale ga u velike kotlove pune tople vode, od čega bi u par tjedana nastalo pivo."
	quotations[13]= "Najstarija tvornica piva 'Bayerische Staatbraueire Weihenstephan' pokraj Münchena, osnovana je 1040. godine."
	quotations[14]= "U pivu se nalaze svi minerali potrebni za preživljavanje. U srednjem vijeku čak su i djeca pila pivo, kako bi preživjela glad."
	quotations[15]= "Istraživanje koje je objavljeno u časopisu 'New England Journal of Medicine' pokazuje da umjerene količine piva podižu razinu dobrog (HDL) kolesterola, smanjuju rizik od srčanih bolesti te pospješuju spoznajne sposobnosti."
	quotations[16]= "U drugom pak istraživanju objavljenom u magazinu 'American Journal of Epidemiology' utvrđeno je da jedna boca piva na dan smanjuje mogućnost nastanka bubrežnog kamenca za 40 posto. "
	quotations[17]= "Studije su pokazale i da pivo štiti kosti te poboljšava apsorpciju kalcija."
	quotations[18]= "Proizvodnja piva smatrana je nekada vrlo bitnim i časnim poslom za žene. Primjerice u Peruu, samo su najljepše i najutjecajnije žene mogle raditi ovaj posao."
	quotations[19]= "U 19. stoljeću neke dojilje su pile sedam krigli piva dnevno, jer se vjerovalo kako je to dobro za mlijeko."
	quotations[20]= "U starom Egiptu postojao je zakon koji je branio muškarcima proizvodnju i prodaju piva."
	quotations[21]= "Babilonski kralj Hamurabi naredio je da svaki građanin mora dnevno popiti određenu količinu piva, ovisno o svome socijalnom statusu. Također je rekao da žene mogu biti utopljene, ako posluže loše pivo."
	quotations[22]= "Najviše piva po glavi stanovnika popije se u Češkoj. U Kini se, što nije iznenađujuće, popije najveća ukupna količina piva na svijetu, a za protekle dvije godine iznosila je 350 hektolitara."
	quotations[23]= "Prve limenke piva proizvedene su 1935. godine, jer je praktičnije bilo ponijeti pivo u ovoj ambalaži."
	
function display()
{
a=Math.floor(Math.random()*quotations.length)
document.getElementById('cinjenice').innerHTML=quotations[a]
setTimeout("display()",4500)
}
