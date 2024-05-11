import {db} from "../BD/firebase";
import {ref, push, set} from 'firebase/database';

export const insercao = async (dados) => {
    // Check if any field is empty
    for(var itens = 0; itens < dados.length; itens++){ // for/gambiarra para testar cada item
        if(dados[itens] === ""){ 
            alert("Campos Vazios")
            return; // sair da func sem enrolar 
        }
    }

    const refCadastro = ref(db, 'Cadastro');
    const codigoCad = push(refCadastro);

    console.log("New User Key:", codigoCad.key);

    try {
        await set(codigoCad, {
            nome: dados[0],
            email: dados[1],
            senha: dados[2]
        });
        alert('Usuário cadastrado com sucesso!');
        
    } catch (error) {
        console.error("Error adding user to database:", error.message);
        alert("Ocorreu um erro ao cadastrar o usuário. Por favor, tente novamente mais tarde.");
    }
}



/*
export const insercao = async (dados) => { //chamando os dados da outra pagina
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
    }
    catch(erro){
        alert("fds")
    }
}

*/
