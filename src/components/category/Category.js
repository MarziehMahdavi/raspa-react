import React, {useEffect, useState} from 'react';

import * as Style from "./category.module.css";

import Logo from "../../assets/images/chef.png"

import Slide1 from "../../assets/samples/slide1.jpg";
import Slide2 from "../../assets/samples/slide2.jpg";
import Latest1 from "../../assets/samples/latest1.jpg";
import Latest2 from "../../assets/samples/latest2.jpg";
import Latest3 from "../../assets/samples/latest3.jpg";
import Latest4 from "../../assets/samples/latest4.jpg";
import Latest5 from "../../assets/samples/latest5.jpg";
import {Link, useLocation} from "react-router-dom";
import * as $ from 'jquery';
import {generateURL} from "../../requests";

export default function Category() {
    const [categories, setCateories] = useState([]);
    const [categoryId, setCateoryId] = useState("categories/all");
    const [recipes, setRecipes] = useState([]);

    const findCategoryById = (id) => {
        let name ;

        categories.map((item) => {
            if (item.id === id ) {
                name = item.description;
                return;
            }
        })

        return name;
    }

    const onHashChanged = (value) => {
        const activeStyle = "color: #e35640"
        const hash = window.location.hash;
        let category_id;
        if(value != null ){
            $(".menu-container a").attr("style","");
            $(value).attr("style",activeStyle);
            category_id = "category/"+value.substring(1);
        }
        else {
            if(hash !== "" && hash !== "#") {
                $(".menu-container a").attr("style","");
                $(hash).attr("style",activeStyle);

                category_id = "category/"+hash.substring(1);
            }
            else {
                $(".menu-container a").attr("style","");
                $("#appetizer").attr("style",activeStyle);
                category_id = "all"
            }
        }


        /* get recipes by category */
        let axios = require('axios');
        let config_categories = {
            method: 'get',
            url: generateURL("/recipes/" + category_id),
            headers: {
                'Content-Type': 'application/json'
            },
        };
        console.log(config_categories)

        axios(config_categories)
            .then(function (response) {
                // let recipe_array = [];
                // $(response.data).each(function (index, item) {
                //     recipe_array.push(item);
                // });
                setRecipes(response.data);
                console.log(response)

            })
            .catch(function (error) {
                console.log(error);
            });

    }

    const allRecipes = () => {
        let axios = require('axios');
        let config_categories = {
            method: 'get',
            url: generateURL("/recipes/all"),
            headers: {
                'Content-Type': 'application/json'
            },
        };
        console.log(config_categories)

        axios(config_categories)
            .then(function (response) {
                setRecipes(response.data);
                console.log(response)

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(function (){}, [categoryId])

    useEffect(function (){
        onHashChanged();

        let axios = require('axios');
        let config_categories = {
            method: 'get',
            url: generateURL("/categories/all") ,
        };
        axios(config_categories)
            .then(function (response) {
                let category_array = [];
                $(response.data).each(function (index, item) {
                    category_array.push(item);
                });
                setCateories(category_array);
            })
            .catch(function (error) {
                console.log(error);
            });



    }, []);
    return(
        <div>

            {/*<!------------ Navbar Mobile------------->*/}
            <div>
                <div
                    data-uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; "
                    className="uk-navbar-transparent">

                    {/* Mobile */}
                    <div className="container d-block d-xl-none bg-white">
                        <nav className="navbar navbar-expand-lg">
                            <button className={"navbar-toggler " + Style["mobile-navbar-toggler"]} type="button" data-toggle="collapse"
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                <span data-uk-icon="icon: menu"></span>
                            </button>
                            <div>
                                <h3 className={Style["logo-title"]}>رسپا</h3>
                                <p className={Style["logo-description"] + " mt-3"}>آشپزی&nbsp;&nbsp;&nbsp;برای&nbsp;&nbsp;&nbsp;روح</p>
                            </div>


                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className={" nav ml-auto dir-rtl pr-0 py-2 " + Style["navbar-menu"]}>
                                    <li className={"nav-item " + Style.active} >
                                        <a className="nav-link" href="#">صفحه اصلی</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">دستورها</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">ارسال دستور پخت</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">درباره ما</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">ثبت نام مدیران</a>
                                    </li>

                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

            {/*<!--------- page content ----------->*/}
            <div>
                <div className="row dir-rtl w-100 mx-0">
                    <div className={"col-3 d-none d-xl-inline pt-5 "  + Style["categories-container"]}>

                        {/*<!-- logo -->*/}
                        <div className="d-flex justify-content-center">
                            <img className={Style["logo-img"] +" mt-2"} src={Logo} alt="Logo"/>
                            <div className="pr-2">
                                <h3 className={Style["logo-title"]}>رسپا</h3>
                                <p className={Style["logo-description"]+" mt-3"}>آشپزی&nbsp;&nbsp;&nbsp;برای&nbsp;&nbsp;&nbsp;روح</p>
                            </div>
                        </div>

                        {/*<!-- Menu -->*/}
                        <ul className="nav flex-column pt-4 menu-container" >
                            <li className={"nav-item " + Style["category-item"]}>
                                <Link to={{
                                    pathname: "/category",
                                }}
                                    className={"nav-link text-center " } onClick={allRecipes}>همه دستورها</Link>
                            </li>
                            {
                                categories.map((item)=> (
                                    <li className={"nav-item " + Style["category-item"]}>
                                        <Link id={item.id} className={"nav-link text-center " } onClick={()=> {
                                            onHashChanged("#" + item.id)
                                        }}
                                              to={{
                                                  pathname: "/category",
                                                  hash: "#" + item.id,
                                              }} >{item.description}</Link>
                                    </li>
                                ))
                            }

                            <li className={"nav-item mt-5 " + Style["category-item"]}>
                                <Link className="nav-link text-center nav-item-menu" to="/">صفحه اصلی</Link>
                            </li>
                            <li className={"nav-item " + Style["category-item"]}>
                                <Link className="nav-link text-center nav-item-menu" to={"/share-recipe"}>ارسال دستور پخت</Link>
                            </li>
                            <li className={"nav-item " + Style["category-item"]}>
                                <a className="nav-link text-center nav-item-menu" href="#">درباره ما</a>
                            </li>
                            <li className={"nav-item " + Style["category-item"]}>
                                <a className="nav-link text-center nav-item-menu" href="#">ثبت نام مدیران</a>
                            </li>
                        </ul>

                    </div>
                    <div className={"col-12 col-xl-9 pt-3 " + Style["list-container"]}>
                        <div className="card-columns">
                            {
                                recipes.map((item, index) => (
                                    <div className="card p-2">
                                        <img className={Style["food-img"]} src={item.image !== null ? item.image : Latest1}/>
                                        <p className={Style["food-category"] +" mt-2"}>{item.categories!== null && findCategoryById(item.categories[0])}</p>
                                        <Link to={{
                                            pathname: "/recipe",
                                            search: "id=" + item.id
                                        }}>
                                            <h6 className={Style["food-title"] +" mt-2"}>{item.description}</h6>
                                        </Link>
                                        <hr/>
                                        <div className={"d-flex " + Style["food-likes"]}>
                                            <div>
                                                <span>12k</span>
                                                <span data-uk-icon="icon: heart"></span>
                                            </div>
                                            <div className="mr-3">
                                                <span>{item.difficulty}</span>
                                                <span data-uk-icon="icon: happy"></span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
}