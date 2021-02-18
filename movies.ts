
import {Professional} from './claseProfessional'


export class Movie{
    public title:string;
    public releaseYear:number;
    public actors: Professional[];
    public nationality:string;
    public director:Professional;
    public writer:Professional;
    public language:string;
    public platform:string;
    public isMCU:boolean;
    public mainCharacterName:string;
    public producer:string;
    public distributor:string;
    public genre:string;

    constructor(title:string, releaseYear:number, nationality:string, genre:string){
        this.title=title;
        this.releaseYear=releaseYear;
        this.nationality=nationality;
        this.genre=genre
    }

    public print(){
        console.log(`Title: ${this[this.iterate()[0]]}\n
        Release Year: ${this[this.iterate()[1]]}\n
        Actors: ${this.iterate()[2]}\n
        Nationality: ${this[this.iterate()[3]]}\n
        Director: ${this[this.iterate()[4]]}\n
        Writer: ${this[this.iterate()[5]]}\n
        Language ${this[this.iterate()[6]]}\n
        Platform: ${this[this.iterate()[7]]}\n
        Is it part of MCU?: ${this[this.iterate()[8]]}\n
        Main character's Name: ${this[this.iterate()[9]]}\n
        Producer: ${this[this.iterate()[10]]}\n
        Distributor: ${this[this.iterate()[11]]}\n
        Genre: ${this[this.iterate()[12]]}\n`)
    }

    private iterate():string[]{
        return Object.keys(this);
    }
}

