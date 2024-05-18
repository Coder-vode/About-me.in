const tov = parseInt(prompt('Enter total no of over '))


let baco = document.getElementById("bac");
// console.log(baco);
let ovco = document.getElementById("ovc");
let ki = document.getElementById("f");
let gn = document.getElementById("golnam")
let count = 0;
let a = 0;
let ii = "Innings ended";


inball()
function increment() {
  count = count + 1;
  baco.innerText = count;
   // console.log(count);
    if (count>=6) {
        count=0
        a = a +1;
      ovco.innerText = a;
        alert("Over!!");
        inball()
    }
    if (tov<=a) {
        ki.innerText= ii ;
        console.log(ii)
         alert("Innings ended!!");
         count= 0;
         a = 0;
         
         
    }
    
}
function inball() {
   
   

    let inball = prompt('Enter Baller Name ');
    gn.innerText= inball;
    
    }