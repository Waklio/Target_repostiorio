interface Estado {
    nome: string;
    faturamento: number;
}

const faturamentoMensal: Estado[] = [
    { nome: 'SP', faturamento: 67836.43 },
    { nome: 'RJ', faturamento: 36678.66 },
    { nome: 'MG', faturamento: 29229.88 },
    { nome: 'ES', faturamento: 27165.48 },
    { nome: 'Outros', faturamento: 19849.53 }
];

function calcularPercentuais(faturamento: Estado[]) {
    const totalFaturamento = faturamento.reduce((total, estado) => total + estado.faturamento, 0);
    
    faturamento.forEach(estado => {
        const percentual = (estado.faturamento / totalFaturamento) * 100;
        console.log(`Percentual de ${estado.nome}: ${percentual.toFixed(2)}%`);
    });
}


calcularPercentuais(faturamentoMensal);
