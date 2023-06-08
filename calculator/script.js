function exp(exprestion){
    let num1 =parseFloat(document.getElementById('num1').value);
    let num2 =parseFloat(document.getElementById('num2').value);
    switch(exprestion){
        
        case '+': document.getElementById('result').innerHTML = num1+num2;
        break;
        case '-':document.getElementById('result').innerHTML = num1 - num2;
        break;
        case '*':document.getElementById('result').innerHTML = num1 * num2;
        break;
        case '/':document.getElementById('result').innerHTML = num1 / num2;
        break;
    }


}
