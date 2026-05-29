const alunos = [
    { nome: "Ana", nota: 8 },
    { nome: "João", nota: 5 },
    { nome: "Maria", nota: 7 }
];

const aprovados = alunos
    .filter(a => a.nota >= 7)
    .map(a => a.nome);