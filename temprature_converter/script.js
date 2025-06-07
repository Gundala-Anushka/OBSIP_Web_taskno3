function convertTemp(){
    const degrees= parseFloat(document.getElementById("deg").value);
    const from=document.getElementById("from").value;
    const to=document.getElementById("to").value;
    const result=document.getElementById("res");
    
    if(isNaN(degrees)){
        result.value="Enter a valid number";
        return;
    }

    let celcius ;
    switch(from){
        case "fahrenheit":
            celcius=(degrees-32)*5/9;
            break;
        case "kelvin":
            celcius=degrees-273.15;
            break;
        case "celsius":
        default:
            celcius=degrees;
            break;
    }

    var result1;
    switch(to){
        case "fahrenheit":
            result1=(celcius*9/5)+32;
            result.value=`${result1.toFixed(2)}°F`;
            break;
        case "kelvin":
            result1=celcius+273.15;
            result.value=`${result1.toFixed(2)}K`;
            nreak;
        case "celsius":
        default:
            result.value=`${celcius.toFixed(2)}°C`;
            break;
        

    }
}