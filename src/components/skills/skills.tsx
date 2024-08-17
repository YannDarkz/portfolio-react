import styles from './skills.module.scss'

import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";

import { FaJsSquare } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa6";
import { FaAngular } from "react-icons/fa";






const Skills = () => {


    return (
        <div className={styles.skill_container}>
            <h2>HABILIDADES</h2>
            <div className={styles.skill_list}>
                <div className={styles.skill_item}>
                    <IoLogoHtml5 className={styles.html} size={30} />
                    <p className={styles.title}>HTML5</p>
                    <p>Mais recente atualização, que suporta tags, elementos e conteúdo multimídia. Assim como marcações de documento melhoradas e novas APIs.</p>
                </div>

                <div className={styles.skill_item}>
                    <IoLogoCss3 className={styles.css} size={30} />
                    <p className={styles.title}>CSS3</p>
                    <p>Com efeitos de transição, background e outros, pode-se criar estilos únicos para seus projetos web.</p>
                </div>

                <div className={styles.skill_item}>
                    <FaJsSquare className={styles.js} size={30} />
                    <p className={styles.title}>JavaScript</p>
                    <p>Linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.</p>
                </div>

                <div className={styles.skill_item}>
                    <FaReact className={styles.react} size={30} />
                    <p className={styles.title}>React</p>
                    <p>Um framework JavaScript, usado para criar interfaces de usuário (UI) em aplicativos web. Usado por muitas empresas de tecnologia.</p>
                </div>

                <div className={styles.skill_item}>
                    <FaGithub className={styles.github} size={30} />
                    <p className={styles.title}>GitHub</p>
                    <p>Uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git.</p>
                </div>

                <div className={styles.skill_item}>
                    <FaGitAlt className={styles.git} size={30} />
                    <p className={styles.title}>Git</p>
                    <p>Sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software.</p>
                </div>

                <div className={styles.skill_item}>
                    <SiTypescript className={styles.ts} size={30} />
                    <p className={styles.title}>TypesScript</p>
                    <p>TypeScript é uma linguagem de programação fortemente tipada, construída sobre JavaScript, que adiciona tipos estáticos opcionais e recursos avançados para melhorar o desenvolvimento de aplicações robustas.</p>
                </div>

                <div className={styles.skill_item}>
                    <FaNodeJs className={styles.node} size={30} />
                    <p className={styles.title}>NodeJS</p>
                    <p>Node.js: Plataforma de desenvolvimento de código aberto que permite a execução de JavaScript no lado do servidor. Com um vasto ecossistema de pacotes, Node.js facilita a criação de aplicações em tempo real, sendo amplamente usado em back-end de projetos modernos.</p>
                </div>

                <div className={styles.skill_item}>
                    < FaAngular className={styles.angular} size={30} />
                    <p className={styles.title}>Angular</p>
                    <p>Experiência com AngularJS, um framework JavaScript open-source do Google. Habilidade em criar interfaces dinâmicas e interativas, aproveitando componentes reutilizáveis e arquitetura MVC para desenvolver aplicações web escaláveis e bem organizadas.</p>
                </div>


                

                
            </div>




        </div>
    )
}

export default Skills