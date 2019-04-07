import React, { Component } from 'react'
import logo from './../../assets/images/logo.png'


export default class home extends Component {
    render() {
        return (
            <div className="home-page ">
                <div className="home-page__content container">
                    <header className="home-page__content__header row">
                        <button className="home-page__content__header-brand col-md-8">valibrasil</button>
                        <nav className="home-page__content__header__nav col-md-4">
                            <ul>
                                <li><button>Sobre nós</button></li>
                                <li><button>Produtos</button></li>
                                <li><button>Contato</button></li>
                            </ul>
                        </nav>
                    </header>
                    <div className="home-page__content__hero row">
                        <h2 className="home-page__content__hero-subtitle col-md-12 center">sua solução em descartáveis</h2>
                        <h1 className="home-page__content__hero-title col-md-12 center">Valibrasil <img src={logo} /></h1>
                    </div>
                </div>
            </div>
        )
    }
}
