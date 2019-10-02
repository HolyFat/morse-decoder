const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    expr = expr.match(/.{1,10}/g);
    for(var i = 0; i < expr.length; i++){
        expr[i] = expr[i].split('10').join('.');
        expr[i] = expr[i].split('11').join('-');
        expr[i] = expr[i].split('**********').join(' ');
        expr[i] = expr[i].replace(/[0-9]/g, '');
        if(MORSE_TABLE[expr[i]]){
            expr[i]=MORSE_TABLE[expr[i]];
        }
        else{
            expr[i] = ' ';
        }


    }
    expr = expr.join('');
    return expr;
}

module.exports = {
    decode
}