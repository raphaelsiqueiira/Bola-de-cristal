const inputPergunta = document.querySelector("#inputPergunta")
const elementoResposta = document.querySelector("#resposta")
const respostas = [
    "Certeza!",
    "Não tenho tanta certeza.",
    "É decidamente assim.",
    "Sem dúvidas!",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente.",
    "Minha resposta é não.",
    "Melhor não te dizer agora.",
    "Ao meu ver, sim.",
    "Minhas fontes dizem não.",
    "Provavelmente.",
    "Não é possível prever agora.",
    "Perspectiva boa.",
    "Perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunte novamente.",
    "Sinais apomtamm que sim.",
]
    //clicar em fazer pergunta
function fazerPergunta(){
    if(inputPergunta.value == ""){
        alert("Digite sua pergunta")
        return
    }
    const pergunta= "<div>" + inputPergunta.value + "</div>"

    //gerar numero aleatorio
    const totalRespostas = respostas.length
    const numeroAleatorio = Math.floor(Math.
random() * totalRespostas)
    
    elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

    //sumir a resposta depois de 3 segundos
    setTimeout(function(){
        elementoResposta.style.opacity = 0
    }, 3000)
    setTimeout(function(){
        window.location.reload(1);
    }, 4600);
}