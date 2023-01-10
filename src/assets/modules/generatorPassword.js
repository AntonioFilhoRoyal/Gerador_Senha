// Importa o codigo dos geradores de senha
import generator from './gerador';

// Captura elementos HTML
const iQtd = document.querySelector('.checkQtd');
const iUpper = document.querySelector('.checkUpper');
const iLow = document.querySelector('.checkLow');
const iNum = document.querySelector('.checkNum');
const iSim = document.querySelector('.checkSim');
const btn = document.querySelector('.btn-password');

// exporta evento de click e geração de senha
export default () =>{
    
// Evento de click
    btn.addEventListener('click', () =>{
        const iPassword = document.querySelector('.password')

        // importa a função stream para o HTML
        iPassword.innerHTML = stream();
    })
    
}
function stream(){
    // checar inputs
    const password = generator(iQtd.value, iUpper.checked,
                                iLow.checked, iNum.checked, iSim.checked)
    return password || 'Nada Selecionado'                            
}