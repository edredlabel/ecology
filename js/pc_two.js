const form = document.querySelector('#form');
console.dir(form);

let C_fco = 1.5;
let C_fno2 = 0.03;
let C_fso2 = 0.1;
let C_dust = 0.2;

let PDK_co = 5;
let PDK_no2 = 0.085;
let PDK_so2 = 0.5;
let PDK_dust = 0.5;

form.addEventListener('input', function(){
    let M_co = +form[0].value;
    let M_no2 = +form[1].value;
    let M_so2 = +form[2].value;
    let M_dust = +form[3].value;

    let N = +form[4].value;
    let H = +form[5].value;
    let D = +form[6].value;
    let W = +form[7].value;
    let Tr = +form[8].value;
    let Ta = +form[9].value;
    let A = +form[10].value;

    let f = 10 ** 3 * W ** 2 * D / H ** 2 / (Tr-Ta);
    const one = document.querySelector('.one');

    let m = 1 / 0.67 + 0.1 * Math.sqrt(f) + 0.34 ** 3 * Math.sqrt(f);
    const two = document.querySelector('.two');

    let Vm = 1.3 * W * D / N;
    const three = document.querySelector('.three');

    let V1 = Math.PI * D ** 2 / 4 * W * N;
    const four = document.querySelector('.four');

    let C_mco = A * M_co * f * N * m / H ** 2 * 3 * Math.sqrt(V1 * (Tr - Ta));
    const fiveOne = document.querySelector('.fiveOne');

    let C_no2 = A * M_no2 * f * N * m / H ** 2 * 3 * Math.sqrt(V1 * (Tr-Ta));
    const fiveTwo = document.querySelector('.fiveTwo');

    let C_so2 = A * M_so2 * f * N * m / H ** 2 * 3 * Math.sqrt(V1 * (Tr-Ta));
    const fiveThree = document.querySelector('.fiveThree');

    let C_dust = A * M_dust * f * N * m / H ** 2 * 3 * Math.sqrt(V1 * (Tr-Ta));
    const fiveFour = document.querySelector('.fiveFour');

    let V = V1 * N;
    const six = document.querySelector('.six');

    let PDV_co = 8 * PDK_co * H * Math.sqrt(H * V1) / A * f * N * m;
    const sevenOne = document.querySelector('.sevenOne');

    let PDV_no2 = 8 * PDK_no2 * H * Math.sqrt(H * V1) / A * f * N * m;
    const sevenTwo = document.querySelector('.sevenTwo');
    
    let PDV_so2 = 8 * PDK_so2 * H * Math.sqrt(H * V1) / A * f * N * m;
    const sevenThree = document.querySelector('.sevenThree');

    let PDV_dust = 8 * PDK_dust * H * Math.sqrt(H * V1) / A * f * N * m;
    const sevenFour = document.querySelector('.sevenFour');

    let H_co = A * m * f * D / ((8 * V1 * PDK_co) ** 3/4);
    const eightOne = document.querySelector('.eightOne');

    let H_no2 = A * m * f * D / ((8 * V1 * PDK_no2) ** 3/4);
    const eightTwo = document.querySelector('.eightTwo');

    let H_so2 = A * m * f * D / ((8 * V1 * PDK_so2) ** 3/4);
    const eightThree = document.querySelector('.eightThree');

    let H_dust = A * m * f * D / ((8 * V1 * PDK_dust) ** 3/4);
    const eightFour = document.querySelector('.eightFour');

    let PDV__co = (PDK_co - C_fco) * H ** 2 * 3 * Math.sqrt(V1 * (Tr - Ta)) / A * f * N * m;
    const nineOne = document.querySelector('.nineOne');

    let PDV__no2 = (PDK_no2 - C_fno2) * H ** 2 * 3 * Math.sqrt(V1 * (Tr - Ta)) / A * f * N * m;
    const nineTwo = document.querySelector('.nineTwo');

    let PDV__so2 = (PDK_so2 - C_fso2) * H ** 2 * 3 * Math.sqrt(V1 * (Tr - Ta)) / A * f * N * m;
    const nineThree = document.querySelector('.nineThree');

    let PDV__dust = (PDK_dust - C_dust) * H ** 2 * 3 * Math.sqrt(V1 * (Tr - Ta)) / A * f * N * m;
    const nineFour = document.querySelector('.nineFour');

    one.value = f;
    two.value = m;
    three.value = Vm;
    four.value = V1;        
    fiveOne.value = C_mco;
    fiveTwo.value = C_no2;
    fiveThree.value = C_so2;
    fiveFour.value = C_dust;
    six.value = V;
    sevenOne.value = PDV_co;
    sevenTwo.value = PDV_no2;
    sevenThree.value = PDV_so2;
    sevenFour.value = PDV_dust;
    eightOne.value = H_co;
    eightTwo.value = H_no2;
    eightThree.value = H_so2;
    eightFour.value = H_dust;
    nineOne.value = PDV__co;
    nineTwo.value = PDV__no2;
    nineThree.value = PDV__so2;
    nineFour.value = PDV__dust;
});  