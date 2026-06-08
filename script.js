// script.js

document.addEventListener('DOMContentLoaded', () => {
    console.log('🌱 Sistema de Gestão Agrícola Inteligente inicializado com sucesso!');

    // 1. Simulação de Dados de Sensores em Tempo Real (IoT)
    inicializarSensores();

    // 2. Simulador de Produtividade (Calculadora para o Produtor)
    const btnCalcular = document.getElementById('btn-calcular');
    if (btnCalcular) {
        btnCalcular.addEventListener('click', calcularProdutividade);
    }
});

/**
 * Atualiza falsos dados de sensores a cada 3 segundos para dar dinamismo ao site
 */
function inicializarSensores() {
    const umidadeElemento = document.getElementById('sensor-umidade');
    const tempElemento = document.getElementById('sensor-temp');
    const statusElemento = document.getElementById('status-irrigacao');

    if (!umidadeElemento || !tempElemento) return;

    setInterval(() => {
        // Gera valores realistas para o campo
        const umidadeAleatoria = (Math.random() * (80 - 40) + 40).toFixed(1);
        const tempAleatoria = (Math.random() * (35 - 18) + 18).toFixed(1);

        // Atualiza a interface
        umidadeElemento.textContent = `${umidadeAleatoria}%`;
        tempElemento.textContent = `${tempAleatoria}°C`;

        // Lógica de status inteligente
        if (umidadeAleatoria < 50) {
            statusElemento.textContent = "Irrigação Ativada Automática";
            statusElemento.style.color = "#2ecc71"; // Verde
        } else {
            statusElemento.textContent = "Solo Ideal - Sistemas em Standby";
            statusElemento.style.color = "#3498db"; // Azul
        }
    }, 3000);
}

/**
 * Calcula a estimativa de ganho com base na tecnologia aplicada
 */
function calcularProdutividade() {
    const hectares = parseFloat(document.getElementById('campo-hectares').value);
    const tipoTecnologia = document.getElementById('select-tech').value;
    const resultadoDiv = document.getElementById('resultado-calculo');

    if (isNaN(hectares) || hectares <= 0) {
        resultadoDiv.innerHTML = "<p style='color: #e74c3c;'>Por favor, insira uma quantidade de hectares válida.</p>";
        return;
    }

    let ganhoPorHectare = 0;
    let techNome = "";

    // Define os ganhos fictícios por tipo de tecnologia escolhida
    switch (tipoTecnologia) {
        case 'drones':
            ganhoPorHectare = 150; // R$ 150 a mais por hectare
            techNome = "Monitoramento por Drones";
            break;
        case 'iot':// script.js

document.addEventListener('DOMContentLoaded', () => {
    console.log('🌱 Sistema de Gestão Agrícola Inteligente inicializado com sucesso!');

    // 1. Simulação de Dados de Sensores em Tempo Real (IoT)
    inicializarSensores();

    // 2. Simulador de Produtividade (Calculadora para o Produtor)
    const btnCalcular = document.getElementById('btn-calcular');
    if (btnCalcular) {
        btnCalcular.addEventListener('click', calcularProdutividade);
    }
});

/**
 * Atualiza falsos dados de sensores a cada 3 segundos para dar dinamismo ao site
 */
function inicializarSensores() {
    const umidadeElemento = document.getElementById('sensor-umidade');
    const tempElemento = document.getElementById('sensor-temp');
    const statusElemento = document.getElementById('status-irrigacao');

    if (!umidadeElemento || !tempElemento) return;

    setInterval(() => {
        // Gera valores realistas para o campo
        const umidadeAleatoria = (Math.random() * (80 - 40) + 40).toFixed(1);
        const tempAleatoria = (Math.random() * (35 - 18) + 18).toFixed(1);

        // Atualiza a interface
        umidadeElemento.textContent = `${umidadeAleatoria}%`;
        tempElemento.textContent = `${tempAleatoria}°C`;

        // Lógica de status inteligente
        if (umidadeAleatoria < 50) {
            statusElemento.textContent = "Irrigação Ativada Automática";
            statusElemento.style.color = "#2ecc71"; // Verde
        } else {
            statusElemento.textContent = "Solo Ideal - Sistemas em Standby";
            statusElemento.style.color = "#3498db"; // Azul
        }
    }, 3000);
}

/**
 * Calcula a estimativa de ganho com base na tecnologia aplicada
 */
function calcularProdutividade() {
    const hectares = parseFloat(document.getElementById('campo-hectares').value);
    const tipoTecnologia = document.getElementById('select-tech').value;
    const resultadoDiv = document.getElementById('resultado-calculo');

    if (isNaN(hectares) || hectares <= 0) {
        resultadoDiv.innerHTML = "<p style='color: #e74c3c;'>Por favor, insira uma quantidade de hectares válida.</p>";
        return;
    }

    let ganhoPorHectare = 0;
    let techNome = "";

    // Define os ganhos fictícios por tipo de tecnologia escolhida
    switch (tipoTecnologia) {
        case 'drones':
            ganhoPorHectare = 150; // R$ 150 a mais por hectare
            techNome = "Monitoramento por Drones";
            break;
        case 'iot':