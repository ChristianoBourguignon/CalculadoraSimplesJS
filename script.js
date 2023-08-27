let nm = [];
let operacao;
let soma;
    for (let i = 1;i<= 2;i++){
        nm[i]=parseFloat(prompt(`Digite o ${i}° numero...`))
        while (isNaN(nm[i]) || nm[i] == null ){
            alert(`Você digitou ${nm[i]}° incorretamente, aceitamos apenas numeros!`)
            nm[i]=parseFloat(prompt(`Digite o ${i} numero...`))
        }
    }
    operacao = prompt('Escolha a operação do seu cálculo! Ex: / + * -');
    while (operacao != '/' && operacao != '-' && operacao != '+' && operacao != '*'){
        alert(`Você digitou a operação incorretamente! "${operacao}" não é válido. Digite qualquer um desses: / - + *`)
        operacao = prompt('Escolha a operação do seu cálculo novamente! Ex: / + * -');
    }
    switch (operacao){
        case '+':
            soma = nm[1] + nm[2];
            break;
        case '-':
            soma = nm[1] - nm[2];
            break;
        case '/':
            soma = nm[1] / nm[2];
            break;
        case '*':
            soma = nm[1] * nm[2];
            break;
        }
    alert(`O resultado do seu cálculo ${nm[1]} ${operacao} ${nm[2]} é: ${soma}`)
    function chamarDados(){
        document.getElementById("calculo").placeholder = `${nm[1]} ${operacao} ${nm[2]}`;
        document.getElementById("soma").placeholder = soma;
    }