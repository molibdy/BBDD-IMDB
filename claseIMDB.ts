import {Movie} from "./movies"
const fs = require('fs');
export class IMDB
{
    public peliculas:Movie[];

    constructor(peliculas:Movie[])
    {
        this.peliculas = peliculas;
    }


    public escribirEnFicheroJSON(nombreFichero:string){
        let imdbBBDD = JSON.stringify(this);
        fs.writeFileSync(nombreFichero,imdbBBDD)
    }

    public obtenerInstanciaIMDB(nombreFichero:string):IMDB{
        let InstanciaIMDB:IMDB=JSON.parse(fs.readFileSync(nombreFichero));
        return InstanciaIMDB;
    }

}