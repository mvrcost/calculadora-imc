
function calculo(){
    let x = document.getElementById("resultado")
    let name = nome.value
    let a = parseFloat(altura.value)
    let p = parseFloat(peso.value)
    let resultado = p/(a*a)
    x.style.color = 'White'
    x.style.fontSize = '15px'
    x.style.fontWeight = 'bold'
    x.style.fontFamily = 'arial'
    x.style.display = 'block'
    switch(true){
        case (resultado < 18.5):
            x.innerText = `${name} , Você está abaixo do peso`;
            break;
        case (resultado > 18.6 && resultado < 24.9):
            x.innerText = `${name} , Parabéns!! \n  Você está no peso ideal!`;
            break;
        case (resultado > 25 && resultado < 29.9):
            x.innerText = `${name} , Cuidado!! \n  Você está um pouco acima do peso!`;
            break;
        case (resultado > 29.9 && resultado < 35):
            x.innerText = `${name} , ATENÇÃO!! \n  Você está OBESO! Procure um profissional.`;
            break;
        case (resultado > 35):
            x.innerText = `${name} , ATENÇÃO!! \n  Você está SUPER OBESO! Procure um profissinal.`;
            break;

        default:
            alert('Esta aplicação serve apenas para material de estudo. Procure sempre auxílio profissional.')}
   
    }
function footer(){
    let f = document.getElementById("msg")
    f.style.color = 'white'
    f.style.fontSize = '10px'
    f.style.fontWeight = 'light'
    f.innerText = 'Esta aplicação serve apenas para material de estudo. Procure sempre auxílio profissional.'}