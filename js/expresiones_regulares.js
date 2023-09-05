let parrafo= " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ratione et eum consectetur esse eius velit beatae provident illum quo aperiam tempore libero cum, deserunt aliquam, aliquid ullam suscipit quae.";
let expReg1 = new RegExp('t');
console.log(expReg1.exec(parrafo));

let parrafo2= " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ratione et eum consectetur esse eius velit beatae provident illum quo aperiam tempore libero cum, deserunt aliquam, aliquid ullam suscipit quae.";
let expReg2= /DOLOR/i;
console.log(expReg2.test(parrafo));