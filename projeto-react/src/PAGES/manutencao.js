import React, { useState } from 'react';
import styles from '../styles/manutencao.module.css';
import Lottie from "lottie-react";
import logo from '../assets/logo.png';
import animationData from "../assets/Animation - 1738463665127.json";

function Manutencao() {


    return(
        <div className={styles["container"]}>
            <div className={styles['header-info']}> {/* Começo do header de info */}
                      <img className={styles.logo} src={logo} alt="logo da empresa focos" />
                      <p className={styles['nome-empresa']}>Focos</p>
                    </div> {/* Fim do header de info */}
            <div className={styles["fot"]}>
                <div className={styles["txt"]}>
                    <h1 className={styles["titulo-txt"]}>Nosso Site está em Manutenção</h1>
                    <p className={styles["titulo-p"]}>Estamos trabalhando em melhorias e retornaremos em breve.</p>
                </div>
                <div className={styles["img"]}>
                    <Lottie animationData={animationData} loop={true} className={styles["icone"]}/>
                </div>
            </div>
        </div>
    )
}

export default Manutencao;

