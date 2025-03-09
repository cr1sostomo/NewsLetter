import React from 'react'
import './Newsletter.css'

function NewsLetter() {
    return (

        <div className="newsletter">
            <div className="newsletter-left">


                <div className="newsletter-header">
                    <div className='newsletter-image'>
                        <img
                            src='./src/assets/logo.png'
                            alt="Ícone de Café"
                            className="newsletter-icon"
                        />
                    </div>
                    <div>
                        <h1 className="newsletter-title">Newsletter</h1>
                        <p className="newsletter-subtitle">O maior jornal digital do país</p>
                    </div>

                </div>

                <div>
                    <p className="newsletter-description">
                        Tudo que você precisa saber pra começar seu dia bem e informado.
                        as principais notícias do Brasil e do mundo, 100% gratuito, diariamente na sua caixa de entrada. perfeitas se acompanhadas de uma boa xícara de café (sem açúcar).
                    </p>
                </div>


                <div className='newsletter-form-container'>

                    <h2 className="newsletter-form-title">Junta-se a +2M de leitores</h2>
                    <form>
                        <div className="newsletter-form-group">
                            <label htmlFor="name">Seu nome</label>
                            <input
                                type="text"
                                id="name"
                                required
                            />
                        </div>
                        <div className="newsletter-form-group">
                            <label htmlFor="email">Seu e-mail</label>
                            <input
                                type="email"
                                id="email"
                                required
                            />
                        </div>
                        <button type="submit" className="newsletter-button">
                            Inscreva-se
                        </button>
                    </form>

                    <a href="#saiba-mais" className="newsletter-link">
                        Saiba mais
                    </a>
                </div>
            </div>
            <div className="newsletter-right">
                <img
                    src="./src/assets/image.jpg"
                    alt="Pessoa lendo jornal"
                    className="newsletter-image"
                />
            </div>
        </div>

    );
};

export default NewsLetter;