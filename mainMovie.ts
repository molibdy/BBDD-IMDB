import{Movie} from './movies';
import {Professional} from './claseProfessional';

let ironMan:Movie=new Movie('Iron Man',2008,'American','action')
let starWars1:Movie=new Movie('A New Hope',1977,'American','Sci-Fi')
let hollywood:Movie=new Movie('Once Upon a Time in Hollywood',2019,'American', 'comedy-drama')
let abreOjos:Movie=new Movie('Abre los Ojos', 1997, 'Spanish', 'Sci-Fi')

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
hollywood.director=quentinTarantino;





