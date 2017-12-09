"use strict";
import Person from "./person.js";
import Class from "./class.js";
class Teacher extends Person{
    constructor(name,age,c=null){
        super(name,age);
        if(c!==null) {
            this.class = c;
        }
        else{
            this.class = null;
        }
    }
    introduce(){
        let p = super.introduce();
        if(this.class!==null){
            return p+" I am a Teacher. I teach "+this.class.getDisplayName()+".";
        }
        else{
            return p+" I am a Teacher. I teach No Class.";
        }
    }
    introduceWith(student){
        let p = super.introduce();
        let classOne = student.class.number;
        let classTwo = this.class.number;
        if(classOne===classTwo){
            return p+" I am a Teacher. I teach "+student.name+".";
        }
        else{
            return p+" I am a Teacher. I don't teach "+student.name+".";
        }
    }
}

module.exports = Teacher;

