import React from 'react';
import "./style.scss"
import ImageOfGuy from "../../../assets/img/guyPhoto.png"

const Hero = () => {
    return (
            <div id="header">
                <div className="hero" style={{backgroundImage: `url(${ImageOfGuy})`}}>
                    <div className="hero--text">
                        <h1 className={"hero--text__title"}>Широкий <br/>
                            ассортимент <br/>
                            Одежды
                        </h1>

                        <p className={"hero--text__desc"}>Одежда от известные брендов у нас в каталоге. <br/>
                            Только качественные вещи.</p>

                        <button className={"hero--text__btn"}>Перейти в каталог ></button>
                        <div className="arrowBtns">
                            <button> {"<"} </button>
                            <button> {">"} </button>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Hero;