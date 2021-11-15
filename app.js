for (let i1 = 0;i1 < 101; i1++) {

    let multiFive = 5;
    let multithree = 3;

    if ((i1 % multithree) === 0) {
        console.log(i1  +  " fizz " );
    }

    else if ((i1 % multiFive) === 0){
        console.log(i1 + " buzz " );
    }

    if (i1 % multithree && i1 % multiFive === 0) {
        console.log(i1 + " fizzbuzz " );
    }

    else{
        console.log(i1 + "n'est pas un multiple de " + ' ' + multithree + ' '+ "ou" + ' ' +
            multiFive + ' '+"le nombre est"+' ' + i1 );
    }
}