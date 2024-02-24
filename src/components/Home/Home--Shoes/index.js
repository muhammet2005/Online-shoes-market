import React, {useState} from 'react';
import {shoes} from "../../Shoes.js";
import "./style.scss";
import {NavLink} from "react-router-dom";
import {CiStar} from "react-icons/ci";

const HomeShoes = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const itemsPerPage = 4;

    const nextSlide = () => {
        setCurrentSlide(currentSlide === Math.ceil(shoes.shoes.length / itemsPerPage) - 1 ? 0 : currentSlide + 1);
    };

    console.log(currentSlide, Math.ceil(shoes.shoes.length / itemsPerPage) - 1)
    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? Math.ceil(shoes.shoes.length / itemsPerPage) - 1 : currentSlide - 1);
    };

    const startIndex = currentSlide * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return (
        <div className="container">
            <div className="home--shoes">
                <div className="home--shoes__title">
                    <h1>Обувь</h1>
                    <NavLink to={"/shoes"}>
                        Больше товаров >
                    </NavLink>
                </div>

                <div className="home--shoes__items">
                    {shoes.shoes.slice(startIndex, endIndex).map((el, idx) => (
                        <div key={idx} className="shoes--card">
                            <CiStar className="addToFavorite"/>
                            <img src={el.imageURL} alt="shoes"/>
                            <h4>{el.name}</h4>
                            <p> от {el.price} $</p>
                        </div>
                    ))}
                </div>

                <div className="sliderBtn">
                    <button className="prev" onClick={prevSlide}>&#10094;</button>
                    <p style={{fontSize: currentSlide === 0 ? "30px" : "20px"}}>&#8226;</p>
                    <p style={{fontSize: currentSlide === 1 ? "30px" : "20px"}}>&#8226;</p>
                    <p style={{fontSize: currentSlide === 2 ? "30px" : "20px"}}>&#8226;</p>
                    <p style={{fontSize: currentSlide === 3 ? "30px" : "20px"}}>&#8226;</p>
                    <p style={{fontSize: currentSlide === 4 ? "30px" : "20px"}}>&#8226;</p>
                    <p style={{fontSize: currentSlide === 5 ? "30px" : "20px"}}>&#8226;</p>
                    <p style={{fontSize: currentSlide === 6 ? "30px" : "20px"}}>&#8226;</p>
                    <p style={{fontSize: currentSlide === 7 ? "30px" : "20px"}}>&#8226;</p>
                    <button className="next" onClick={nextSlide}>&#10095;</button>
                </div>

            </div>
        </div>
    );
};

export default HomeShoes;
