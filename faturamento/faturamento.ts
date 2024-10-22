// Dados de faturamento em formato JSON
const faturamentoDiarioJson = `{
    "faturamento": [
        {"dia": 1, "valor": 100.0},
        {"dia": 2, "valor": 200.0},
        {"dia": 3, "valor": 150.0},
        {"dia": 4, "valor": 0.0},
        {"dia": 5, "valor": 300.0},
        {"dia": 6, "valor": 0.0},
        {"dia": 7, "valor": 400.0},
        {"dia": 8, "valor": 250.0},
        {"dia": 9, "valor": 0.0},
        {"dia": 10, "valor": 350.0}
    ]
}`;

interface Faturamento {
    dia: number;
    valor: number;
}

function calcularFaturamento(faturamentoJson: string) {
    const dados = JSON.parse(faturamentoJson);
    const faturamento: Faturamento[] = dados.faturamento;

    const diasComFaturamento = faturamento.filter(f => f.valor > 0);
    
    const menorFaturamento = Math.min(...diasComFaturamento.map(f => f.valor));
    const maiorFaturamento = Math.max(...diasComFaturamento.map(f => f.valor));
    
    const totalFaturamento = diasComFaturamento.reduce((total, f) => total + f.valor, 0);
    const mediaMensal = totalFaturamento / diasComFaturamento.length;

    const diasAcimaDaMedia = diasComFaturamento.filter(f => f.valor > mediaMensal).length;

    console.log(`Menor faturamento: R$ ${menorFaturamento.toFixed(2)}`);
    console.log(`Maior faturamento: R$ ${maiorFaturamento.toFixed(2)}`);
    console.log(`Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`);
}


calcularFaturamento(faturamentoDiarioJson);
