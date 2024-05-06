import {db} from "../BD/firebase";
import {ref, get, push, set} from 'firebase/database';

/*export const teste = (nome, sobrenome) => {
    alert(nome + sobrenome)
}
*/


export const insercao = async (dados, setN, setEm, setS) => { //chamando os dados da outra pagina
    //testando se os campos estão vazios
   for(var itens = 0; itens < dados.length; itens++){ // for/gambiarra para testar cada item
    if(dados[itens] === ""){ 
        alert("Campos Vazios")
        return; // sair da func sem enrolar 
    }
   }

   const refCadastro = ref(db, 'Cadastro')  //referencia de envio de info
   const codigoCad = push(refCadastro) //usando a referencia de envio. push gera "um codigo" no caminho do envio

   console.log(codigoCad)
   try{
    await set(codigoCad, 
        {
            nome: dados[0],
            email: dados[1],
            senha: dados[2]
        });
        alert('Cadastrado');
        setN("")
        setEm("")
        setS("")
    }
    catch(erro){
        alert("fds")
    }
}


