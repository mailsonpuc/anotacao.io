function encerramento1(date_1, date_2){

    let difference = date_1.getTime() - date_2.getTime()

    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24))

    return TotalDays;

}

document.getElementById("encerramento1").innerHTML=`<s>Faltam <i class="#e040fb purple accent-2">${encerramento1(new Date('2023,09,03'), new Date())} DIAS</i> para Etapa 1:

Análise e especificação do problema</s>`



function encerramento2(date_1, date_2){
    let difference = date_1.getTime() - date_2.getTime()

    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24))

    return TotalDays;

}


document.getElementById("encerramento2").innerHTML=`Faltam <i class="#e040fb purple accent-2">${encerramento1(new Date('2023,09,24'), new Date())} DIAS</i> para Etapa 2:

Projeto dos requisitos e de artefatos do sistema`




function encerramento3(date_1, date_2){
    let difference = date_1.getTime() - date_2.getTime()

    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24))

    return TotalDays;

}

document.getElementById("encerramento3").innerHTML=`Faltam <i class="#e040fb purple accent-2">${encerramento1(new Date('2023,10,29'), new Date())} DIAS</i> para Etapa 3:

Desenvolvimento da solução (Parte 1)`








function encerramento4(date_1, date_2){
    let difference = date_1.getTime() - date_2.getTime()

    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24))

    return TotalDays;

}

document.getElementById("encerramento4").innerHTML=`Faltam <i class="#e040fb purple accent-2">${encerramento1(new Date('2023,11,26'), new Date())} DIAS</i> para Etapa 4:

Desenvolvimento da solução (Parte 2)`






function encerramento5(date_1, date_2){
    let difference = date_1.getTime() - date_2.getTime()

    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24))

    return TotalDays;

}

document.getElementById("encerramento5").innerHTML=`Faltam <i class="#e040fb purple accent-2">${encerramento1(new Date('2023,12,10'), new Date())} DIAS</i> para Etapa 5:

Apresentação da solução`
