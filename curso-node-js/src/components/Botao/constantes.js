// É usado como estilo "enum" para definir os tipos de botões disponíveis no sistema
// O "Object.freeze" é usado para evitar que o objeto seja modificado em tempo de execução para não ocorrer divergência no código
// Acaba tornando o objeto imutável, o que é uma boa prática para evitar erros
export const TIPOS_BOTAO = Object.freeze({
    PRIMARIO: "primario",
    SECUNDARIO: "secundario",
});
