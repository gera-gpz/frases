const frases=[
    "Cada día es una nueva oportunidad para cambiar tu vida",
    "Parece imposible hasta que se hace",
    "Siempre que dudes, apaga el ruido y escucha tu corazón",
    "Haz algo hoy que tu futuro yo te agradezca",
    "Eres lo que haces, no lo que dices que harás",
    "Lo importante no es lo que se promete, sino lo que se cumple",
    "Todo lo que necesitas para ser feliz se encuentra al otro lado de tus miedos",
    "Dale a cada día la posibilidad de ser el mejor día de tu vida",
    "Ninguna vida está completa sin un toque de locura",
    "Sigue corriendo, no dejes que tus excusas te alcancen"
]

function obtieneFrase() {
    let indice = Math.floor(Math.random() * 9 )
    return frases[indice]
}

module.exports.obtieneFrase=obtieneFrase();


