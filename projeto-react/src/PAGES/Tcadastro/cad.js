
import React, {useState} from 'react';
import {navigate} from 'react-router-dom'
import {insercao} from '../../services/funcaoBD';
import '../../styles/cad.css'

function SignupPage() {

    const [nome, setNome] = useState(""); 
    const [senha, setPassword] = useState(""); 
    const [email, setEmail] = useState("");

  return (
    <div class='main'>
      
        <form>
          <label>Nome:</label> <br/> 
          <input type='text'
          value={nome}
          placeholder='Digite seu Nome'
          onChange={(e) => setNome(e.target.value)}
          /> <br/> 


          <label>Email:</label> <br/> 
          <input type='email' 
          value={email}
          placeholder='Digite seu Email'
          onChange={(e) => setEmail(e.target.value)}
          />
          <br/>

          <label>Senha:</label> <br/> 
          <input type='password' 
          value={senha}
          placeholder='Nova Senha'
          onChange={(e) => setPassword(e.target.value)}
          />
        </form>

        <button onClick={async ()=> insercao([nome, email, senha], setNome, setEmail, setPassword)}>Cadastra-se</button>
    </div>
    
  );
}

export default SignupPage;