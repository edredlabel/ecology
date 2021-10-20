const form = document.querySelector('#form');
console.dir(form);

let K2 = 0.25;
let Pc = 40;
let H2 = 200;
let M1 = 0.1;
let M2 = 0.4;
let C = 0.3;

form.addEventListener('input', function(){
    let Tp = +form[0].value;
    let K1 = +form[1].value;
    let e = +form[2].value;
    let E = +form[3].value;
    let L = +form[4].value;
    let B = +form[5].value;
    let K3 = +form[6].value;
    let K4 = +form[7].value;
    let H1 = +form[8].value;
    let P = +form[9].value;
    let Pi = +form[10].value;

    let D1 = Tp * K1 * 1000 / H1;
    const one = document.querySelector('.one');

    let D2 = E * K2 * 1000 / P;
    const two = document.querySelector('.two');

    let D3 = e * Tp * 1000 / Pc;
    const three = document.querySelector('.three');

    let D4 = Tp * L * 0.5 * 10 / (H2 * M1);
    const four = document.querySelector('.four');

    let D5 = 2 * B * C * 1000 / (0.5 * M2);
    const five = document.querySelector('.five');

    let D6 = Tp * K3 * K4 * 1000 / Pi;
    const six = document.querySelector('.six');

    one.value = D1;
    two.value = D2;
    three.value = D3;
    four.value = D4;
    five.value = D5;
    six.value = D6;
}); 