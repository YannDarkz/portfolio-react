import styles from './about.module.scss'


const About = () => {

    const caminhoCurriculo = '/yannCurriculo.pdf'

    const handleLink = () => {

        
        setTimeout(() => {

            window.open(caminhoCurriculo, '_blank')
        },2000)
    
    }

    return (
        <div id='about' className={styles.about_container}>
            <h2>Sobre Mim</h2>

            <h6>  Sou um desenvolvedor front-end!  </h6>

            <p className={styles.coment}> Apaixonado pela área de tecnologia, e tenho certeza que posso contribuir em qualquer time com as minhas habilidades! </p>
            <p className={styles.coment}> Estou sempre me desafiando com novos projetos e participando de comunidades de programação para buscar feedback de outros desenvolvedores. Além de tentar ajudar essas pessoas com o que eu já aprendi!</p>
            <p className={styles.coment}> Atualmente estou estudando tecnologias frontend, como HTML5, CSS3, JavaScript, TypeScript, React e <strong>buscando uma oportunidade no mercado profissional</strong>, para colocar em prática os conhecimentos adquiridos. Observo o mercado profissional da área, estudando as novas tecnologias para me manter atualizado! </p>
            <button onClick={handleLink}  rel='noopener noreferrer' >
                <svg>
                    <rect x="0" y="0" width="100%" height="100%" />
                </svg>
                Meu Curriculo!
            </button>
        </div>
    )
}

export default About
