let calculadora = {
    sum: function(x,y){
        return x+y;
    },
    subtraction: function(x,y){
        return x-y;
    },
    times: function(x,y){
        return x*y;
    },
    division: function(x,y){
        return x/y;
    }
}

// user's interaction
let x = Number(prompt('enter the first number'));
let y = Number(prompt('enter the second number'));
let op = String(prompt('chose the operation among: + - * /'));

// calling the right op
if (op === '+'){
    console.log(calculadora.sum(x,y));
} else if (op === '-'){
    console.log(calculadora.subtraction(x,y));
}else if (op === '*'){
    console.log(calculadora.times(x,y));
} else if (op === '/') {
    console.log(calculadora.division(x,y))
} else {
    console.log('please chose one among mentioned.')
}
