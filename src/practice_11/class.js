"use strict";
class Class{
    constructor(klass){
        this.number = klass;
    }
    getDisplayName(){
        return "Class "+this.number;
    }
    assignLeader(student){
        if(student.class.number===this.number) {
            this.leader = student;
            if(this.hasOwnProperty("Leaderteacher")){
                let result ="I am "+this.Leaderteacher.name+". I know "+student.name+" become Leader of Class "+this.number+".";
                console.log(result);
            }
        }
        else{
            console.log("It is not one of us.");
        }
    }
    appendMember(student){
        student.class= this;
        if(this.hasOwnProperty("Jointeacher")){
            let result ="I am "+this.Jointeacher.name+". I know "+student.name+" has joined Class "+this.number+".";
            console.log(result);
        }

    }
    registerJoinListener(teacher){
        this.Jointeacher = teacher;
    }
    registerAssignLeaderListener(teacher){
        this.Leaderteacher = teacher;
    }
}
module.exports = Class;


