import imgPerfil from '../../images/yannPerfil.png'

import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import styles from './main.module.scss'
import About from '../about/about.tsx'
import Skills from '../skills/skills.tsx'


const Main = () => {

    const generateWhatsAppLink = (phoneNumber: string, message: string): string => {
        const encodeMessage = encodeURIComponent(message)
        return `https://wa.me/${phoneNumber}?text=${encodeMessage}`

    }

    return (
       <main className={styles.main_container}>
            <img src={imgPerfil} />     
            <h4>Olá, Seja Bem-Vinda(o)!</h4>   
            <h1>Sou <strong> Yann Santos</strong></h1>
            <h3>Desenvolvedor Front-End</h3>
            <div className={styles.social}>
                <a className={styles.linkedin} href='https://www.linkedin.com/in/yanndarkzinnn/' target='_blank'><FaLinkedinIn /></a> 
                <a className={styles.github} href='https://github.com/YannDarkz' target='_blank'><FaGithub /></a> 
                <a className={styles.wpp} href={generateWhatsAppLink('5571987740164','Olá me interessei no seu trabalho!' )} target='_blank'><FaWhatsapp  /></a> 
            </div>
            <About />
            <Skills />


       </main>
    )
}

export default Main