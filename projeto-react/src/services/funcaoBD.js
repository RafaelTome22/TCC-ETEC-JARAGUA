import { db } from '../BD/firebase';  // Corrija o caminho se necessário
import { ref, set } from 'firebase/database';

export async function insercao(userData, setNome, setEmail, setPassword) {
  const [nome, email, hashedPassword] = userData;
  try {
    await set(ref(db, 'users/' + nome), {
      username: nome,
      email: email,
      password: hashedPassword
    });
    // Limpar os campos do formulário após inserção
    setNome('');
    setEmail('');
    setPassword('');
    alert("Seja Bem-vindo(a) " + nome)
  } catch (error) {
    console.error("Erro ao inserir dados:", error);
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
