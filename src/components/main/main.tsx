import imgPerfil from '../../images/yannPerfil.png'

import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import styles from './main.module.scss'


const Main = () => {

    return (
       <main className={styles.main_container}>
            <img src={imgPerfil} />     
            <h4>Olá, Seja Bem-Vinda(o)!</h4>   
            <h1>Sou Yann Santos</h1>
            <h3>Desenvolvedor Front-End</h3>
            <div className={styles.social}>
                <a href='#' target='_blank'><FaLinkedinIn /></a> 
                <a href='#' target='_blank'><FaGithub /></a> 
                <a href='#' target='_blank'><FaWhatsapp  /></a> 
            </div>


       </main>
    )
}

export default Main