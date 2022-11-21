/* Math obyektindən istifadə etmklə dairənin sahəsini hesablayın */
/* var S=Math.PI*Math.pow(r,2) */


/* Date obyektindən istifadə etməklə elə bir funksiya yazın ki istifadə sayta daxil olanda daxil olduğu vaxta əsasən alert mesajı çıxartsın və body backgroundu dəyişsin */
var date= new Date().getTime;
console.log(date);
switch(date){
    case 0:
    alert ('Night');
    break;
    case 6:
        alert ('Morning');
        case 12:
            alert ('Afternoon')
    
}
if (x<6){
    document.body.style.backgroundColor = 'black'
}

if(x>6){
    document.body.style.backgroundColor = 'white'
}
else{
    document.body.style.backgroundColor ='orange'
}