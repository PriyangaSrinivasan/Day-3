// How to compare two JSON have the same properties without order:
let obj1 ={name:"Person 1",age:5};
let obj2 ={age:5, name:"Person 1"};
 
let a = JSON.stringify(obj1.sort)===JSON.stringify(obj2.sort);

console.log(a);




// All the country flags :

   var request = new XMLHttpRequest();
   request.open("GET","https://restcountries.com/v3.1/all",true)
   request.send();
   request.onload = function() {

   var data = request.response;
   var result = JSON.parse(data)
   for(var i=0;i<result.length;i++){
    console.log(result[i].flags.svg);
   }    
}

// All countris names, regions, sub-region, population:

var request1 = new XMLHttpRequest();
request1.open("GET","https://restcountries.com/v3.1/all",true)
request1.send();
request1.onload = function() {

   var data = request1.response;
   var result1 = JSON.parse(data)
   for(var i=0;i<result1.length;i++){
    console.log("Countryname:"+" "+result1[i].name.common,"Region:"+" "+result1[i].region,"Subregion:"+" "+result1[i].subregion,"Population:"+" "+result1[i].population);
   }    
}

