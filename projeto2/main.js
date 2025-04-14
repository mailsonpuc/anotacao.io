import { encerramento1, encerramento2 ,encerramento3, encerramento4, encerramento5, encerramento6 } from "./encerramento.js";



//end 1 dia/mes/ano
document.getElementById("encerramento1").innerHTML=`<del>Faltam <i class="#e040fb purple accent-2">${encerramento1(new Date('2025,03,09'), new Date())} DIAS</i> Tarefa 1 (Etapa 1)</del>`

//end 2
document.getElementById("encerramento2").innerHTML=`Faltam <i class="#e040fb purple accent-2">${encerramento1(new Date('2025,04,20'), new Date())} DIAS</i> Tarefa 2 (Etapa 2)`

//end 3
document.getElementById("encerramento3").innerHTML=`Faltam <i class="#e040fb purple accent-2">${encerramento1(new Date('2025,05,25'), new Date())} DIAS</i> Tarefa 3 (Etapa 3)`

//end 4
document.getElementById("encerramento4").innerHTML=`Faltam <i class="#e040fb purple accent-2">${encerramento1(new Date('2025,06,25'), new Date())} DIAS</i> Tarefa 4 (Etapa 4)`

//end 5
document.getElementById("encerramento5").innerHTML=`Faltam <i class="#e040fb purple accent-2">${encerramento1(new Date('2025,05,02'), new Date())} DIAS</i> 1ª Avaliação`

//end 6

document.getElementById("encerramento6").innerHTML=`Faltam <i class="#e040fb purple accent-2">${encerramento1(new Date('2025,06,06'), new Date())} DIAS</i> 2ª Avaliação`


document.getElementById("encerramento7").innerHTML=`Faltam <i class="#e040fb purple accent-2">${encerramento1(new Date('2025,06,15'), new Date())} DIAS</i> 3ª Avaliação`


document.getElementById("encerramento8").innerHTML=`Faltam <i class="#e040fb purple accent-2">${encerramento1(new Date('2025,06,29'), new Date())} DIAS</i> Re-Avaliação`
