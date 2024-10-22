function inverterString(input: string): string {
    let stringInvertida = '';
    
    // Percorre a string de trás para frente
    for (let i = input.length - 1; i >= 0; i--) {
        stringInvertida += input[i]; // Adiciona o caractere atual à nova string
    }
    
    return stringInvertida;
}

// Exemplo de uso com uma string previamente definidagit
const stringOriginal = 'Hello, World!';
const stringInversa = inverterString(stringOriginal);

console.log(`String original: ${stringOriginal}`);
console.log(`String invertida: ${stringInversa}`);
