import styles from './project.module.scss'
import logo_costs from '../../images/Costs_resized.png'

const Projects = () => {


    return (
        <div className={styles.container_project}>
            <h2>Meus <strong>Projetos!</strong></h2>

            <div className={styles.projects_list}>
                <div className={`${styles.project} ${styles.first}}`}>
                    <a href='https://julioresende77.github.io/portfolio_julioresende/'
                        target='_blank'>
                        <img src={logo_costs} alt="Logo-projeto" />
                        <p className={styles.coment}>Genciador de projetos "Costs"</p>

                        <div className={styles.hover_content}>
                            <p>Esse e um projeto para gerenciar a criaçao de outros projetos.</p>
                            <p>🔗 Ver projeto online</p>
                        </div>
                    </a>
                </div>

                <div className={`${styles.project} ${styles.second}}`}>
                    <a href='https://julioresende77.github.io/portfolio_julioresende/'
                        target='_blank'>
                        <img src={logo_costs} alt="Logo-projeto" />
                        <p className={styles.coment}>Genciador de projetos "Costs2"</p>

                        <div className={styles.hover_content}>
                            <p>Esse e um projeto para gerenciar a criaçao de outros projetos.</p>
                            <p>🔗 Ver projeto online</p>
                        </div>
                    </a>
                </div>
                <div></div>
                <div></div>
            </div>

        </div>
    )
}

export default Projects