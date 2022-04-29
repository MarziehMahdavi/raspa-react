import React from 'react';
import * as Style from './navbar.module.css';
import Logo from "../../assets/images/chef.png"
import {Link} from "react-router-dom";


export default function Navbar() {
    return (
        <div>

            {/*   top bar   */}
            <div className={"d-none d-xl-block " + Style["nav-top-bar"]}>
            <div className="container d-flex justify-content-between py-2">
                <div className="d-flex">
                    <a className="px-2" href="#" data-uk-icon="icon: instagram"></a>
                    -
                    <a className="px-2" href="#" data-uk-icon="icon: whatsapp"></a>
                    -
                    <a className="px-2" href="#" data-uk-icon="icon: youtube"></a>
                    -
                    <a className="px-2" href="#" data-uk-icon="icon: linkedin"></a>
                </div>
                <div>ما را در <a href="#">خبرنامه</a> دنبال کنید</div>
            </div>

        </div>

            {/* middle logo & search | Desktop */}
    <div className={"container d-none d-xl-flex justify-content-between dir-rtl mt-3 pb-3 " + Style["nav-middle-bar"]}>
        <div className="d-flex">
            <img className={Style["logo-img"] + " mt-2"} src={Logo} alt={"Logo"}/>
            <div className="pr-2">
                <h3 className={Style["logo-title"]}>رسپا</h3>
                <p className={Style["logo-description"] + " mt-3"}>آشپزی&nbsp;&nbsp;&nbsp;برای&nbsp;&nbsp;&nbsp;روح</p>
            </div>
        </div>
        <div className="pt-3 d-flex ">
            <div><input className={Style["search-input"]} placeholder="جستجو"/></div>
            <div className="pt-2"><button className={Style["search-btn"] + " mr-2"}><span data-uk-icon="icon: search"></span></button></div>
        </div>
    </div>
    <div data-uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; "
         className="uk-navbar-transparent">

        { /* Desktop */ }
        <nav className="container d-none d-xl-block bg-white">
            <div className="nav">
                <ul className={" nav ml-auto dir-rtl pr-0 py-2 " + Style["navbar-menu"]}>
                    <li className="nav-item active ">
                        <a className="nav-link pr-0" href="#">صفحه اصلی</a>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link"
                              to={{
                                  pathname: "/category",
                                  hash: "#appetizer",
                              }}>دسته‌بندی</Link>
                        <div className={Style["category-drop-container"]} data-uk-drop="pos: bottom-right;">
                            <div className="uk-card  uk-card-default">
                                <ul className="nav flex-column px-0">
                                    <li className="nav-item ">
                                        <Link className={"nav-link text-center "}
                                              to={{
                                                  pathname: "/category",
                                                  hash: "#appetizer",
                                              }}>پیش غذا</Link>
                                    </li>
                                    <li className="nav-item ">
                                        <Link className="nav-link text-center "
                                              to={{
                                                  pathname: "/category",
                                                  hash: "#persian",
                                              }}>غذای ایرانی</Link>
                                    </li>
                                    <li className="nav-item ">
                                        <Link className="nav-link text-center "
                                              to={{
                                                  pathname: "/category",
                                                  hash: "#fastfood",
                                              }}>فست فود</Link>
                                    </li>
                                    <li className="nav-item ">
                                        <Link className="nav-link text-center "
                                              to={{
                                                  pathname: "/category",
                                                  hash: "#spices",
                                              }}>چاشنی و ادویه</Link>
                                    </li>
                                    <li className="nav-item ">
                                        <Link className="nav-link text-center "
                                              to={{
                                                  pathname: "/category",
                                                  hash: "#desserts",
                                              }}>دسر و شیرینی</Link>
                                    </li>
                                    <li className="nav-item ">
                                        <Link className="nav-link text-center "
                                              to={{
                                                  pathname: "/category",
                                                  hash: "#international",
                                              }}>غذای ملل</Link>
                                    </li>
                                </ul>

                            </div>
                        </div>
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
    );
}