import logo from "./logo.svg";
import "./App.css";
import InterMarks from "./classes/InterMarks";

function App() {

let ravi= new InterMarks();
 ravi.telMarks = 88;
 ravi.hindiMarks = 88;
 ravi.engMarks =77;
 ravi.mathsMarks =55;
 ravi.sciMarks = 66;
 ravi.socMarks = 100;

 console.log(InterMarks.passMarks)
InterMarks.raviDetails();
ravi.calculateResult();
  let charctersOfRamayan = [
    "Dasarada",
    "Kousalya",
    "Kaikeyi",
    "Sumitra",
    "Ram",
    "Lakshman",
    "Bharatha",
    "Shatrugna",
    "Sita",
    "Oormila",
    "Parashurama",
    "Janaka",
    "Ravana",
    "Vibheeshana",
    "Kumbhakarna",
    "Surpanaka",
  ];

  console.log(charctersOfRamayan);
  

  return (
  <div className="App">
    <h1>Array Methods and Properties</h1>
    <button  type ="button" onClick={()=>{
      console.log(charctersOfRamayan.length);
      console.log(charctersOfRamayan[10]);
      for( let i=0;i<charctersOfRamayan.length;i++ ){
        console.log(charctersOfRamayan[i]);
              }
             
    }}>Array lentgh</button>

    <button  type ="button" onClick={()=>{
        // console.log(charctersOfRamayan.length);
        for( let i=0;i<charctersOfRamayan.length;i++ ){
          console.log(charctersOfRamayan.at(i));
                }
     
    }}>Array at</button>

    <button  type ="button" onClick={()=>{
      console.log(charctersOfRamayan.toString());
    }}>array tostring</button>

    <button  type ="button" onClick={()=>{
      console.log(charctersOfRamayan.join(" | "));
    }}>array join</button>

    <button  type ="button" onClick={()=>{
      console.log(charctersOfRamayan);
    charctersOfRamayan.push("Mandodhari","Brahma Dev");
      console.log(charctersOfRamayan);
    }}> Array Push</button>

    <button  type ="button" onClick={()=>{
      console.log(charctersOfRamayan);
      console.log(charctersOfRamayan.pop());
      console.log(charctersOfRamayan);
    }}> Array Pop</button>

    <button  type ="button" onClick={()=>{
      console.log(charctersOfRamayan);
      console.log(charctersOfRamayan.shift());
      console.log(charctersOfRamayan);
    }}>Array shift</button>

    <button  type ="button" onClick={()=>{
console.log(charctersOfRamayan);
charctersOfRamayan.unshift("Atrimaharshi","Bruhumaharshi","Gowtamamaharshi")
    }}>Array Unshift</button>

    <button  type ="button" onClick={()=>{
      console.log(charctersOfRamayan);
      charctersOfRamayan.splice(0,0,"Meghnadha","Lankini")
      console.log(charctersOfRamayan);

      console.log(charctersOfRamayan);
      charctersOfRamayan.splice(10,3,);
      console.log(charctersOfRamayan);
    }}>Array Splice</button>

    <button  type ="button" onClick={()=>{
      console.log(charctersOfRamayan);
      delete charctersOfRamayan[9];
      console.log(charctersOfRamayan);
    }}>Array delete</button>

  </div>
  );
}

export default App;
