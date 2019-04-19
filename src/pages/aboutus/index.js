import React, { Component } from 'react'
import paperimage from './../../assets/images/paper.png'

export default class Aboutus extends Component {
    render() {
        return (
            <div className="about-us">
                <div className="about-us__content container">
                    <div className="about-us__content__hero row">
                        <div className="col-md-6">
                            <div className="row">
                                <h1 className="about-us__content__hero-title col-md-12">Nós Fazemos a <strong>Diferença</strong> <br/> Com responsabilidade e o melhor atendimento</h1>
                                <p className="about-us__content__hero-text col-md-12">A Valibrasil surgiu em Valinhos-SP, venenatis libero eu, mattis velit. Nam dictum dolor odio, vitae gravida erat efficitur vel. Ut volutpat dolor nec hendrerit lobortis. Praesent ipsum nibh, vel ex eget, rutrum auctor massa.</p>
                                <p className="about-us__content__hero-text col-md-12">Morbi vestibulum malesuada mauris vitae scelerisque. Phasellus porttitor eros in dui varius, ut auctor elit lacinia. </p>
                                <button className="button">Contato</button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-offset-2 col-md-11"><img src={paperimage} /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
