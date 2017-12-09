"use strict";
import Person from "./person.js";
class Teacher extends Person{
    constructor(name,age,c=null){
        super(name,age);
        this.class = c;
    }
    introduce(){
        let p = super.introduce();
        if(this.class!==null){
            return p+" I am a Teacher. "+ "I teach Class "+this.class+".";
        }
        else
            return p+" I am a Teacher. "+ "I teach No Class.";
    }
}
module.exports =Teacher;


