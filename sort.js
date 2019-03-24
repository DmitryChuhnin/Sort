let result = prompt('Введите число:',100);
let num = result;
let mass = new Array(num);
function generateNumbers(start, len) {
    let arr = new Array(len);
    for (let i = 0; i < len; i++, start++) {
        arr[i] = start;
    }
    return arr;
}
mass = generateNumbers(1, num);
let x = new Array(num);
let r = new Array();
for (let i =0; i < mass.length; i++){
    if(mass[i] % 2 === 0){
        console.log(mass[i] + " ");
        r[i]=mass[i];
    }else{
        x[i] = mass[i];
    }
}
let q = x.reverse();
let f1 = r.filter(Boolean);
let f2 = q.filter(Boolean);
alert(f1+", "+f2);
