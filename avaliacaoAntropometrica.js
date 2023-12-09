

function calculosAntropometricos(){
    // ## ENTRADA DE DADOS ##
    //Captura entradas de nome
    let nome = document.querySelector("#inNome").value;
    // Verifica se a opção masculino ou feminino foi marcada
    let rbMasculino = document.getElementById("rbMasc");
    let masculino = rbMasculino.checked;
    let rbFeminino = document.getElementById("rbFem");
    let feminino = rbFeminino.checked;
    // captura o Peso Atual e Peso Usual
    let pa = Number(document.querySelector("#inPA").value);
    let pu = Number(document.querySelector("#inPU").value);
    // Verifica se alguma opção de Perda de Peso foi marcada
    var umaSemana = rb1Semana.checked;
    var umMes = rb1Mes.checked;
    var tresMeses = rb3Meses.checked;
    var seisMeses = rb6Meses.checked;
    // Entrada dos demais dados do paciente
    let idade = Number(document.querySelector("#inIdade").value);
    let est = Number(document.querySelector("#inEst").value);
    let cb = Number(document.querySelector("#inCB").value);
    let ca = Number(document.querySelector("#inCA").value);
    let cc = Number(document.querySelector("#inCC").value);
    let cq = Number(document.querySelector("#inCQ").value);
    let pcb = Number(document.querySelector("#inPCB").value);
    let pct = Number(document.querySelector("#inPCT").value);
    let dcse = Number(document.querySelector("#inDCSE").value);
    let dcsi = Number(document.querySelector("#inDCSI").value);
    
    // ## VERIFICAÇÃO SE OS DADOS FORAM INSERIDOS CORRETAMENTE ##
    /* Caso o elemento não for preenchido ou for preenchido de maneira incorreta,
    exigirá do usuário o preenchimento do campo */
    if (nome.value == "" || (masculino == false && feminino == false)) {
        alert("Por favor, informe o nome e selecione o sexo...");
        inNome.focus(); // posiciona (joga o foco) no campo de edição inNome
    return;
    }
    if (inPA.value == "" || isNaN(pa)) {
        alert("Informe o 'Peso atual' corretamente"); // exibe alerta
        inPA.focus(); // posiciona (joga o foco) no campo de edição inpa
        return;
    }
    if (inPU.value == "" || isNaN(pu)) {
        alert("Informe o 'Peso usual' corretamente"); // exibe alerta
        inPU.focus(); // posiciona (joga o foco) no campo de edição inpu
        return;
    }

    // Verifica se a opção de tempo da perda de peso foi marcada, em caso de perda de peso
    if(pa < pu && (umaSemana == false && umMes == false && tresMeses == false && seisMeses == false)){
        alert("Paciente perdeu peso. Favor marcar a opção do tempo da perda");
        inNome.focus();
        return;
    }

    if (inIdade.value == "" || isNaN(idade)) {
        alert("Informe a 'Idade' corretamente"); // exibe alerta
        inIdade.focus(); // posiciona (joga o foco) no campo de edição inIdade
        return;
    }
    if (idade < 18 || idade > 60) {
        alert("Paciente fora da faixa etária. Informe 'Idade' entre 18 e 60 anos"); // exibe alerta
        inIdade.focus(); // posiciona (joga o foco) no campo de edição inIdade
        return;
    }
    if (inEst.value == "" || isNaN(est)) {
        alert("Informe a 'Altura' corretamente"); // exibe alerta
        inEst.focus(); // // posiciona (joga o foco) no campo de edição inEstatura
        return;
    }
    if (inCB == "" || isNaN(cb)) {
        alert("Informe a 'Circunferência do Braço' corretamente"); // exibe alerta
        inCB.focus(); // // posiciona (joga o foco) no campo de edição inCB
        return;
    }
    if (inCC.value == "" || isNaN(cc)) {
        alert("Informe a 'Circunferência da Cintura' corretamente"); // exibe alerta
        inCC.focus(); // // posiciona (joga o foco) no campo de edição inCC
        return;
    }
    if (inCQ.value == "" || isNaN(cq)) {
        alert("Informe a 'Circunferência do Quadril' corretamente"); // exibe alerta
        inCQ.focus(); // // posiciona (joga o foco) no campo de edição inCQ
        return;
    }
    if (inPCB.value == "" || isNaN(pcb)) {
        alert("Informe a 'Prega Cutânea Biciptal' corretamente"); // exibe alerta
        inPCB.focus(); // // posiciona (joga o foco) no campo de edição inPCB
        return;
    }
    if (inPCT.value == "" || isNaN(pct)) {
        alert("Informe a 'Prega Cutânea Tricipital' corretamente"); // exibe alerta
        inPCT.focus(); // // posiciona (joga o foco) no campo de edição inPCT
        return;
    }
    if (inDCSE.value == "" || isNaN(dcse)) {
        alert("Informe a 'Dobra Cutânea Sub Escapular' corretamente"); // exibe alerta
        inDCSE.focus(); // // posiciona (joga o foco) no campo de edição inDCSE
        return;
    }
    if (inDCSI.value == "" || isNaN(dcsi)) {
        alert("Informe a 'Dobra Cutânea Supra Ilíaca' corretamente"); // exibe alerta
        inDCSI.focus(); // // posiciona (joga o foco) no campo de edição inDCSI
        return;
    }

    /* FÓRMULAS DE CÁLCULOS ANTROPOMÉTRICOS */
    // PASSO 1 - Calculo de peso ideal teórico conforme o sexo
    if (masculino) {
        PICalc = Number(22 * Math.pow(est, 2)); // Math.pow '2' eleva ao quadrado
    }
    if(feminino){
        PICalc = Number(21 * Math.pow(est, 2));
    }
    // PASSO 2 - Cálculo da faixa de Peso Saudável Mínimo e Máximo
    let psMin = Number(est * est * 18.5); //Cálculo de Peso Saudável Mínimo
    let psMax = Number(est * est * 24.9); //Cálculo de Peso Saudável Máximo
    
    // PASSO 3 - Calculo de Índice de Massa Corpórea (IMC)
    let imc = Number(pa/(Math.pow(est, 2)));

    // PASSO 4 - Classificação do Índice de Massa Corpórea (IMC)
    if(imc >= 40.00){
        IMCClass = "Obesidade grau III";
    }
    if(imc >= 35.00 && imc <= 39.99){
        IMCClass = "Obesidade grau II";
    }
    if(imc >= 30.00 && imc <= 34.99){
        IMCClass = "Obesidade grau I";
    }
    if(imc >= 25.00 && imc <= 29.99){
        IMCClass = "Sobrepeso";
    }
    if(imc >= 18.50 && imc <= 24.99){
        IMCClass = "Eutrofia";
    }
    if(imc >= 17.00 && imc <= 18.49){
        IMCClass = "Magreza Grau I";
    }
    if(imc >= 16.00 && imc <= 16.99){
        IMCClass = "Magreza grau II";
    }
    if(imc <= 16.00){
        IMCClass = "Magreza grau III";
    }

    // PASSO 5 - Cálculo de Adequação de peso (AP(%))
    let adeqPeso = Number((pa / PICalc) * 100);

    //Mensagem caso a Adequação de Peso for inferior a 95% ou superior a 115%
    notaAdeqPeso = Number(adeqPeso);
    if(notaAdeqPeso < 95.00 || notaAdeqPeso > 115.00){
        alertAdeqPeso = "Nota: Adequação de Peso inferior a 95% ou superior a 115%, recomenda-se calcular o Peso Ajustado"
    }
    else{
        alertAdeqPeso = "";
    }

    // PASSO 6 - Classificação do estado nutricional de acordo com a adequação de peso
    if(adeqPeso > 120){
        clasAdeqPeso = "Obesidade";
    }
    if(adeqPeso >= 110.10 && adeqPeso <= 120.00){
        clasAdeqPeso = "Sobrepeso";
    }
    if(adeqPeso >= 90.10 && adeqPeso <= 110.00){
        clasAdeqPeso = "Eutrofia";
    }
    if(adeqPeso >= 80.10 && adeqPeso <= 90.00){
        clasAdeqPeso = "Desnutrição leve";
    }
    if(adeqPeso >= 70.10 && adeqPeso <= 80.00){
        clasAdeqPeso = "Desnutrição moderada";
    }
    if(adeqPeso <= 70.00){
        clasAdeqPeso = "Desnutrição grave"
    }

    // PASSO 7 - Cálculo do Peso Ajustado (PAju)
    let PAju = Number(((PICalc - pa) * 0.25) + pa);

    // PASSO 8 - Cálculo de mudança de peso (em casos de perda de peso)
    if(pa < pu){
        perdaPeso = (((pu - pa) / pu) * 100).toFixed(2);
    }
    if(pa == pu){
        perdaPeso = "Paciente com mesmo peso"
    }
    if(pa > pu){
        perdaPeso = "Paciente ganhou peso"
    }

    // PASSO 9 - PERDA DE PESO EM RELAÇÃO AO TEMPO (%)
    // Nota: Essa função depende do resultado da condição acima (PASSO 8 - Mudança de peso)
   
    // Perda de peso em relação ao tempo durante 7 dias
    if(pa < pu && (umaSemana == true) && (perdaPeso >= 1.00 && perdaPeso <= 2.00)){
        pprt = "PPRT: Perda significativa de peso"
    }
    if(pa < pu && (umaSemana == true) && (perdaPeso > 2.00)){
        pprt = "PPRT: Perda grave de peso"
    }
    // Perda de peso em relação ao tempo durante 30 dias
    if(pa < pu && (umMes == true) && (perdaPeso <= 5.00)){
        pprt = "PPRT: Perda significativa de peso"
    }
    if(pa < pu && (umMes == true) && (perdaPeso > 5.00)){
        pprt = "PPRT: Perda grave de peso"
    }
    // Perda de peso em relação ao tempo durante 90 dias (3 meses)
    if(pa < pu && (tresMeses == true) && (perdaPeso >= 7.50)){
        pprt = "PPRT: Perda significativa de peso"
    }
    if(pa < pu && (tresMeses == true) && (perdaPeso > 7.50)){
        pprt = "PPRT: Perda grave de peso"
    }
    // Perda de peso em relação ao tempo durante 180 dias (6 meses)
    if(pa < pu && (seisMeses == true) && (perdaPeso >= 10.00)){
        pprt = "PPRT: Perda significativa de peso"
    }
    if(pa < pu && (seisMeses == true) && (perdaPeso > 10.00)){
        pprt = "PPRT: Perda grave de peso"
    }
    if(pa == pu){
        pprt = "PPRT: Paciente com o mesmo peso"
    }
    if (pa > pu){
        pprt = "PPRT: Paciente ganhou peso"
    }

    // PASSOS 10 E 11 - Adequação da CB
    // Tabela de percentil 50 da Adequação da Circunferência do Braço, para mulheres
    if(idade >= 18.00 && idade <= 24.99 && (feminino == true)){
        adeqCB50 = 26.80;
    }
    if(idade >= 25.00 && idade <= 29.99 && (feminino == true)){
        adeqCB50 = 27.60;
    }
    if(idade >= 30.00 && idade <= 34.99 && (feminino == true)){
        adeqCB50 = 28.60;
    }
    if(idade >= 35.00 && idade <= 39.99 && (feminino == true)){
        adeqCB50 = 29.40;
    }
    if(idade >= 40.00 && idade <= 44.99 && (feminino == true)){
        adeqCB50 = 29.70;
    }
    if(idade >= 45.00 && idade <= 49.99 && (feminino == true)){
        adeqCB50 = 30.10;
    }
    if(idade >= 50.00 && idade <= 54.99 && (feminino == true)){
        adeqCB50 = 30.60;
    }
    if(idade >= 55.00 && idade <= 59.99 && (feminino == true)){
        adeqCB50 = 30.90;
    }
    // Tabela de percentil 50 da Adequação da Circunferência do Braço, para homens
    if(idade >= 18.00 && idade <= 24.99 && (masculino == true)){
        adeqCB50 = 30.70;
    }
    if(idade >= 25.00 && idade <= 29.99 && (masculino == true)){
        adeqCB50 = 31.80;
    }
    if(idade >= 30.00 && idade <= 34.99 && (masculino == true)){
        adeqCB50 = 32.50;
    }
    if(idade >= 35.00 && idade <= 39.99 && (masculino == true)){
        adeqCB50 = 32.90;
    }
    if(idade >= 40.00 && idade <= 44.99 && (masculino == true)){
        adeqCB50 = 32.80;
    }
    if(idade >= 45.00 && idade <= 49.99 && (masculino == true)){
        adeqCB50 = 32.60;
    }
    if(idade >= 50.00 && idade <= 54.99 && (masculino == true)){
        adeqCB50 = 32.30;
    }
    if(idade >= 55.00 && idade <= 59.99 && (masculino == true)){
        adeqCB50 = 32.30;
    }

    // Calcula a Adequação da Circuferência do Braço (%)
    var adeqCB = (cb / adeqCB50) * 100;

    // Tabela para classificar a Circunferência do Braço (CB%)
    if(adeqCB < 70.00){
        cbClass = "Desnutrição Grave"
    }
    if(adeqCB >= 70.00 && adeqCB <= 80.00){
        cbClass = "Desnutrição Moderada"
    }
    if(adeqCB > 80.00 && adeqCB <= 90.00){
        cbClass = "Desnutrição Leve"
    }
    if(adeqCB > 90.00 && adeqCB <= 110.00){
        cbClass = "Eutrofia"
    }
    if(adeqCB > 110.00 && adeqCB <= 120.00){
        cbClass = "Sobrepeso"
    }
    if(adeqCB > 120.00){
        cbClass = "Obesidade"
    }

    // PASSO 12 E 13 - Adequação e Classificação da PCT
    // Tabela de percentil 50 da PCT para o sexo feminino
    if(idade >= 18.00 && idade <= 24.99 && (feminino == true)){
        adeqPCT50 = 18.50;
    }
    if(idade >= 25.00 && idade <= 29.99 && (feminino == true)){
        adeqPCT50 = 20.00;
    }
    if(idade >= 30.00 && idade <= 34.99 && (feminino == true)){
        adeqPCT50 = 22.50;
    }
    if(idade >= 35.00 && idade <= 39.99 && (feminino == true)){
        adeqPCT50 = 23.50;
    }
    if(idade >= 40.00 && idade <= 44.99 && (feminino == true)){
        adeqPCT50 = 24.50;
    }
    if(idade >= 45.00 && idade <= 49.99 && (feminino == true)){
        adeqPCT50 = 25.50;
    }
    if(idade >= 50.00 && idade <= 54.99 && (feminino == true)){
        adeqPCT50 = 26.00;
    }

    // Tabela de percentil 50 da PCT para o sexo masculino
    if(idade >= 18.00 && idade <= 24.99 && (masculino == true)){
        adeqPCT50 = 10.00;
    }
    if(idade >= 25.00 && idade <= 29.99 && (masculino == true)){
        adeqPCT50 = 11.00;
    }
    if(idade >= 30.00 && idade <= 34.99 && (masculino == true)){
        adeqPCT50 = 12.00;
    }
    if(idade >= 35.00 && idade <= 39.99 && (masculino == true)){
        adeqPCT50 = 12.00;
    }
    if(idade >= 40.00 && idade <= 44.99 && (masculino == true)){
        adeqPCT50 = 12.00;
    }
    if(idade >= 45.00 && idade <= 49.99 && (masculino == true)){
        adeqPCT50 = 12.00;
    }
    if(idade >= 50.00 && idade <= 54.99 && (masculino == true)){
        adeqPCT50 = 11.50;
    }
    if(idade >= 55.00 && idade <= 59.99 && (masculino == true)){
        adeqPCT50 = 11.50;
    }

    // Calculo de Adequação da Prega Cutânea Triciptal
    var adeqPCT = (pct / adeqPCT50) * 100;

    // Tabela do Estado Nutricional conforme a DCT
    if (adeqPCT < 70.00){
        estNutDCT = "Desnutrição Grave"
    }
    if (adeqPCT >= 70.00 && adeqPCT <= 79.99){
        estNutDCT = "Desnutrição Moderada"
    }
    if (adeqPCT >= 80.00 && adeqPCT <= 89.99){
        estNutDCT = "Desnutrição Leve"
    }
    if (adeqPCT >= 90.00 && adeqPCT <= 109.99){
        estNutDCT = "Eutrofia"
    }
    if (adeqPCT >= 110.00 && adeqPCT <= 120.00){
        estNutDCT = "Sobrepeso"
    }
    if (adeqPCT > 120.00){
        estNutDCT = "Obesidade"
    }

    // PASSO 14 - Cálculo da CMB
    var cmbCalc = cb - (3.14*(pct / 10));

    // Tabela de percentil 50 de Classificação da CMB para mulheres
    if(idade >= 18.00 && idade <= 18.99 && (feminino == true)){
        adeqCMB50 = 20.20;
    }
    if(idade >= 19.00 && idade <= 24.99 && (feminino == true)){
        adeqCMB50 = 20.70;
    }
    if(idade >= 25.00 && idade <= 34.99 && (feminino == true)){
        adeqCMB50 = 21.20;
    }
    if(idade >= 35.00 && idade <= 44.99 && (feminino == true)){
        adeqCMB50 = 21.80;
    }
    if(idade >= 45.00 && idade <= 54.99 && (feminino == true)){
        adeqCMB50 = 22.00;
    }
    if(idade >= 55.00 && idade <= 64.99 && (feminino == true)){
        adeqCMB50 = 22.50;
    }

    // Tabela de percentil 50 de Classificação da CMB para homens
    if(idade >= 18.00 && idade <= 18.99 && (masculino == true)){
        adeqCMB50 = 26.40;
    }
    if(idade >= 19.00 && idade <= 24.99 && (masculino == true)){
        adeqCMB50 = 27.30;
    }
    if(idade >= 25.00 && idade <= 34.99 && (masculino == true)){
        adeqCMB50 = 27.90;
    }
    if(idade >= 35.00 && idade <= 44.99 && (masculino == true)){
        adeqCMB50 = 28.60;
    }
    if(idade >= 45.00 && idade <= 54.99 && (masculino == true)){
        adeqCMB50 = 28.10;
    }
    if(idade >= 55.00 && idade <= 64.99 && (masculino == true)){
        adeqCMB50 = 27.80;
    }
    
    // 15º PASSO - Cálculo de adequação da CMB (%)
    var adeqCMB = Number((cmbCalc / adeqCMB50) * 100);

    // 16º PASSO - Tabela classificação do Estado Nutricional segundo a CMB
    if(adeqCMB < 70.00){
        classCMB = "Desnutrição Grave"
    }
    if(adeqCMB >= 70.00 && adeqCMB <= 79.99){
        classCMB = "Desnutrição Moderada"
    }
    if(adeqCMB >= 80.00 && adeqCMB <= 89.99){
        classCMB = "Desnutrição Leve"
    }
    if(adeqCMB >= 90){
        classCMB = "Eutrofia"
    }

    // 17º PASSO - Área Muscular do Braço Corrigida - AMBc
    if (feminino){
        ambc = Number(((Math.pow((cb - Math.PI * pct / 10), 2)) / (4 * Math.PI)) - 6.50)
    }
    if (masculino){
        ambc = Number(((Math.pow((cb - Math.PI * pct / 10), 2)) / (4 * Math.PI)) - 10.00)
    }
    console.log(ambc)
    // 18º PASSO - Classificação Nutricional Segundo a AMBc
    // Tabela do percentil da AMBc para mulheres
    if(idade >= 18.00 && idade <= 24.99 && (feminino == true)){
        if(ambc <= 19.49){
            ambcPercent = 0 // 0 colocado apenas para indicar que percentil é menor que 5
        }
        if(ambc >= 19.50 && ambc <= 21.49){
            ambcPercent = 5
        }
        if(ambc >= 21.50 && ambc <= 22.79){
            ambcPercent = 10
        }
        if(ambc == 22.80){
            ambcPercent = 15
        }
        if(ambc > 22.80)
            ambcPercent = 16.00 // 16 colocado apenas para indicar que o Percentil 50 da AMBc é maior que 15
    }
    if(idade >= 25.00 && idade <= 29.99 && (feminino == true)){
        if(ambc <= 20.49){
            ambcPercent = 0
        }
        if(ambc >= 20.50 && ambc <= 21.89){
            ambcPercent = 5
        }
        if(ambc >= 21.90 && ambc <= 23.09){
            ambcPercent = 10
        }
        if(ambc == 23.10){
            ambcPercent = 15
        }
        if(ambc > 23.10){
            ambcPercent = 16.00
        }
    }
    if(idade >= 30.00 && idade <= 34.99 && (feminino == true)){
        if(ambc <= 21.09){
            ambcPercent = 0
        }
        if(ambc >= 21.10 && ambc <= 22.99){
            ambcPercent = 5
        }
        if(ambc >= 23.00 && ambc <= 24.19){
            ambcPercent = 10
        }
        if(ambc == 24.00){
            ambcPercent = 15
        }
        if(ambc > 24.00){
            ambcPercent = 16.00
        }
    }
    if(idade >= 35.00 && idade <= 39.99 && (feminino == true)){
        if(ambc <= 21.09){
            ambcPercent = 0
        }
        if(ambc >= 21.10 && ambc <= 23.39){
            ambcPercent = 5
        }
        if(ambc >= 23.40 && ambc <= 23.69){
            ambcPercent = 10
        }
        if(ambc == 24.70){
            ambcPercent = 15
        }
        if(ambc > 24.70){
            ambcPercent = 16.00
        }
    }
    if(idade >= 40.00 && idade <= 44.99 && (feminino == true)){
        if(ambc <= 21.29){
            ambcPercent = 0
        }
        if(ambc >= 21.30 && ambc <= 23.39){
            ambcPercent = 5
        }
        if(ambc >= 23.40 && ambc <= 25.49){
            ambcPercent = 10
        }
        if(ambc == 25.50){
            ambcPercent = 15
        }
        if(ambc > 25.50){
            ambcPercent = 16.00
        }
    }
    if(idade >= 45.00 && idade <= 49.99 && (feminino == true)){
        if(ambc <= 21.59){
            ambcPercent = 0
        }
        if(ambc >= 21.60 && ambc <= 23.09){
            ambcPercent = 5
        }
        if(ambc >= 23.10 && ambc <= 24.79){
            ambcPercent = 10
        }
        if(ambc == 24.80){
            ambcPercent = 15
        }
        if(ambc > 24.80){
            ambcPercent = 16.00
        }
    }
    if(idade >= 50.00 && idade <= 54.99 && (feminino == true)){
        if(ambc <= 21.19){
            ambcPercent = 0
        }
        if(ambc >= 22.20 && ambc <= 24.59){
            ambcPercent = 5
        }
        if(ambc >= 24.60 && ambc <= 25.69){
            ambcPercent = 10
        }
        if(ambc == 25.70){
            ambcPercent = 15
        }
        if(ambc > 25.70){
            ambcPercent = 16.00
        }
    }
    if(idade >= 55.00 && idade <= 59.99 && (feminino == true)){
        if(ambc <= 22.79){
            ambcPercent = 0
        }
        if(ambc >= 22.80 && ambc <= 24.79){
            ambcPercent = 5
        }
        if(ambc >= 24.80 && ambc <= 26.49){
            ambcPercent = 10
        }
        if(ambc == 26.50){
            ambcPercent = 15
        }
        if(ambc > 26.50){
            ambcPercent = 16.00
        }
    }

    // Tabela do percentil da AMBc para Homens
    if(idade >= 18.00 && idade <= 24.99 && (masculino == true)){
        if(ambc <= 34.19){
            ambcPercent = 0 // 0 colocado apenas para indicar que percentil é menor que 5
        }
        if(ambc >= 34.20 && ambc <= 37.29){
            ambcPercent = 5
        }
        if(ambc >= 37.30 && ambc <= 39.59){
            ambcPercent = 10
        }
        if(ambc == 39.60){
            ambcPercent = 15
        }
        if(ambc > 39.60)
            ambcPercent = 16.00 // 16 colocado apenas para indicar que o Percentil 50 da AMBc é maior que 15
    }
    if(idade >= 25.00 && idade <= 29.99 && (masculino == true)){
        if(ambc <= 36.59){
            ambcPercent = 0
        }
        if(ambc >= 36.60 && ambc <= 39.89){
            ambcPercent = 5
        }
        if(ambc >= 39.90 && ambc <= 42.39){
            ambcPercent = 10
        }
        if(ambc == 42.40){
            ambcPercent = 15
        }
        if(ambc > 42.40){
            ambcPercent = 16.00
        }
    }
    if(idade >= 30.00 && idade <= 34.99 && (masculino == true)){
        if(ambc <= 37.89){
            ambcPercent = 0
        }
        if(ambc >= 37.90 && ambc <= 40.89){
            ambcPercent = 5
        }
        if(ambc >= 40.90 && ambc <= 43.39){
            ambcPercent = 10
        }
        if(ambc == 43.40){
            ambcPercent = 15
        }
        if(ambc > 43.40){
            ambcPercent = 16.00
        }
    }
    if(idade >= 35.00 && idade <= 39.99 && (masculino == true)){
        if(ambc <= 38.49){
            ambcPercent = 0
        }
        if(ambc >= 38.50 && ambc <= 42.59){
            ambcPercent = 5
        }
        if(ambc >= 42.60 && ambc <= 44.59){
            ambcPercent = 10
        }
        if(ambc == 44.60){
            ambcPercent = 15
        }
        if(ambc > 44.60){
            ambcPercent = 16.00
        }
    }
    if(idade >= 40.00 && idade <= 44.99 && (masculino == true)){
        if(ambc <= 38.39){
            ambcPercent = 0
        }
        if(ambc >= 38.40 && ambc <= 42.09){
            ambcPercent = 5
        }
        if(ambc >= 42.10 && ambc <= 45.09){
            ambcPercent = 10
        }
        if(ambc == 45.10){
            ambcPercent = 15
        }
        if(ambc > 45.10){
            ambcPercent = 16.00
        }
    }
    if(idade >= 45.00 && idade <= 49.99 && (masculino == true)){
        if(ambc <= 37.69){
            ambcPercent = 0
        }
        if(ambc >= 37.70 && ambc <= 41.29){
            ambcPercent = 5
        }
        if(ambc >= 41.30 && ambc <= 43.69){
            ambcPercent = 10
        }
        if(ambc == 43.70){
            ambcPercent = 15
        }
        if(ambc > 43.70){
            ambcPercent = 16.00
        }
    }
    if(idade >= 50.00 && idade <= 54.99 && (masculino == true)){
        if(ambc <= 35.99){
            ambcPercent = 0
        }
        if(ambc >= 36.00 && ambc <= 39.99){
            ambcPercent = 5
        }
        if(ambc >= 40.00 && ambc <= 42.69){
            ambcPercent = 10
        }
        if(ambc == 42.70){
            ambcPercent = 15
        }
        if(ambc > 42.70){
            ambcPercent = 16.00
        }
    }
    if(idade >= 55.00 && idade <= 59.99 && (masculino == true)){
        if(ambc <= 36.49){
            ambcPercent = 0
        }
        if(ambc >= 36.50 && ambc <= 40.79){
            ambcPercent = 5
        }
        if(ambc >= 40.80 && ambc <= 42.69){
            ambcPercent = 10
        }
        if(ambc == 42.70){
            ambcPercent = 15
        }
        if(ambc > 42.70){
            ambcPercent = 16.00
        }
    }

    // 18º PASSO (continuação) - Classificação Nutricional Segundo a AMBc
    if(ambcPercent < 5){
        ambcClassific = "Desnutrição grave (percentil < 5)"
    }
    if(ambcPercent >= 5 && ambcPercent <= 15){
        ambcClassific = "Desnutrição leve/moderada (percentil entre 5 e 15)"
    }
    if(ambcPercent > 15){
        ambcClassific = "Percentil Normal (Percentil > 15)"
    }
    
    // 19º PASSO - Área de gordura do Braço - AGB
    let agb = Number(((cb*(pct/10))/2) - ((Math.PI * (Math.pow(pct/10),2)) / 4))

    // 20º PASSO - Classificação da AGB

    // Tabela de percentil AGB - Mulheres
    if(idade >= 18.00 && idade <= 24.99 && (feminino == true)){
        if(agb <= 9.99){
            agbPercent = 4 // Número 4 colocado apenas para indicar que o percentil é menor que 5
        }
        if(agb >= 10.00 && agb <= 11.99){
            agbPercent = 5 // P5-P10 (percentil entre 5 e 10)
        }
        if(agb >= 12.00 && agb <= 13.49){
            agbPercent = 10 // P10-P15 (percentil entre 10 e 15)
        }
        if(agb >= 13.50 && agb <= 16.09){
            agbPercent = 15 // P15-P25
        }
        if(agb >= 16.10 && agb <= 21.89){
            agbPercent = 25 // P25-P50
        }
        if(agb >= 21.90 && agb <= 30.59){
            agbPercent = 50 // P50-P75
        }
        if(agb >= 30.60 && agb <= 37.19){
            agbPercent = 75 // P75-P85
        }
        if(agb >= 37.20 && agb <= 41.99){
            agbPercent = 85 // P85-P90
        }
        if(agb >= 42.00 && agb <= 51.59){
            agbPercent = 90 // P90-P95
        }
        if(agb >= 51.60){
            agbPercent = 95 // P95
        }
    }
    // saída de resultados
    outPI.textContent = `1. Peso Ideal/Teórico (Kg): ${PICalc.toFixed(2)}`;
    outPSMin.textContent = `2.1. Peso Saudável Mínimo (Kg): ${psMin.toFixed(2)}`
    outPSMax.textContent = `2.2. Peso Saudável Máximo (Kg): ${psMax.toFixed(2)}`
    outIMC.textContent = `3. IMC (Kg/m²): ${imc.toFixed(2)}`;
    outIMCClas.textContent = `4. Classificação do IMC: ${IMCClass}`
    outAdeqPeso.textContent = `5. Adequação de Peso (%): ${adeqPeso.toFixed(2)}`
    outAdeqPesoAlert.textContent = `${alertAdeqPeso}`
    outAdeqPesoClas.textContent = `6. Classificação conforme a AP: ${clasAdeqPeso}`
    outPAju.textContent = `7. Peso Ajustado: ${PAju.toFixed(2)}`
    outPP.textContent = `8. Perda de peso (%): ${perdaPeso}`
    outPPRT.textContent = `9. ${pprt}`
    outCBAdeq.textContent = `10. Adequação da CB(%): ${adeqCB.toFixed(2)}`
    outCBClass.textContent = `11. Estado Nutricional conforme CB: ${cbClass}`
    outPCTAdeq.textContent = `12. Adeq. PCT(%): ${adeqPCT.toFixed(2)}`
    outDCTEn.textContent = `13. Classific. EN conforme DCT: ${estNutDCT}`
    outCMBCalc.textContent = `14. CMB(cm): ${cmbCalc.toFixed(2)}`
    outCMBClass.textContent = `15. Estado Nutricional Segundo a CMB (%): ${adeqCMB.toFixed(2)}`
    outCMBAdeq.textContent = `16. Estado NUtricional Conforme CMB: ${classCMB}`
    console.log(ambc)
    outAMBC.textContent = `17. AMBC(cm²): ${ambc.toFixed(2)}`
    outAMBCClass.textContent = `18. AMBc Classificação: ${ambcClassific}`
    outAGB.textContent = `19. AGB (cm²): ${agb.toFixed(2)}`
}
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calculosAntropometricos);
/*
// Function Calcular PI
function PI(){
    let est = document.querySelector("#inEst").value;

    const pi = est * est * 21.00;

    outPI.textContent = `PI(Kg): ${pi.toFixed(2)}`;
}
btCalc.addEventListener("click", PI);


// Function Calcular IMC
function IMC(){
    let est = document.querySelector("#inEst").value;

    const imc = est * est * 24.90;
    outIMC.textContent = `IMC(Kg/m²): ${imc.toFixed(2)}`;
}
let btResultado = document.getElementById("btCalc");
btCalc.addEventListener("click", IMC, PI); */