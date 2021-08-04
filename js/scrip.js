//window.addEventListener('load, start');

function start() {
   var inputRange = document.querySelector('#inputRange');
   var inputCurrentNumber = document.querySelector('#inputCurrentNumber');
   var inputNumberText = document.querySelector('#inputNumberText');

   inputRange.addEventListener('input', function (event){
      var currentValue = event.target.value; 
      inputCurrentNumber.value = currentValue;

    inputNumberText.value = numberToText (currentValue);
 });
}

function numberToText(number) {
    var size = number.toString().length;
    if (size === 1 ) {
        return sizeOneDescription(number);
    }
    if (size === 2 ) {
        return sizeTwoDescription(number);
    }
    if (size === 3 ) {
        return sizeThreeDescription(number);
    }
}

function sizeOneDescription(number){
    if (number === '0') return 'zero' ;
    if (number === '1') return 'um' ;
    if (number === '2') return 'dois' ;
    if (number === '3') return 'três' ;
    if (number === '4') return 'quatro' ;
    if (number === '5') return 'cinco' ;
    if (number === '6') return 'seis' ;
    if (number === '7') return 'sete' ;
    if (number === '8') return 'oito' ;
    if (number === '9') return 'nove' ;
}

function sizeTwoDescription(number) {
    if (number === '10') return 'dez' ;
    if (number === '11') return 'once' ;
    if (number === '12') return 'doze' ;
    if (number === '13') return 'treze' ;
    if (number === '14') return 'quatorze' ;
    if (number === '15') return 'quinze' ;
    if (number === '16') return 'dezesseis' ;
    if (number === '17') return 'desessete' ;
    if (number === '18') return 'dezoito' ;
    if (number === '19') return 'dezenove' ;
    if (number === '20') return 'vinte' ;
    if (number === '30') return 'trinta' ;
    if (number === '40') return 'quarenta' ;
    if (number === '50') return 'cinquenta' ;
    if (number === '60') return 'sessenta' ;
    if (number === '70') return 'setenta' ;
    if (number === '80') return 'oitenta' ;
    if (number === '90') return 'noventa' ;

    var firsterCharacter = number[0];
    var secondCharacter = number[1];
    var prefix = '';

    if (firsterCharacter === '2') prefix = 'vinte e ';
    if (firsterCharacter === '3') prefix = 'trinta e ';
    if (firsterCharacter === '4') prefix = 'quarenta e ';
    if (firsterCharacter === '5') prefix = 'cinquenta e ';
    if (firsterCharacter === '6') prefix = 'sessenta e ';
    if (firsterCharacter === '7') prefix = 'setenta e ';
    if (firsterCharacter === '8') prefix = 'oitenta e ';
    if (firsterCharacter === '9') prefix = 'noventa e ';

    return prefix + sizeOneDescription(secondCharacter);
}

function sizeThreeDescription(number) {
    if (number === '100') return 'cem';
    if (number === '200') return 'duzentos';
    if (number === '300') return 'trezentos';
    if (number === '400') return 'quatrocentos';
    if (number === '500') return 'quinhentos';
    if (number === '600') return 'seiscentos';
    if (number === '700') return 'setecentos';
    if (number === '800') return 'oitocentos';
    if (number === '900') return 'novecentos';

    var firsterCharacter = number[0];
    var secondCharacter = number[1];
    var thirdCharacter = number[2];
    var secondAndThirdCharacters = number.substring(1);
    var prefix = '';
    
    if (firsterCharacter === '1') prefix = 'cento e ';
    if (firsterCharacter === '2') prefix = 'duzentos e ';
    if (firsterCharacter === '3') prefix = 'trezentos e ';
    if (firsterCharacter === '4') prefix = 'quatrocentos e ';
    if (firsterCharacter === '5') prefix = 'quinhentos e ';
    if (firsterCharacter === '6') prefix = 'seiscentos e ';
    if (firsterCharacter === '7') prefix = 'setecentos e ';
    if (firsterCharacter === '8') prefix = 'oitocentos e ';
    if (firsterCharacter === '9') prefix = 'novecentos e ';

    if(secondCharacter === '0') {
        return prefix + sizeOneDescription(thirdCharacter);
    }

    return prefix + sizeTwoDescription(secondAndThirdCharacters);


}

start();