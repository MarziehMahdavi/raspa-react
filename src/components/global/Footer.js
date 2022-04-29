import React, {useEffect} from 'react';
import * as $ from 'jquery'
import * as Style from './footer.module.css';



export default function Footer() {

    useEffect(function () {
        $(".jump-button").on("click", () => {$('html, body').animate({scrollTop:0}, 'slow');})
    }, []);
    return (
        <footer className={Style.footer + " mt-5 pt-5 position-relative"}>
            <div className="">
                <h2 className={Style["footer-logo-title"]}>رسپا</h2>
                <p className={Style["footer-logo-description"] + " mt-3"}>آشپزی&nbsp;&nbsp;&nbsp;برای&nbsp;&nbsp;&nbsp;روح</p>
            </div>
            <p className= {"mx-auto col-10 col-xl-4 pt-4 " + Style["footer-text"]}>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
                متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
                کاربردهای متنوع با هدف بهبود ابزارهای کاربردی
            </p>
            <div className={"d-flex justify-content-center " + Style["footer-social"]}>
                <a className="px-2" href="#" data-uk-icon="icon: instagram"></a>
                -
                <a className="px-2" href="#" data-uk-icon="icon: whatsapp"></a>
                -
                <a className="px-2" href="#" data-uk-icon="icon: youtube"></a>
                -
                <a className="px-2" href="#" data-uk-icon="icon: linkedin"></a>
            </div>

            <div className={Style["footer-divider"] + " mt-4 mb-3"}></div>
            <div className="container">
                <div className="row d-flex justify-content-between">
                    <div className="d-xl-inline  d-flex flex-grow-1 justify-content-center"><a href="#"
                                                                                               className={Style["footer-privacy"]}>قوانین
                        و مقررات</a></div>
                    <p className={Style["footer-rights"] + " text-center text-xl-right"}>@2022 | تمامی حقوق این سایت متعلق به <a
                        href="#">رسپا</a> میباشد</p>
                </div>
            </div>


            <button className={Style["jump-button"] + " jump-button"}><span data-uk-icon="icon: chevron-up"></span></button>

        </footer>
    );
}