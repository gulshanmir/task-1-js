

var date= new Date().getHours;
console.log(date);


switch(date){
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    alert ('Good Morning');
    break;
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
   alert ('Good Afternoon');
        break;
        default:
            alert ('Good Night')
    
}


 
 const x =new Date();
 x.getHours();
 

if (x>=6 && x<12) {
    document.body.style.backgroundColor='green'
}

else if(x>=12 && x<18){
    document.body.style.backgroundColor = 'orange'
}
else if(x>=18 || x<6){
    document.body.style.backgroundColor = 'black'
}


var r=4
var a=Math.PI*Math.pow(4,2);
console.log(Math.PI*Math.pow(4,2));
