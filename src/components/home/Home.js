import React from 'react';
import Navbar from "../global/Navbar";
import Footer from "../global/Footer";
import * as Style from "./home.module.css";

import FastFood from "../../assets/images/pizza.png";
import Dessert from "../../assets/images/cake.png";
import Persian from "../../assets/images/boiled.png";
import International from "../../assets/images/chinese-food.png";
import Soup from "../../assets/images/red-bean-soup.png";
import Spice from "../../assets/images/spice.png";

import Slide1 from "../../assets/samples/slide1.jpg";
import Slide2 from "../../assets/samples/slide2.jpg";
import Latest1 from "../../assets/samples/latest1.jpg";
import Latest2 from "../../assets/samples/latest2.jpg";
import Latest3 from "../../assets/samples/latest3.jpg";
import Latest4 from "../../assets/samples/latest4.jpg";
import Latest5 from "../../assets/samples/latest5.jpg";
import {Link} from "react-router-dom";


export default function Home() {


    return (
        <div>
            <Navbar/>
            <div>
                {/* top slider */}
                <div className="container pt-4">
                    <div className="row position-relative">
                        <div className="col-12 col-xl-6 d-none d-xl-inline">
                            <img className={Style["top-slider-img"] + " mb-2"} src={Slide1}/>
                            <Link className={Style["slider-item-category"] + " pt-3"} to={{
                                pathname: "/category",
                                hash: "#spices",
                            }}><p>چاشنی و ادویه</p></Link>
                            <Link to="/recipe" className={Style["slider-item-name"]} ><h4>ادویه تند مکزیکی</h4></Link>
                        </div>
                        <div className="col-12 col-xl-6">
                            <img className={Style["top-slider-img"] + " mb-2"} src={Slide2}/>
                            <Link className={Style["slider-item-category"] + " pt-3"} to={{
                                pathname: "/category",
                                hash: "#appetizer",
                            }}><p>پیش غذا</p></Link>
                            <Link className={Style["slider-item-name"]} to="/recipe"><h4>سوپ میگو و قارچ</h4></Link>
                        </div>

                        <button className={Style["top-slider-prev"]}><span data-uk-icon="icon: chevron-left"></span></button>
                        <button className={Style["top-slider-next"]}><span data-uk-icon="icon: chevron-right"></span></button>
                    </div>
                </div>

                {/*categories*/}
                <div className="container mt-5">
                    <div className=" row d-flex justify-content-between dir-rtl">
                        <Link to={{
                            pathname: "/category",
                            hash: "#appetizer",
                        }} className="col-xl-2 col-4">
                            <div className="d-flex justify-content-center"><img className={Style["category-icon"] + " my-3"}
                                                                            src={Soup}/></div>
                            <p className={Style["category-title"]}>پیش غذا</p>
                        </Link>
                        <Link to={{
                            pathname: "/category",
                            hash: "#persian",
                        }} className="col-xl-2 col-4">
                            <div className="d-flex justify-content-center"><img className={Style["category-icon"] + " my-3"}
                                                                            src={Persian}/></div>
                            <p className={Style["category-title"]}>غدای ایرانی</p>
                        </Link>
                        <Link to={{
                            pathname: "/category",
                            hash: "#fastfood",
                        }} className="col-xl-2 col-4">
                            <div className="d-flex justify-content-center"><img className={Style["category-icon"] + " my-3"}
                                                                            src={FastFood}/></div>
                            <p className={Style["category-title"]}>فست فود</p>
                        </Link>
                        <Link to={{
                            pathname: "/category",
                            hash: "#spices",
                        }} className="col-xl-2 col-4">
                            <div className="d-flex justify-content-center"><img className={Style["category-icon"] + " my-3"}
                                                                            src={Spice}/></div>
                            <p className={Style["category-title"]}>چاشنی و ادویه</p>
                        </Link>
                        <Link to={{
                            pathname: "/category",
                            hash: "#desserts",
                        }} className="col-xl-2 col-4">
                            <div className="d-flex justify-content-center"><img className={Style["category-icon"] + " my-3"}
                                                                            src={Dessert}/></div>
                            <p className={Style["category-title"]}>دسر و شیرینی</p>
                        </Link>
                        <Link to={{
                            pathname: "/category",
                            hash: "#international",
                        }} className="col-xl-2 col-4">
                            <div className="d-flex justify-content-center"><img className={Style["category-icon"] + " my-3"}
                                                                            src={International}/></div>
                            <p className={Style["category-title"]}>غذای ملل</p>
                        </Link>
                    </div>
                </div>

                {/*latest recipes*/}
                <div className="container mt-5">
                    <h4 className={Style["latest-title"]}>جدیدترین دستورپخت‌ها</h4>
                    <div className="row dir-rtl">
                        <div className="col-6 col-xl-3 mt-4 pt-2">
                            <img className={Style["latest-item-img"]} src={Latest4}/>
                            <Link to={{
                                pathname: "/category",
                                hash: "#spices",
                            }} className={Style["latest-item-category"]}>فست فود</Link>
                            <Link to="/recipe"><h6 className={Style["latest-item-title"]}>ساندویچ گوشت و جوانه گندم</h6></Link>
                        </div>
                        <div className="col-6 col-xl-3 mt-4 pt-2">
                            <img className={Style["latest-item-img"]} src={Latest2}/>
                            <Link to={{
                                pathname: "/category",
                                hash: "#spices",
                            }} className={Style["latest-item-category"]}>دسر و شیرینی</Link>
                            <Link to="/recipe"><h6 className={Style["latest-item-title"]}>نان کروسان با مغز شکلات</h6></Link>
                        </div>
                        <div className="col-6 col-xl-3 mt-4 pt-2">
                            <img className={Style["latest-item-img"]} src={Latest3}/>
                            <Link to={{
                                pathname: "/category",
                                hash: "#spices",
                            }} className={Style["latest-item-category"]}>پیش غذا</Link>
                            <Link to="/recipe"><h6 className={Style["latest-item-title"]}>سوپ پیاز و شیر</h6></Link>
                        </div>
                        <div className="col-6 col-xl-3 mt-4 pt-2">
                            <img className={Style["latest-item-img"]} src={Latest2}/>
                            <Link to={{
                                pathname: "/category",
                                hash: "#spices",
                            }} className={Style["latest-item-category"]}>دسر و شیرینی</Link>
                            <Link to="/recipe"><h6 className={Style["latest-item-title"]}>نان کروسان با مغز شکلات</h6></Link>
                        </div>
                        <div className="col-6 col-xl-3 mt-4 pt-2">
                            <img className={Style["latest-item-img"]} src={Latest1}/>
                            <Link to={{
                                pathname: "/category",
                                hash: "#spices",
                            }} className={Style["latest-item-category"]}>دسر و شیرینی</Link>
                            <Link to="/recipe"><h6 className={Style["latest-item-title"]}>دسر شکلاتی</h6></Link>
                        </div>
                        <div className="col-6 col-xl-3 mt-4 pt-2">
                            <img className={Style["latest-item-img"]} src={Latest2}/>
                            <Link to={{
                                pathname: "/category",
                                hash: "#spices",
                            }} className={Style["latest-item-category"]}>دسر و شیرینی</Link>
                            <Link to="/recipe"><h6 className={Style["latest-item-title"]}>نان کروسان با مغز شکلات</h6></Link>
                        </div>
                        <div className="col-6 col-xl-3 mt-4 pt-2">
                            <img className={Style["latest-item-img"]} src={Latest5}/>
                            <Link to={{
                                pathname: "/category",
                                hash: "#spices",
                            }} className={Style["latest-item-category"]}>دسر و شیرینی</Link>
                            <Link to="/recipe"><h6 className={Style["latest-item-title"]}>چیزکیک با رویه شکلات</h6></Link>
                        </div>
                        <div className="col-6 col-xl-3 mt-4 pt-2">
                            <img className={Style["latest-item-img"]} src={Latest2}/>
                            <Link to={{
                                pathname: "/category",
                                hash: "#spices",
                            }} className={Style["latest-item-category"]}>دسر و شیرینی</Link>
                            <Link to="/recipe"><h6 className={Style["latest-item-title"]}>نان کروسان با مغز شکلات</h6></Link>
                        </div>
                    </div>
                </div>

            </div>
            <Footer/>
        </div>
    );
}