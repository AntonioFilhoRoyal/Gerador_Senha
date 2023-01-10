
// função de automoção
function rand(min, max){
    return Math.floor(Math.random() * (max - min ) + min);
}

// Tabela ASC II
const pUppercase = () => String.fromCharCode(rand(65, 90));
const pLowercase = () => String.fromCharCode(rand(97, 122));
const pNumber = () => String.fromCharCode(rand(48, 57));
const arrSimbol = '@#$%¨&*()_+{}[]``~~^'; // array contendo simbolos
const pSimbol = () => arrSimbol[rand(0, arrSimbol.length)];
// simbolos em array, o rand do 0 ate o tamanho do array

// função geradora
export default function generator(qtd, upper, low, num, sim){

    const arrPassword = []; // array para conter a senha
    qtd = Number(qtd);

    // for de iteração com as opções da senha
    for(let i = 0; i<=qtd; i++){
        upper && arrPassword.push(pUppercase());
    // Se upper for "true" então arrPassword sera verdadeiro
        low && arrPassword.push(pLowercase());
        num && arrPassword.push(pNumber());
        sim && arrPassword.push(pSimbol());
    }
// arrPassword não tera nada separando, e ele fica do tamanho que o parametro qtd desejar
    return arrPassword.join('').slice(0, qtd);
    // Remover todo espaço entre as string é coloca o tamanho do parametro qtd
}
