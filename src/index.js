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
    let arr = [];
    while ( expr.length > 0 ) {
        q = expr.substring(0, 10);
        arr.push ( q );
        expr = expr.substring ( 10 );
    }
    let text = '';
    arr.forEach ( el => {
        if ( el === '**********') { text += ' ' }	
        else {
            let code = '';
            while ( el.length > 0) {
                let q = el.substring(0, 2);
                switch ( q ) {
                    case '00' : { break;}
                    case '10' : { code += '.'; break; }
                    case '11' : { code += '-'; break; }
                }
                el = el.substring(2);
            }
            text += MORSE_TABLE[code];
        }
    });
    return text;
}

module.exports = {
    decode
}