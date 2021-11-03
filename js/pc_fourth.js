const form = document.querySelector('#form')
console.dir(form);

let e = 1.1;
let lf = 1.3;
let lnp = 1.3;

form.addEventListener('input', function(){
    let PDK = +form[0].value;
    let Q1 = +form[1].value;    
    let Q2 = +form[2].value;    
    let V = +form[3].value;  
    
    let H = +form[4].value;
    let L = +form[5].value;
    let C = +form[6].value;
    let LS = +form[7].value;
    let Cf = +form[8].value;

    let D = V * H / 200;
    const one = document.querySelector('.one')

    let a = e * (lf / lnp) * Math.sqrt(D / Q2);
    const two = document.querySelector('.two');

    let B = Math.exp(-a * 3 * Math.sqrt(L));
    const three = document.querySelector('.three');

    let y = (1 - B) / Math.pow((Q1/Q2), B);
    const four = document.querySelector('.four');

    let K = y * Q1 + Q2 / Q2;
    const five = document.querySelector('.five');

    let Cv = (C - Cf) / K;
    const six = document.querySelector('.six');

    let Cpred = K * (PDK - Cf) + PDK
    const seven = document.querySelector('.seven')

    let PDC = Cpred * Q2;
    const eight = document.querySelector('.eight');


    one.value = D;
    two.value = a;
    three.value = B;
    four.value = y;
    five.value = K;
    six.value = Cv;
    seven.value = Cpred;
    eight.value = PDC;
});