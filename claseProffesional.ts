export class Professionales
{   
    public name:string;
    public age:number;
    public genre:string;
    public weight:number;
    public height:number;
    public hairColor:string;
    public eyeColor:string;
    public raze:string;
    public isRetired:boolean;
    public nationality:string;
    public oscarsNumber:number;
    public proffesion:string;

        constructor(name:string,age:number,genre:string,weight:number,height:number,hairColor:string,
            eyeColor:string,raze:string,isRetired:boolean,nationality:string,oscarNumber:number,proffesion:string)
        {
            this.name = name;
            this.age = age;
            this.genre = genre;
            this.weight = weight;
            this.height= height;
            this.hairColor = hairColor;
            this.eyeColor = eyeColor;
            this.raze = raze;
            this.isRetired = isRetired;
            this.nationality = nationality;
            this.oscarsNumber = oscarNumber;
            this.proffesion = proffesion;
        }
       public  getPrint()
       {
           console.log
           (
               "Proffesional: \n"+ 
               "  *  Name: " + this.name + "\n"+
               "  *  Age: " + this.age + "\n"+
               "  *  Genre: " + this.genre + "\n"+
               "  *  Weight: " + this.weight + "\n"+
               "  *  Height: " + this.height + "\n"+
               "  *  Hair Color: " + this.hairColor + "\n"+
               "  *  Eye Color: " + this.eyeColor + "\n"+
               "  *  Raze: " + this.raze + "\n"+
               "  *  is Retired?: " + this.isRetired + "\n"+
               "  *  Nationality: " + this.nationality + "\n"+
               "  *  Oscar Numbers: " + this.oscarsNumber + "\n"+
               "  *  Profession: " + this.proffesion + "\n"
           )
       }



}