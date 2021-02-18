import{Movie} from './movies';
import {Professional} from './claseProfessional';
import {IMDB} from './claseIMDB'

//Create objects Professional:
let tarantino:Professional = new Professional("Quentin Tarantino",54,"male",80,184,"Black","Brown","Caucasian",false,"Us citizen",2,"Director")
let georgeLucas:Professional = new Professional("George Lucas",75,"male",90,184,"Black","Brown","Caucasian",true,"Us citizen",1,"Director")
let jonFavreau:Professional = new Professional("Jon Favreau",54,"male",80,184,"Black","Brown","Caucasian",false,"Us citizen",2,"Director")
let stanLee:Professional = new Professional("Stan Lee",95,"male",73,180,"White","Blue","Caucasian",false,"Us citizen",1,"screenwriter")
let robertDowney:Professional = new Professional("Robert Downey Jr",55,"male",74,175,"dark blonde","grey","Caucasian",true,"Us citizen",2,"Actor")
let carrieFisher:Professional = new Professional("Carrie Fisher",60,"female",74,156,"blonde","brown","Caucasian",false,"Us citizen",2,"Actress")
let harrisonFord:Professional = new Professional("Harrison Ford",78,"male",90,180,"white","brown","caucasian",false,"Us citizen",0,"actor")
let umaThurman:Professional = new Professional("Uma Thurman", 50, "female",60,183,"blonde","blue","caucasian",false,"Us citizen",0,"actress")
let dicaprio:Professional = new Professional("Leo Dicaprio",46,"male",80,183,"blonde","blue","caucasian",false,"us citizen",0,"actor")
let bradPitt:Professional = new Professional("Brad Pitt",57,"male",78,180,"blonde", "blue","Caucasian",true,"Us citizen",2,"actor")
let penelopeCruz:Professional = new Professional("Penelope Cruz",46,"female",55,165,"brunette","brown","Causian",true,"Spanish",1,"actress")
let eduardoNoriega:Professional = new Professional("Eduardo Noruega",47,"male",75,179,"brunet","brown","caucasian",false,"spanish",0,"actor")
let alejandroAmenabar:Professional = new Professional("Alejandro Amenabar",48,"male",65,180,"brown","black","latin",true,"spanish",1,"director")
let mateoGil:Professional = new Professional('Mateo Gil', 48, 'male',90,178,'brown','brown','Caucasian',false,'Spanish',0,'screenwriter')

//Test Professional methods:
jonFavreau.getPrint();

//Create objects Movie:
let ironMan:Movie=new Movie('Iron Man',2008,'American','action')
let starWars1:Movie=new Movie('A New Hope',1977,'American','Sci-Fi')
let hollywood:Movie=new Movie('Once Upon a Time in Hollywood',2019,'American', 'comedy-drama')
let abreOjos:Movie=new Movie('Abre los Ojos', 1997, 'Spanish', 'Sci-Fi')

//Fill in movies:
ironMan.actors=[robertDowney,jonFavreau]
ironMan.director=jonFavreau;
ironMan.writer=stanLee;
ironMan.language='English';
ironMan.platform='Netflix';
ironMan.isMCU=true;
ironMan.mainCharacterName='Tony Stark';
ironMan.producer='Marvel Studios';
ironMan.distributor='Paramount Picturtes';

starWars1.actors=[carrieFisher,harrisonFord];
starWars1.director=georgeLucas;
starWars1.writer=georgeLucas;
starWars1.language='English';
starWars1.platform='Disney+'
starWars1.isMCU=false;
starWars1.mainCharacterName='Luke Skywalker'
starWars1.producer= 'Lucasfilm Ltd'
starWars1.distributor='20th Century fox'

hollywood.actors=[bradPitt, dicaprio]
hollywood.director=tarantino;
hollywood.writer=tarantino;
hollywood.language='English';
hollywood.platform='Netflix';
hollywood.isMCU=false;
hollywood.mainCharacterName='Rick Dalton';
hollywood.producer='Columbia Pictures';
hollywood.distributor='Sony Picturtes';

abreOjos.actors=[penelopeCruz,eduardoNoriega]
abreOjos.director=alejandroAmenabar;
abreOjos.writer=mateoGil;
abreOjos.language='Spanish';
abreOjos.platform='Netflix';
abreOjos.isMCU=false;
abreOjos.mainCharacterName='César';
abreOjos.producer='Sogecine';
abreOjos.distributor='Artisan Entertainment';

//Test Movie methods:
abreOjos.print()



//Create object IMDB

let bdPeliculas:IMDB = new IMDB([ironMan,starWars1,hollywood,abreOjos])
//console.log(bdPeliculas);
 

let imdbBBDD = JSON.stringify(bdPeliculas)

const fs = require('fs');
fs.writeFileSync('imdbBBDD.json',imdbBBDD)

let instanciIMDB:IMDB = JSON.parse(fs.readFileSync('imdbBBDD.json'))

//console.log(instanciIMDB)




//Probar métodos de clase IMDB

bdPeliculas.escribirEnFicheroJSON('bdPeliculas.json')

console.log(bdPeliculas.obtenerInstanciaIMDB('bdPeliculas.json'))


