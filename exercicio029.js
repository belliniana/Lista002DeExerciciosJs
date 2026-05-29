const alunosNotas = [
    { nome: "Ana", notas: [8, 9, 10] },
    { nome: "João", notas: [5, 6, 7] }
];

const medias = alunosNotas.map(aluno => ({
    nome: aluno.nome,
    media:
        aluno.notas.reduce((a, b) => a + b, 0) /
        aluno.notas.length
}));