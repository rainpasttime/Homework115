"use strict";
import Person from "./person.js";
class Teacher extends Person{
    constructor(nouse,name,age,c=null){
        super(nouse,name,age);
        if(c!==null) {
            this.classes = [];
            for(let i=0;i<c.length;i++){
                this.classes.push(c[i]);
            }
        }
        else{
            this.classes = null;
        }
    }
    introduce(){
        let p = super.introduce();
        if(this.classes!==null){
            let result = p+" I am a Teacher. I teach Class";
            for(let i=0;i<this.classes.length;i++){
                if(i<this.classes.length-1){
                    result=result +" "+this.classes[i].number+",";
                }
                else{
                    result=result +" "+this.classes[i].number+".";
                }
            }
            return result;
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

