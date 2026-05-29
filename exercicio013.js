const usuarios = [
  { id: 1, nome: "Ana" },
  { id: 2, nome: "João" },
  { id: 3, nome: "Maria" }
];

const buscarUsuario = id => usuarios.find(u => u.id === id);