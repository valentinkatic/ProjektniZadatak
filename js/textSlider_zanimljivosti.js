
var quotations = new Array()
    quotations[0]= "Iz Hamurabijevog zakonika: 'Ako ne naplaćuje gostu žitom, nego traži novac, vara li na težini ili toči loše piće, treba biti pozvana na odgovornost i bačena u vodu. U pivnici žena može biti točiteljica, ali u pivnicu ne smije doći kao gošća. Žena koja ide u gostionicu piti, ima biti spaljena.'"
    quotations[1]= "Iz Hamurabijevog zakonika: 'Pivo ne smije sadržavati previše vode i ne smije se prodavati po previsokoj cijeni.'"
    quotations[2]= "Iz Hamurabijevog zakonika: 'Tračani, koji su naselili dio teritorija današnje Bugarske, smatraju se prvim ”europskim” proizvođačima piva. Prema povjesničaru Helaniku, još u 5. st. p.n.e., Tračani su konzumirali pivo od raži, a tračanski je bog Dioniz štovan kao ”Bog piva”.'"
	quotations[3]= "Finci vjeruju da su pravo pivo izmislile tri žene: Osmotor, Kapo i Kalevatar. Pripremajući svadbu, dodale su pivu slinu medvjeda i divlji med te je nastao pravi “ale”."
	quotations[4]= "Redovnici su bili prvi koji su pivu pridodali hmelj – iz “medicinskih” razloga, a i radi boljeg konzerviranja. Ono je proglašeno kršćanskim ljekovitim napitkom”, što ga je trebalo uključiti u samostansku prehranu, a smjelo se piti i u dane posta."
	quotations[5]= "Najpoznatiji zakon o čistoći piva je Deutsche Reinheitsgebot, iz 1516. godine, koji je uklopljen i u današnje njemačke zakone, i prema njemu se pivo smije proizvoditi samo od ječma, hmelja i vode."
	quotations[6]= "Povjesničarka Jane Payton provela je opsežno istraživanje koje je pokazalo da su muškarci pivovarama i pivnicama počeli dominirati tek prije 200-tinjak godina, čime se još jednom potvrdilo da su ga izmislile žene. Međutim, krajem 18. štoljeća, pojavom industrijske revolucije, nov način proizvodnje piva umanjuje ulogu žena, a muškarci preuzimaju primat."
	quotations[7]= "Kada je 1774. James Watt patentirao parni stroj sve su vodeće pivovare u Londonu ubrzo objeručke prihvatile novo mehaničko doba.  Ubrzo su se počele uvoditi i druge znanstvene novotarije (termometri, hidrometri, regulatori temperature, mehaničke miješalice i slično) pa je i industrijska revolucija pivarstvo iz pretežito kućnog obrta pretvarala u veliku industriju. U tom se kontekstu povijest piva dijeli na onu prije i nakon industrijalizacije."
	quotations[8]= "U Hrvatskoj je, točnije u Zagrebu, prva obrtnička pivovara otvorena 1721. godine."

	
function display()
{
a=Math.floor(Math.random()*quotations.length)
document.getElementById('cinjenice').innerHTML=quotations[a]
setTimeout("display()",10000)
}
