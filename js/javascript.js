let pontuacao = 0;

function calcular(){
    let resposta1 = document.querySelector("input[type='radio'][name=pergunta1]:checked").value;
    if(resposta1 == '2'){
        pontuacao++;
        document.getElementById('p1a2').style.color = "green";
    }
    else{
        if(resposta1 == '1')
            document.getElementById('p1a1').style.color = "red";
        if(resposta1 == '3')
            document.getElementById('p1a3').style.color = "red";
    }

    let resposta2 = document.querySelector("input[type='radio'][name=pergunta2]:checked").value;
    if(resposta2 == '1')
        pontuacao++;
    
    let resposta3 = document.querySelector("input[type='radio'][name=pergunta3]:checked").value;
    if(resposta3 == '1')
        pontuacao++;

    let resposta4 = document.querySelector("input[type='radio'][name=pergunta4]:checked").value;
    if(resposta4 == '3')
        pontuacao++;
    
    let resposta5 = document.querySelector("input[type='radio'][name=pergunta5]:checked").value;
    if(resposta5 == '3')
        pontuacao++;
    document.getElementById('resultado').innerHTML = pontuacao;
}