import {Movie} from "./movies"
export class IMDB
{
    public peliculas:Movie[];

    constructor(peliculas:Movie[])
    {
        this.peliculas = peliculas;
    }
}