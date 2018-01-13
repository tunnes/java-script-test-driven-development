function sum(a, b){
    return a + b;
}

// Método Principal
// No caso só poderam ser exportados apenas um default por arquivo:
// Ao declarar o import é possivel alterar o nome e não ser apenas o nome da `f`
// Não precisa utilizar as chaves.
export default sum;

// NamedExport
// Varios exports dentro do mesmo arquivo, mas só pode chamar com o mesmo nome 
// e o import precisa das chaves { sub }
export function sub(a, b){
    return a - b;
}
// Tambem é possivel fazer essa mesma função com o export separado, ou seja
// é bom para exportar varios métodos com apenas uma declaração export.
function mult(a, b){
    return a * b;
}

function div(a, b){
    return a / b;
}
// Veja abaixo que alem de multiplos exports também é possivel exportar com alias vejamos:
export { mult as multiplicar, div };

// Também é possivel criar um export de tudo `export * as utils`;