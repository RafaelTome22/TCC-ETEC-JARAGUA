import React, { useRef } from 'react';
import styles from '../styles/biblioteca.module.css';
import logo from '../assets/logo.png';
import user from '../assets/user.png';
import copy from '../assets/documento.png';
import { useNavigate } from 'react-router-dom';

function Biblioteca() {
  // Cria uma referência distinta para cada caixa de código
  const codeRef1 = useRef(null);
  const codeRef2 = useRef(null);

  const navigate = useNavigate();
  const delay = 500; // Delay de 500 milissegundos (0.5 segundos)

  const handleLogin = () => {
    setTimeout(() => {
      navigate('/login');
    }, delay);
  };

  // Função de cópia que aceita uma referência como parâmetro
  function copyCode(ref) {
    const codeElement = ref.current; // Acessa o elemento <pre> através da ref

    // Cria um elemento de input temporário para usar como intermediário
    const tempInput = document.createElement('textarea');
    tempInput.value = codeElement.textContent;
    document.body.appendChild(tempInput);

    // Seleciona o conteúdo do input e copia para a área de transferência
    tempInput.select();
    document.execCommand('copy');

    // Remove o input temporário
    document.body.removeChild(tempInput);

    // Feedback visual ou de áudio para indicar que o código foi copiado
    alert('Código copiado para a área de transferência!');
  }

  return (
    <div className={styles['all']}>
      <header className={styles['header-main']}>
        <div className={styles['header-info']}>
          <img className={styles.logo} src={logo} alt="logo da empresa focos" />
          <p className={styles['nome-empresa']}>Focos</p>
        </div>
        <div className={styles['header-pesquisa']}>
          <input type="text" id="searchInput" placeholder="Pesquisar" className={styles['searchInput']} />
        </div>
        <div className={styles['header-btn']}>
          <img className={styles.user} src={user} alt="imagem user" />
        </div>
      </header>

      <aside className={styles.aside}>
        <div className={styles.sidebar}>
          <a href="#" className={`${styles.sidebarLink} ${styles.active}`}>
            <span className="material-icons">dashboard</span>
            <h3>Biblioteca</h3>
          </a>
          <a href="#" className={styles.sidebarLink}>
            <span className="material-icons">person_outline</span>
            <h3>Visual</h3>
          </a>
          <a href="#" className={styles.sidebarLink}>
            <span className="material-icons">receipt_long</span>
            <h3>Motora</h3>
          </a>
          <a href="#" className={`${styles.sidebarLink} ${styles.active}`}>
            <span className="material-icons">insights</span>
            <h3>Auditiva</h3>
          </a>
          <a href="#" className={styles.sidebarLink}>
            <span className="material-icons">mail_outline</span>
            <h3>Análise</h3>
          </a>
          <a href="#" className={styles.sidebarLink}>
            <span className="material-icons">settings</span>
            <h3>Configurações</h3>
          </a>
          <a href="#" className={`${styles.sidebarLink} ${styles.logout}`}>
            <span className="material-icons">logout</span>
            <h3>Sair</h3>
            <button onClick={handleLogin}>opa</button>
          </a>
        </div>
      </aside>

      <section className={styles['container-sessao']}>
        <div className={styles['titulo-container-sessao']}>
          <h1>Documentação</h1>
          <p>A biblioteca Focos é projetada para facilitar a criação de componentes de interface de usuário acessíveis, seguindo as diretrizes da WCAG (Web Content Accessibility Guidelines). Esta documentação fornece uma visão completa sobre como instalar, utilizar e aproveitar os componentes acessíveis da biblioteca.</p>
        </div>

        <div className={styles['componentes']}>
          <h2 id='componentes'><u>componentes:</u></h2>
          
          {/* Componente 1 */}
          <div className={styles['container-componentes']}>
            <div className={styles['conteudo-texto']}>
              <h4 className={styles['title-componente']}>AccessibleButton</h4>
              <p className={styles['par-1']}>Um botão acessível que segue as <strong>melhores práticas de acessibilidade</strong>, incluindo o uso de atributos <u>ARIA</u> para melhorar a usabilidade por leitores de tela.</p>
              <p className={styles['par-2']}>
                - `label` (string): Texto descritivo para o botão. <br />
                - `onClick` (function): Função a ser chamada quando o botão é clicado.
              </p>
            </div>
            <div className={styles['text-exemp-cod-1']}>
              <h1 className={styles['title-codigo']}>Exemplo de código: AccessibleButton</h1>
              <div className={styles['code-container']}>
                <pre ref={codeRef1} id="code1">
                  {`import React from 'react';
import { AccessibleButton } from 'focos';

const App = () => {
  const handleClick = () => {
    alert('Aiiii! Isso doeu =(');
  };
  return (
    <div>
      <AccessibleButton label="Clique em mim" onClick={handleClick} />
    </div>
  );
};
export default App;
`}
                </pre>
                <button className={styles["btn-copy"]} onClick={() => copyCode(codeRef1)}>
                  <img className={styles['icon-copy']} src={copy} alt="ícone de cópia" />
                </button>
              </div>
            </div>
          </div>

          {/* Componente 2 */}
          <div className={styles['container-componentes-1']}>
            <div className={styles['conteudo-texto']}>
              <h4 className={styles['title-componente']}>AccessibleInput</h4>
              <p className={styles['par-1']}>Um campo de entrada acessível com suporte para rótulos e mensagens de erro, garantindo que <strong>todos os usuários</strong>, incluindo aqueles que utilizam <u>leitores de tela</u>, possam interagir com o componente eficientemente.</p>
              <p className={styles['par-2']}>
                - id (string): Identificador exclusivo para o campo de entrada. Utilizado para associar o rótulo (label) ao campo de entrada. <br /><br />
                - label (string): Texto descritivo para o campo de entrada, utilizado como rótulo.<br /><br />
                - value (string): Valor atual do campo de entrada.<br /><br />
                - onChange (function): Função a ser chamada quando o valor do campo de entrada muda.<br /><br />
                - ariaDescribedBy (string): Atributo ARIA que associa o campo de entrada a uma descrição adicional (como uma ajuda ou mensagem de erro), através do ID do elemento descritivo.
              </p>
            </div>
            <div className={styles['text-exemp-cod-1']}>
              <h1 className={styles['title-codigo']}>Exemplo de código: AccessibleInput</h1>
              <div className={styles['code-container']}>
                <pre ref={codeRef2} id="code2">
                  {`import React, { useState } from 'react';
import {AccessibleInput} from 'focos';

function PaginaExemplo() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h1>Exemplo de página com botão acessível focos</h1>
      <form>
        <AccessibleInput
          id="exampleInput"
          label="Example Input"
          value={inputValue}
          onChange={handleInputChange}
          ariaDescribedBy="inputDescription"
        />
        <p id="inputDescription" style={{ fontSize: '12px', color: '#666' }}>
          Por favor, entre com seu texto aqui!
        </p>
      </form>
      <div>
        <p>Texto Digitado: {inputValue}</p>
      </div>
    </div>
  );
}

export default PaginaExemplo;
`}
                </pre>
                <button className={styles["btn-copy"]} onClick={() => copyCode(codeRef2)}>
                  <img className={styles['icon-copy']} src={copy} alt="ícone de cópia" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Biblioteca;

