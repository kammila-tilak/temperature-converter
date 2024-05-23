function convert(){
    var fromUnit = document.getElementById('fromUnit').value;
    var toUnit = document.getElementById('toUnit').value;
    var temperature = parseFloat(document.getElementById('temperature').value);
    var  convertedVal;
    var result;


    switch(fromUnit){
        case 'C':
            if(toUnit === 'F'){
                convertedVal = (temperature * 9/5) + 32;
                result = 'F';
            }
            else if(toUnit === 'K'){
                convertedVal = temperature + 273.15;
                result = 'K';
            }
            else if(toUnit === 'R'){
                convertedVal = temperature * 273.15;
                result = 'R';
            }
            else{
                convertedVal = temperature;
                result = 'C';
            }
            break;

            case 'F':
            if(toUnit === 'C'){
                convertedVal = (temperature - 32) * 5/9;
                result = 'C';
            }
            else if(toUnit === 'K'){
                convertedVal = (temperature - 32) * 5/9 + 273.15;
                result = 'K';
            }
            else if(toUnit === 'R'){
                convertedVal = temperature + 459.97;
                result = 'R';
            }
            else{
                convertedVal = temperature;
                result = 'F';
            }
            break;

            case 'K':
            if(toUnit === 'C'){
                convertedVal = temperature - 273.15;
                result = 'C';
            }
            else if(toUnit === 'F'){
                convertedVal = (temperature - 273.15) * 9/5 + 32;
                result = 'F';
            }
            else if(toUnit === 'R'){
                convertedVal = temperature * 9/5;
                result = 'R';
            }
            else{
                convertedVal = temperature;
                result = 'K';
            }
            break;

            case 'R':
            if(toUnit === 'C'){
                convertedVal = (temperature - 491.67) * 5/9;
                result = 'C';
            }
            else if(toUnit === 'F'){
                convertedVal = temperature + 459.67;
                result = 'F';
            }
            else if(toUnit === 'K'){
                convertedVal = temperature * 5/9;
                result = 'K';
            }
            else{
                convertedVal = temperature;
                result = 'R';
            }
            break;
    }

    document.getElementById('result').value = convertedVal.toFixed(2) + ' ' + result;

    
}

