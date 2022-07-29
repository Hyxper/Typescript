
enum dt {
     STRING = "STRING",
     NUMERIC = "NUMERIC"
}

type Combinable = string | number;
type EnumCombinable = dt.NUMERIC | dt.STRING;



function combine(
     ip1: Combinable ,
     ip2: Combinable, 
     resultType: EnumCombinable ){
    
    let result;

    if (typeof ip1 === "number" && typeof ip2 === "number") {
         result = ip1 + ip2;
    }else{
         result = ip1.toString()+ " " + ip2.toString()
    }

    if(typeof result === "string" && resultType === dt.NUMERIC){
          throw new Error ("INCORRECT COMBINATION!!")
    }else if (resultType === dt.NUMERIC) {
          return +result;
    }else{
          return result.toString();
    }

}

const combinedAges = combine(30,26,dt.NUMERIC);
console.log(combinedAges);
const combinedName = combine("Jack","Sargeant",dt.STRING);
console.log(combinedName);
const combiedStringAges = combine("21","25",dt.STRING);
const flushErr = combine("JACK","SARGE",dt.NUMERIC);