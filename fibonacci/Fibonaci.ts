function fibonacci(n: number): number[] {
    const sequence: number[] = [0, 1];

    while (true) {
        const next = sequence[sequence.length - 1] + sequence[sequence.length - 2];
        if (next > n) break; // Para quando o próximo número é maior que n
        sequence.push(next);
    }

    return sequence;
}

function belongsToFibonacci(n: number): boolean {
    const fibSequence = fibonacci(n);
    return fibSequence.includes(n);
}

// Exemplo de uso:
const inputNumber = 21; // é possível alterar este valor para testar
const isInFibonacci = belongsToFibonacci(inputNumber);

if (isInFibonacci) {
    console.log(`${inputNumber} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${inputNumber} não pertence à sequência de Fibonacci.`);
}
