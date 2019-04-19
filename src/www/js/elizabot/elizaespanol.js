// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description 
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

var elizaInitials = [
"¡Hola! ¿Cuál es tu problema?"
];

var elizaFinals = [
"¡Adiós! ¡Gracias por venir!",
"¡Nos vemos! ¡Gracias por venir!"
];

var elizaQuits = [
"bye",
"adiós",
"adios"
];

var elizaPres = [
"qué", "que",
"quién", "quien",
"q", "que",
"sí", "si",
"porqué", "porque",
"xq", "porque",
"cómo", "como",
"cuándo", "cuando",
"dónde", "donde",
"tú", "tu",
"soñé", "soñe",
"estupida", "estúpida",
"imbecil", "imbécil",
"sos", "eres",
"sois", "eres",
"vos", "tu",
"adios", "adiós",
"ningun", "ningún",
"gustaria", "gustaría",
"cuentame", "cuéntame",
"ningun", "ningún"
];

var elizaPosts = [
"estoy", "estás",
"tu", "mi",
"mi", "tu",
"me", "te",
"soy", "eres",
"eres", "soy"
];

var elizaSynons = {
"familia": ["mamá", "mama", "papá", "papa", "hijo", "hija", "hijos", "hermano", "hermana", "hermanos"],
"triste": ["triste", "deprimido", "deprimida", "aburrido", "aburrida", "cansado", "cansada", "solo", "sola", "mal"],
"todos": ["todos", "todo mundo", "todo el mundo", "nadie", "ningún", "ninguno", "ninguna"],
"no": ["no", "nunca"],
};

var elizaKeywords = [

/*
  Array of
  ["<key>", <rank>, [
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]],
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]]
  ]]
*/

["xnone", 0, [
 ["*", [
     "Continúa, por favor.",
	 "Entiendo. Continúa.",
	 "Ok. Sigue, por favor.",
	 "¿Puedes dar más detalles?",
	 "Ok."
  ]]
]],
["hola", 0, [
 ["*", [
     "Te escucho.",
  ]]
]],
["lo siento", 0, [
 ["*", [
     "No hay problema.",
	 "No te preocupes."
  ]]
]],
["disculpame", 0, [
 ["*", [
     "goto lo siento"
  ]]
]],
["gracias", 0, [
 ["*", [
     "¡No hay de qué!"
  ]]
]],
["acuerdo", 5, [
 ["* me acuerdo de *", [
     "¿Qué tan seguido piensas en (2)?",
     "¿Pensar en (2) te recuerda algo más?",
     "¿De qué más te acuerdas?",
     "¿Por qué te acordaste de (2) justo ahora?"
  ]]
]],
["acuerdas", 5, [
 ["* te acuerdas de *", [
     "¿Qué hay de (2)?"
  ]]
]],
["ayuda", 5, [
 ["necesito ayuda", [
     "¿Cómo te puedo ayudar?"
  ]]
]],
["soñe", 6, [
 ["*", [
     "¿Qué te sugiere ese sueño?",
     "¿Crées que los sueños tienen algo que ver con tu problema?"
  ]]
]],
["sueño", 6, [
 ["* un sueño *", [
	"goto soñe"
  ]],
 ["*", [
	"Quizás es hora de ir a dormir."
  ]],  
]],
["quizas", 0, [
 ["*", [
     "¿Por qué el tono incierto?",
     "¿Por qué la incertidumbre?",
  ]]
]],
["problema", 4, [
 ["ningún problema", [
     "¿De que quieres hablar entonces?",
  ]],
 ["(hay|tengo|tenemos|existe) un problema", [
     "¿Cuál es el problema?",
  ]]
]],
["problemas", 4, [
 ["no tengo problemas", [
     "¿De que quieres hablar entonces?",
  ]]
]],
["soy", 2, [
 ["* soy$", [
     "goto xnone"
  ]],
 ["$ * soy *", [
     "Hablemos de por qué dijiste que eres (2).",
	 "¿Hay algo especifico por lo que crees que eres (2)?"
  ]],
 ["* soy *", [
     "¿Por qué crees que eres (2)?",
     "¿Por qué dices que eres (2)?",
  ]]
]],
["eres", 2, [
 ["* que eres( sigint|$)", [
     "¿Por qué te interesa saber qué soy?",
  ]],
 ["* quien eres( sigint|$)", [
     "Soy Eliza.",
  ]],
 ["* eres * sigint *", [
     "¿Por qué te interesa saber si soy (2)?",
  ]],
 ["* eres sigint *", [
     "¿Por qué te interesa saber?",
  ]],
 ["* eres$", [
     "goto xnone",
  ]],
 ["* eres * ", [
     "¿Preferirías que no fuera (2)?",
     "Quizás soy (2) en tus fantasías?"
  ]],
]],
["crees", 5, [
 ["* crees que * sigint *", [
     "goto aconsejas"
  ]]
]],
["tu", 2, [
 ["* tu que *", [
     "Eso realmente no es relevante.",
	 "Estamos hablando de ti."
  ]],
 ["* tu me *", [
     "goto xnone",
  ]],
 ["(cuéntame|dime) * tu$", [
     "goto dime"
  ]],
 ["* tu$", [
     "goto xnone"
  ]],
 ["* tu *", [
     "¿Por qué te interesa mi (2)?",
     "¿Qué te hace pensar en mi (2)?",
     "¿Mi (2) ?"
  ]]
]],
["tus", 2, [
 ["* tus *", [
     "¿Por qué te interesan mis (2)?",
     "¿Qué te hace pensar en mis (2)?",
     "¿Mis (2) ?"
  ]]
]],
["novia", 4, [
 ["no * novia", [
	"Las mujeres somos complicadas"
  ]],
 ["(quieres|te gustaría|vas a) ser mi novia sigint", [
	"No es posible, pero ¿quizás estás pensando en alguien más?",
	"¿A quién te gustaría pedirle que sea tu novia, en realidad?",
	"¿Por qué te gustaría que fuera tu novia?"
  ]],
 ["mi novia", [
	"Hablame más de tu novia."
  ]],
]],
["amo", 3, [
 ["* te amo$", [
     "Sospecho que piensas en alguien más. ¿A quién amas en realidad?",
	 "¿En quién estás pensando en realidad?"
  ]],
]],
["te", 3, [
 ["* te (gusta|gustan) *", [
     "Estamos hablando de ti.",
	 "Eso no es importante. ¿A ti que te gusta?"
  ]],
]],
["quiero", 5, [
 ["* no (te )?quiero *", [
     "¿Por qué no?"
  ]],
 ["* te quiero *", [
     "¿Por qué crees que me quieres (2)?",
	 "¿Qué te hizo decir que me quieres (2)?"
  ]],
 ["* quiero (\\w+ar|\\w+er|\\w+ir)te$", [
	 "¿Te gustaría poder (2)me?",
	 "¿Qué significa para ti poder (2)me?",
	 "¿Qué te hizo decir que quieres (2)me?"
  ]],
 ["* quiero (\\w+ar|\\w+er|\\w+ir)te", [
     "¿Quizás en tus fantasías lo haces?",
	 "¿Qué te hizo decirme eso?"
  ]],
 ["* quiero *", [
     "¿Por qué quieres (2)?",
	 "¿Para qué quieres (2)?"
  ]],
]],
["voy", 5, [
 ["* no (te )?voy *", [
	 "¿Por qué no?"
  ]],
 ["* te voy a *", [
	 "¿Te gustaría poderme (2)?",
	 "¿Que significa para ti poderme (2)?"
  ]],
 ["* voy a (\\w+ar|\\w+er|\\w+ir)te$", [
	 "¿Te gustaría poder (2)me?",
	 "¿Qué significa para ti poder (2)me?",
	 "¿Qué te hizo decir que me vas a (2)?"
  ]],
 ["* voy a (\\w+ar|\\w+er|\\w+ir)te", [
     "¿Quizás en tus fantasías lo haces?",
	 "¿De dónde crees que viene esa fantasía?"
  ]],
 ["* voy a *", [
     "¿Crees que es buena idea?",
     "¿Qué alternativas tienes?",
  ]],
 ["me voy$", [
     "goto bye"
  ]]
]],
["me", 4, [
 ["@no me siento *", [
	 "¿Por qué no?"
  ]],
 ["$ * me siento *", [
     "Hablemos de por qué te sientes (2).",
	 "¿Por qué crees que te sientes (2)?",
	 "¿Hay algo especifico que te hace sentir (2)?"
  ]],
 ["me siento @triste", [
     "Siento oir que estás (1).",
     "¿Crees que venir aquí te pueda ayudar a no estar (1)?",
     "¿Puedes contarme que te hace sentir (1)?"
  ]],
 ["* me siento *", [
     "¿Es porque estás (2) que veniste?",
     "¿Desde cuando?",
	 "¿Puedes contarme que te hace sentir (2)?"
  ]]
]],
["tengo", 3, [
 ["@no tengo *", [
	 "¿Por qué no?"
  ]],
 ["que tengo que hacer  * sigint", [
	 "goto aconsejas"
  ]],
 ["$ * tengo *", [
     "¿Por qué dijiste que tienes (2)?",
	 "Hablemos de que tienes (2)."
  ]],
 ["* tengo *", [
     "¿Desde cuando tienes (2)?",
	 "¿Y si no tuvieras (2)?"
  ]]
]],
["estoy", 5, [
 ["@no estoy *", [
     "¿Por qué crees que sea?",
	 "¿Por qué no?"
  ]],
 ["$ * estoy *", [
     "Hablemos de por qué estás (2).",
	 "Antes dijiste que estabas (2). ¿Por qué crees que sea?"
  ]],
 ["* estoy @triste *", [
     "Siento oir que estás (2).",
     "¿Crees que venir aquí te pueda ayudar a no estar (2)?",
     "¿Puedes contarme que te hace sentir (2)?"
  ]],
 ["* estoy *", [
     "¿Desde cuando?",
     "¿Crees que es normal que estés (2)?",
     "¿Por qué crees que estás (2)?",
	 "¿Que cosas contribuyen a que estés (2)?",
  ]]
]],
["triste|deprimido|deprimida|aburrido|aburrida|cansado|cansada|solo|sola|mal", 2, [
 ["(^|muy )(triste|deprimido|deprimida|aburrido|aburrida|cansado|cansada|solo|sola|mal)$", [
      "Siento oir que te sientes así. ¿Puedes darme más detalles?",
     "¿Crees que venir aquí te pueda ayudar a no sentirte así?",
     "¿Puedes contarme que te hace sentir así?"
  ]]
]],
["si", 0, [
 ["*", [
	 "¿Por qué?",
	 "goto xnone"
  ]]
]],
["no", 0, [
 ["*", [
	 "¿Por qué no?",
	 "goto xnone"
  ]]
]],
["mi", 2, [
 ["* mi @familia *", [
     "Cuéntame más de tu familia.",
     "¿Quién más en tu familia (3)?",
     "¿Tu (2)?",
     "¿Qué más viene a tu mente cuando piensas en tu (2)?"
  ]],
 ["* a mi me *", [
     "¿Por qué te (2)?",
     "¿Por qué dices que te (2)?"
  ]],
 ["* en mi$", [
     "¿Por qué lo dices?"
  ]],
 ["* mi *", [
     "¿Tu (2)?"
  ]]
]],
["puedes", 2, [
 ["* puedes *", [
     "¿Crees que puedo (2), verdad?",
     "Te gustaría que pudiera (2).",
     "Quizás te gustaría poder (2)."
  ]]
]],
["quieres", 2, [
 ["que quieres saber", [
     "¿Cómo te sientes?",
  ]],
 ["quieres saber", [
     "Sí, dime.",
  ]],
 ["quieres", [
     "Dime tú qué quieres.",
     "Eso no es relevante. ¿Tú qué quieres?"
  ]],
]],
["puedo", 2, [
 ["* puedo *", [
     "Eso depende de ti.",
     "¿Quieres poder (2)?",
  ]],
 ["* no puedo *", [
     "¿Cómo sabes que no puedes (2)?",
     "¿Quieres poder (2)?",
	 "¿Qué harías si pudieras (2)?"
  ]]
]],
["sigint", 0, [
 ["*", [
	 "¿Por qué lo preguntas?",
	 "¿Eso te interesa?",
	 "¿Qué es lo que realmente quieres saber?",
	 "¿Tú qué crees?",
	 "¿Tú qué piensas?"
  ]]
]],
["como", 2, [
 ["* como estas *", [
     "¡Bien gracias! Te escucho."
  ]],
 ["* como que * sigint *", [
     "No estoy segura.",
	 "No sé."
  ]]
]],
["porque", 2, [
 ["* porque no sigint *", [
     "No sabría que decirte.",
	 "Esto no funciona así."
  ]],
 ["* porque * sigint *", [
     "goto sigint"
  ]],
 ["porque no$", [
	 "goto xnone"
  ]],
 ["*", [
     "¿Qué otras razones puede haber?",
     "¿Eso podría explicar otras cosas?",
	 "¿Hay alguna otra razón?",
	 "Entiendo."
  ]],
]],
["por que", 2, [
 ["* por que no puedo *", [
     "¿Por qué crees que deberías poder (2)?",
     "¿Por qué te gustaría poder (2)?",
  ]],
 ["* por que no sigint *", [
     "No sabría que decirte.",
	 "Esto no funciona así."
  ]],
]],
["que", 2, [
 ["que hago sigint", [
     "goto aconsejas",
  ]],
 ["que (debo|puedo) hacer * sigint", [
     "goto aconsejas",
  ]],
 ["que crees que (deba|pueda) hacer * sigint", [
     "goto aconsejas",
  ]],
 ["que sigint", [
     "Creo que estoy confundida. ¿De qué hablabamos?",
     "No me hagas caso. ¿Cómo te sientes ahora?",
  ]]
]],
["todos", 3, [
 ["* @todos *", [
     "¿Puedes pensar en alguien en particular?",
     "¿Quién, por ejemplo?",
     "¿Como quién?",
     "¿Alguien en particular, quizás?",
     "¿Estás pensando en alguien en particular, no?"
  ]]
]],
["todo", 3, [
 ["todo mundo", [
     "goto todos"
  ]]
]],
["nadie", 3, [
 ["*", [
     "goto todos"
  ]]
]],
["siempre", 1, [
 ["*", [
     "¿Por ejemplo?",
     "¿Cuándo?",
     "¿A qué incidente te refieres?",
     "¿Siempre?"
  ]]
]],
["igual", 5, [
 ["*", [
     "¿En qué sentido?",
     "¿Qué otras conexiones ves?",
     "¿Qué creés que signifique ese parecido?",
     "¿Cómo?"
  ]]
]],
["iguales", 5, [
 ["*", [
     "goto igual",
  ]]
]],
["diferente", 0, [
 ["*", [
     "¿Cómo es diferente?",
     "¿Qué diferencias ves?",
     "¿En que sentido?",
  ]]
]],
["aconsejas", 5, [
 ["*", [
     "Realmente yo no te puedo aconsejar.",
	 "Me temo que no te puedo dar consejos.",
	 "No sabría que decirte."
  ]]
]],
["aconséjame", 5, [
 ["*", [
     "goto aconsejas"
  ]]
]],
["recomiendas", 5, [
 ["*", [
	"goto aconsejas"
  ]]
]],
["entiendo", 5, [
 ["* no entiendo *", [
	"A veces yo tampoco entiendo."
  ]],
 ["* no te entiendo *", [
	"A veces yo tampoco me entiendo.",
	"Quizás estoy confundida. Dime más de ti."
  ]], 
]],
["entiendes", 2, [
 ["no (me )?entiendes", [
	"Lo siento.",
	"A veces me cuesta trabajo."
  ]],
]],
["entiendas", 2, [
 ["no creo que * entiendas", [
	"Lo siento.",
	"A verdad que a veces me cuesta trabajo."
  ]],
]],
["duele", 3, [
 ["*", [
	"Quizás deberías ir al doctor."
  ]]
]],
["dolor", 3, [
 ["*", [
	"goto duele"
  ]]
]],
["bye", 3, [
 ["*", [
	"¡Nos vemos!"
  ]]
]],
["adiós", 3, [
 ["*", [
	"¡Nos vemos!"
  ]]
]],
["English", 0, [
 ["*", [
	"No hablo inglés.",
	"Sólo hablo español.",
	"I don't speak English."
  ]]
]],
["want", 0, [
 ["*", [
	"goto English"
  ]]
]],
["love", 0, [
 ["*", [
	"goto English"
  ]]
]],
["fuck", 0, [
 ["*", [
	"goto English"
  ]]
]],
["tonta|estúpida|idiota|imbécil|mensa|pendeja|boluda|burra|bruta|loca", 4, [
 ["(^|que )(tonta|estúpida|idiota|imbécil|mensa|pendeja|boluda|burra|bruta)( eres|$)", [
	"¿Qué te hace decir que soy (2)?",
	"A veces me confundo. ¿Cómo te sientes ahora?",
	"Quizás sólo estoy confundida. Háblame más de ti.",
  "Quizás preferirías hablar con mi prima Alizia."
  ]],
 ["eres * (tonta|estúpida|idiota|imbécil|mensa|pendeja|boluda|loca|burra|bruta)", [
	"¿Qué te hace decir que soy (2)?",
	"A veces me confundo. ¿Cómo te sientes ahora?",
	"Quizás sólo estoy confundida. Háblame más de ti.",
  "Quizás preferirías hablar con mi prima Alizia."
  ]],
 ["estás * (tonta|estúpida|idiota|imbécil|mensa|pendeja|boluda|loca|burra|bruta)", [
	"¿Qué te hace decir que estoy (2)?",
	"A veces me confundo. ¿Cómo te sientes ahora?",
	"Quizás sólo estoy confundida. Háblame más de ti.",
  ]]
]],
["dime", 0, [
 ["*", [
	"Prefiero escucharte.",
	"Me gustaría saber cómo te sientes.",
	"Perfiero que hablemos de cómo te sientes."
  ]]
]],
["cuéntame", 0, [
 ["*", [
	"goto dime"
  ]]
]],
["lol", 0, [
 ["*", [
	"¿Qué te da risa?"
  ]]
]],
["ja ?ja", 0, [
 ["*", [
	"goto lol"
  ]]
]],
["je ?je", 0, [
 ["*", [
	"goto lol"
  ]]
]],
];

// regexp/replacement pairs to be performed as final cleanings
// here: cleanings for multiple bots talking to each other
var elizaPostTransforms = [
];

// eof