import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/biblioteca.module.css';
import logo from '../assets/logo.png';
import lupa from '../assets/lupa.png';
import copy from '../assets/documento.png';
import userIcon from '../assets/user.png'; // Ícone de usuário
import Logout from '../assets/logout.png'; // Ícone de saída
import documentacao from '../assets/documentacao.png'; // Ícone de documentação
import componentes from '../assets/componentes.png'; // Ícone de componentes
import Code from '../assets/code.png'; // Ícone de código
import Home from '../assets/home.png'; // Ícone de home


import { useAuth } from '../context/authContext'; // Importa o contexto de autenticação


function Biblioteca() {
  const codeRef1 = useRef(null);
  const codeRef2 = useRef(null);

  const navigate = useNavigate();
  const { currentUser, logout } = useAuth(); // Obtém o usuário atual e a função de logout

  const [isPopupOpen, setIsPopupOpen] = useState(false); // Estado para controlar o pop-up

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen); // Alterna a exibição do pop-up
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleLogout = async () => {
    try {
      await logout(); // Executa o logout
      navigate('/'); // Redireciona para a página principal (Vitrine)
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  function copyCode(ref) {
    const codeElement = ref.current;
    const tempInput = document.createElement('textarea');
    tempInput.value = codeElement.textContent;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert('Código copiado para a área de transferência!');
  }

  return (
    <div className={styles['all']}>
      <header className={styles['header-main']}> {/* Header */}
        <div className={styles['header-info']} onClick={() => navigate('/')}> {/* Logo e nome da empresa */}
          <img className={styles.logo} src={logo} alt="logo da empresa focos" />
          <p className={styles['nome-empresa']}>Focos</p>
        </div>

        <div className={styles['header-pesquisa']}> {/* Barra de pesquisa */}
          <input type="text" id="searchInput" placeholder="Pesquisar" className={styles['searchInput']} />
          <label htmlFor="searchInput">
            <span>
              <img className={styles['icon-pesquisa']} src={lupa} alt="ícone de pesquisa" />
            </span>
          </label>
        </div>

        <div className={styles['header-btn']}> {/* Botões de login/cadastro ou informações do usuário */}
          {currentUser ? (
            <div className={styles['user-info']}>
              <img
                className={styles['user-icon']}
                src={userIcon}
                alt="Ícone de usuário"
                onClick={togglePopup} // Abre o pop-up ao clicar
              />
              {isPopupOpen && (
                <div className={styles.popup}> {/* Pop-up com as informações do usuário */}
                  <p>Olá, {currentUser.displayName || 'Usuário'}</p>
                  <button onClick={handleLogout} className={styles['btn-form-log']}>Sair</button>
                </div>
              )}
            </div>
          ) : (
            <>
             <div className={styles.link}>
              <button
                onClick={() => navigate('/login')}
                className={`${styles.btn} ${styles['btn-white']} ${styles.animate}`}
              >
                Login
              </button>
               </div>
            </>
          )}
        </div>
      </header>

      <aside className={styles.aside}> {/* Sidebar */}
        <div className={styles['conteudo-asise']}>
        <div className={styles['btn-aside']}>
            <img
                className={styles['icone-aside']}
                src={Home}
              />
            <button className={styles['btn-aside-style']} onClick={() => navigate('/')}>home</button>
          </div>
          <div className={styles['btn-aside']}>
            <img
                className={styles['icone-aside']}
                src={documentacao}
                
              />
            <button className={styles['btn-aside-style']} onClick={() => navigate('/biblioteca')}>Documentação</button>
          </div>
          <div className={styles['btn-aside']} onClick={() => navigate('/componentes')}>
            <img
                className={styles['icone-aside']}
                src={componentes}
                
              />
            <button className={styles['btn-aside-style']}>Componentes</button>
          </div>
          <div className={styles['btn-aside']}>
            <img
                className={styles['icone-aside-dif']}
                src={Code}
              />
            <button className={styles['btn-aside-style-dif']} onClick={() => navigate('/biblioteca')}>Em Desenvolvimento...</button>
          </div>
          <div className={styles['btn-aside']}>
            <img
                className={styles['icone-aside-dif']}
                src={Code}
              />
            <button className={styles['btn-aside-style-dif']} onClick={() => navigate('/biblioteca')}>Em Desenvolvimento...</button>
          </div>
          <div className={styles['btn-aside']}>
            <img
                className={styles['icone-aside-dif']}
                src={Code}
              />
            <button className={styles['btn-aside-style-dif']} onClick={() => navigate('/biblioteca')}>Em Desenvolvimento...</button>
          </div>
          <div className={styles['btn-aside']}>
            <img
                className={styles['icone-aside-dif']}
                src={Code}
              />
            <button className={styles['btn-aside-style-dif']} onClick={() => navigate('/biblioteca')}>Em Desenvolvimento...</button>
          </div>
          <div className={styles['btn-aside']}>
            <img
                className={styles['icone-aside']}
                src={Logout}
              />
            <button className={styles['btn-aside-style']} onClick={handleLogout}>Sair</button>
          </div>
        </div>
      </aside>

      <section className={styles['container-sessao']}> {/* Conteúdo principal */}
        <div className={styles['titulo-container-sessao']}>
          <h1>Documentação</h1>
          <p>A biblioteca Focos é projetada para facilitar a criação de componentes de interface de usuário acessíveis...</p>

          <h1>Explorando a Acessibilidade Digital</h1>
    <p>
        Acessibilidade digital é um desafio que permeia o desenvolvimento moderno, e a biblioteca Focos surge como uma solução inovadora e transformadora para garantir que todos os usuários, independentemente de suas habilidades, tenham acesso pleno e equitativo à web.
    </p>
    <p>
        No vasto e complexo mundo digital, onde interações são moldadas por interfaces visuais e funcionais, muitos usuários, especialmente aqueles com deficiências, frequentemente se deparam com barreiras invisíveis que limitam sua capacidade de navegar e interagir. <strong>Pensando no desenvolvedor, temos como nosso primeiro produto uma biblioteca de componentes React acessíveis, que não apenas automatiza a inclusão de atributos ARIA, mas também segue rigorosamente as diretrizes da WCAG (Web Content Accessibility Guidelines).</strong> Ao utilizar Focos, os desenvolvedores garantem que seus projetos atendam aos mais altos padrões de acessibilidade, promovendo a inclusão sem a necessidade de conhecimentos aprofundados na área.
    </p>
    <p>
        <strong>E o melhor, nós podemos demonstrar isso, mostrando como a acessibilidade pode ser incorporada de forma simples e eficaz em qualquer projeto.</strong>
    </p>

    <h1>Potencial de Adoção da Focos</h1>
    <p>
        <strong>A Focos não é apenas uma ferramenta; é um catalisador para a mudança.</strong> Possui um imenso potencial de adoção por empresas que desejam não apenas cumprir as regulamentações de acessibilidade, mas também melhorar significativamente a experiência de seus usuários. Sua abordagem proativa é especialmente atraente para startups ágeis, agências de desenvolvimento inovadoras e grandes corporações que buscam otimizar seus processos de produção enquanto garantem acessibilidade em todas as suas interfaces.
    </p>
    <p>
        <strong>E quais são algumas das vantagens que oferecemos?</strong>
    </p>

    <h1>Vantagens da Focos</h1>
    <ol>
        <li><strong>Facilidade de uso:</strong> Com a Focos, basta importar e usar os componentes prontos. Não há necessidade de configurações complexas, permitindo que os desenvolvedores se concentrem na criatividade e na funcionalidade, sem se perder em detalhes técnicos.</li>
        <li><strong>Automação de práticas acessíveis:</strong> A inclusão de atributos ARIA e a conformidade com a WCAG são feitas automaticamente, eliminando a carga de trabalho manual e potencialmente propensa a erros.</li>
        <li><strong>Economia de tempo:</strong> Ao permitir que os desenvolvedores concentrem seus esforços no design e na funcionalidade do site, enquanto a acessibilidade é gerenciada pela Focos, garantimos um fluxo de trabalho mais eficiente e produtivo.</li>
    </ol>
    <p>
        <strong>E quais são os impactos dessa biblioteca?</strong>
    </p>

    <h1>Impactos da Focos</h1>
    <p>
        <strong>A biblioteca Focos não apenas aprimora a acessibilidade; ela permitirá que desenvolvedores transformem suas aplicações, tornando a web um espaço mais inclusivo para todos os usuários, independentemente de suas habilidades.</strong> Com a Focos, o acesso à informação e aos serviços digitais se torna um direito universal, promovendo a diversidade e a igualdade de oportunidades.
    </p>

    <h1>Exemplos de Melhorias</h1>
    <p>
        <strong>Com a Focos, as interfaces desenvolvidas apresentam melhorias notáveis nas pontuações de acessibilidade em ferramentas de auditoria como Lighthouse.</strong> Isso significa que cada projeto que incorpora nossa biblioteca não só se torna mais inclusivo, mas também mais eficiente em termos de usabilidade. Além disso, os usuários finais com deficiência poderão navegar pelas interfaces de maneira mais intuitiva e eficaz, transformando sua experiência em algo agradável e sem frustrações.
    </p>
    <p>
        <strong>Mas… qual seria o resumo da solução?</strong>
    </p>

    <h1>Resumo da Solução</h1>
    <p>
        <strong>A Focos é uma solução prática e eficaz para a falta de acessibilidade digital, permitindo que desenvolvedores implementem acessibilidade de forma rápida e sem complicações.</strong> Ao eliminar as barreiras que limitam a inclusão, a Focos promove um ambiente digital onde todos têm a oportunidade de interagir e participar plenamente.
    </p>

    <h1>Próximos Passos</h1>
    <p>
        <strong>Os próximos passos incluem a expansão contínua da biblioteca, com novos componentes e funcionalidades que atendem às necessidades em constante evolução do desenvolvimento web.</strong> Além disso, estamos comprometidos em colaborar com a comunidade de desenvolvedores para coletar feedback e melhorar continuamente o produto, garantindo que a Focos permaneça na vanguarda da acessibilidade digital.
    </p>
    <p>
        <strong>Explorar a Focos é mais do que uma simples implementação técnica; é um passo significativo em direção a um futuro digital mais inclusivo e igualitário. Cada componente acessível que os desenvolvedores integram em seus projetos não só melhora a experiência do usuário, mas também promove uma internet onde todos podem navegar, aprender e se conectar sem barreiras.</strong>
    </p>
        </div>
      </section>
    </div>
  );
}

export default Biblioteca;



