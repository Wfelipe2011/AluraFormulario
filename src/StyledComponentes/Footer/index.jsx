import './style.css';
import React from "react";
import styled from "styled-components";
import {ReactComponent as Youtube} from './youtube.svg'
import {ReactComponent as Instagram} from './instagram.svg'
import {ReactComponent as Linkedin} from './linkedin.svg'

const Rodape = styled.footer`
`


function Footer() {
    return(
        <Rodape className="main-footer">
            “Desenvolvemos soluções que
tragam sucesso aos nossos clientes.”
            <div className="footer-icons">
                <a href="https://www.linkedin.com/company/tegra-ltda/" target="_new">
                   <Youtube/> 
                </a>
                <a href="https://www.linkedin.com/company/tegra-ltda/" target="_new">
                    <Linkedin/>
                </a>
                <a href="https://www.instagram.com/tegrasoftware/" target="_new">
                    <Instagram/>
                </a>
            </div>
        </Rodape>
    );
}

export default Footer;