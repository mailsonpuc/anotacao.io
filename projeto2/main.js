import { encerramento1, encerramento2 ,encerramento3, encerramento4, encerramento5, encerramento6 } from "./encerramento.js";



//end 1 dia/mes/ano
document.getElementById("encerramento1").innerHTML=`<del>Faltam <i class="#e040fb purple accent-2">${encerramento1(new Date('2024,08,26'), new Date())} DIAS</i> Tarefa 1 (Etapa 1)</del>`

//end 2
document.getElementById("encerramento2").innerHTML=`<del>Faltam <i class="#e040fb purple accent-2">${encerramento1(new Date('2024,09,23'), new Date())} DIAS</i> Tarefa 2 (Etapa 2)</del>`

//end 3
document.getElementById("encerramento3").innerHTML=`Faltam <i class="#e040fb purple accent-2">${encerramento1(new Date('2024,10,21'), new Date())} DIAS</i> Tarefa 3 (Etapa 3)`

//end 4
document.getElementById("encerramento4").innerHTML=`Faltam <i class="#e040fb purple accent-2">${encerramento1(new Date('2024,11,18'), new Date())} DIAS</i> Tarefa 4 (Etapa 4)`

//end 5
document.getElementById("encerramento5").innerHTML=`Faltam <i class="#e040fb purple accent-2">${encerramento1(new Date('2024,11,25'), new Date())} DIAS</i> Tarefa 5 (Etapa 5)`

//end 6
document.getElementById("encerramento6").innerHTML=`Faltam <i class="#e040fb purple accent-2">${encerramento1(new Date('2024,11,17'), new Date())} DIAS</i> XP Inc. - Full Stack Developer dio.me`
