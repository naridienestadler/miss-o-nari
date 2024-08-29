const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como você acredita que podemos combater o racismo na sociedade?",
        alternativas: [
            {
                texto: "Participando de campanhas de conscientização e educação sobre igualdade racial.",
                afirmacao: "afirmacao1"
            },
            {
                texto: "Denunciando atos de discriminação e apoiando políticas públicas inclusivas.",
                afirmacao: "afirmacao2"
            }
           
        ]
    },
    {
        enunciado: "Como você pode ajudar a combater a disseminação de fake news, especialmente as que perpetuam o racismo?",
        alternativas: [
            {
                texto: "Verificando a veracidade das informações antes de compartilhar qualquer conteúdo, especialmente sobre temas sensíveis como racismo.",
                afirmacao: "afirmacao3"
            },
            {
                texto: "Educando amigos e familiares sobre os perigos das fake news e incentivando-os a não compartilhar conteúdos falsos que perpetuam o racismo.",
                afirmacao: "afirmacao4"
            }
           
        ]
    },
    {
        enunciado: "Como podemos incentivar o uso de energia solar e outras formas de energia limpa, especialmente em comunidades carentes?",
        alternativas: [
            {
                texto: "Defendendo políticas públicas que subsidiem a energia solar para famílias de baixa renda.",
                afirmacao:"afirmacao5"
            },
            {
                texto: "Promovendo a instalação de painéis solares em escolas e centros comunitários de comunidades marginalizadas.",
                afirmacao:"afirmacao6"
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let histiraFinal = "";

function mostraPergunta(){
  if (atual >= perguntas.length){
    mostraresultados();
    return.
  } 
  prguntaAtual = pergunta[atual];
  cixaPerguntas.textContent 
 
