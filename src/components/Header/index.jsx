import React from 'react';
import {Link, NavLink} from "react-router-dom";
import Logo from "../../assets/img/logo.svg"
import "./style.scss"
import {CiSearch, CiStar} from "react-icons/ci";
import {IoPerson} from "react-icons/io5";
import {FaShoppingBag} from "react-icons/fa";
import {MdKeyboardArrowDown} from "react-icons/md";

const Header = () => {
    return (<div id='header'>
        <div className="container">
            <div className="header">
                <div className="logo">
                    <Link to={"/"}>
                        <img src={Logo} alt=""/>
                    </Link>

                </div>
                <div className="nav--bar">
                    <ul>
                        <li>
                            <NavLink to={"/clothes"}>
                                Одежда <MdKeyboardArrowDown/>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/shoes"}>
                                Обувь
                                <MdKeyboardArrowDown/>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/accessories"}>
                                Аксессуары
                                <MdKeyboardArrowDown/>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/brands"}>
                                Бренды
                                <MdKeyboardArrowDown/>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/cost_calculate"}>
                                Расчет стоимости
                                <MdKeyboardArrowDown/>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/information"}>
                                Информация
                                <MdKeyboardArrowDown/>
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className="nav--icons">
                    <CiSearch className={"nav--icons__search"}/>
                    <CiStar className={"nav--icons__search"}/>
                    <IoPerson className={"nav--icons__search"}/>

                    <div>
                        <FaShoppingBag className={"nav--icons__search"}/>
                        <p>11000$</p>
                        <p className={"countOfItems"}>7</p>
                    </div>

                </div>
            </div>
        </div>
    </div>);
};

export default Header;