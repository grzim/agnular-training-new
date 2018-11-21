import { Profession } from './profession'
export class User {
    name: string;
    surname: string;
    age: number;
    profession: Profession;
    constructor(name, surname, age, profName, profPlace) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.profession = new Profession(profName, profPlace);
    }
}
