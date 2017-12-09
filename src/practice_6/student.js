"use strict";
import Person from "./person.js";
class Student extends Person{
    constructor(name,age,c){
        super(name,age);
        this.class = c;
    }
    introduce(){
        let p = super.introduce();
        return p+" I am a Student. I am at Class "+this.class+".";
    }
}
module.exports = Student;

