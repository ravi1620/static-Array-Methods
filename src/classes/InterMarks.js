class InterMarks{
    static passMarks=35;
    
    static raviDetails=()=>{
        console.log("Hi this is Static and Array methods class");
    }
    constructor(telMarks,hindiMarks,engMarks,mathsMarks,sciMarks,socMarks){
this.telMarks = 0;
this.hindiMarks = 0;
this.engMarks = 0;
this.mathsMarks = 0;
this.sciMarks = 0;
this.socMarks = 0;



    }
    calculateResult=()=>{
        if(this.telMarks>= InterMarks.passMarks &&
            this.hindiMarks>= InterMarks.passMarks  &&
            this .engMarks>= InterMarks.passMarks &&
            this.mathsMarks>= InterMarks.passMarks &&
            this.sciMarks>=  InterMarks.passMarks && 
            this.socMarks>= InterMarks.passMarks){
console.log("Student has passed in the exams")
        }else{
            console.log("Student has failed in the exams")
        }
    }
}
export default InterMarks;