import { encerramento1, encerramento2 ,encerramento3, encerramento4, encerramento5 } from "./encerramento.js";



//end 1 dia/mes/ano
document.getElementById("encerramento1").innerHTML=`Faltam <i class="#e040fb purple accent-2">${encerramento1(new Date('04,03,2024'), new Date())} DIAS</i> Tarefa 1 (Etapa 1)`

//end 2
document.getElementById("encerramento2").innerHTML=`Faltam <i class="#e040fb purple accent-2">${encerramento1(new Date('14,04,2024'), new Date())} DIAS</i> Tarefa 2 (Etapa 2)`

//end 3
document.getElementById("encerramento3").innerHTML=`Faltam <i class="#e040fb purple accent-2">${encerramento1(new Date('02,06,2024'), new Date())} DIAS</i> Tarefa 3 (Etapa 3)`

//end 4
document.getElementById("encerramento4").innerHTML=`Faltam <i class="#e040fb purple accent-2">${encerramento1(new Date('23,06,2024'), new Date())} DIAS</i> Tarefa 4 (Etapa 4)`

//end 5
//document.getElementById("encerramento5").innerHTML=`Faltam <i class="#e040fb purple accent-2">${encerramento1(new Date('23/06/24'), new Date())} DIAS</i> Tarefa 5 (Etapa 5)`
