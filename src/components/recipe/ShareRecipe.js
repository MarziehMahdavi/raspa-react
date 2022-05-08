import React , {useState} from 'react';
import Navbar from "../global/Navbar";
import Footer from "../global/Footer";
import * as Style from "./shareRecipe.module.css";
import * as $ from 'jquery'

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import Slide2 from "../../assets/samples/slide2.jpg";

export default function ShareRecipe() {
    const [file, setFile] = useState();


    const handleChange = (event) => {
        setFile(URL.createObjectURL(event.target.files[0]));
    }

    const onAddIngredientsClick = () => {
        let tbody = $("#ingredients_tbody");
        console.log(tbody)

        let tr = "<tr>\n" +
            "                                <td><input type={\"text\"}/></td>\n" +
            "                                <td><input type={\"number\"}/></td>\n" +
            "                                <td>\n" +
            "                                    <select>\n" +
            "                                        <option>انتخاب کنید...</option>\n" +
            "                                        <option>قاشق غذاخوری</option>\n" +
            "                                        <option>پیمانه</option>\n" +
            "                                        <option>قاشق چای خوری</option>\n" +
            "                                    </select>\n" +
            "                                </td>\n" +
            "                            </tr>";
        $(tbody).prepend(tr);
    }
    return (<div>
        <Navbar/>
        <div className={"container dir-rtl " + Style.formContainer}>
            <h4 className={"text-right mt-5"}>ارسال دستور پخت</h4>
            <div className={"row"}>
                <div className={"col-12"}>
                    <label>نام غذا:</label>
                    <input type={"text"} />
                </div>
                <div className={"col-12 col-xl-6"}>
                    <label>زمان آماده سازی(دقیقه):</label>
                    <input type={"number"} />
                </div>
                <div className={"col-12 col-xl-6"}>
                    <label>زمان پختن(دقیقه):</label>
                    <input type={"number"} />
                </div>
                <div className={"col-12 col-xl-6"}>
                    <label>تعداد افراد:</label>
                    <input type={"number"} />
                </div>
                <div className={"col-12 col-xl-6"}>
                    <label>درجه سختی غذا:</label>
                    <select>
                        <option>آسان</option>
                        <option>متوسط</option>
                        <option>سخت</option>
                    </select>
                </div>
                <div className={"col-12"}>
                    <label>عکس غذا:</label>
                    <input onChange={handleChange} id={"image_input"} className={"d-none"} type={"file"} accept="image/png, image/jpeg, image/jpg"/>
                    <button className={Style.uploadBtn + " btn"} onClick={() => {$("#image_input").click()}}>آپلود عکس</button>
                    { file && <img className={"w-100 rounded"} src={file}/>}

                </div>
                <div className={"col-12"}>
                    <label>مواد اولیه:</label>
                    <div className="table-responsive mt-3">
                        <table className={"table text-right " + Style["ingredients-table"]}>

                            <thead>
                            <tr>
                                <td>نام ماده</td>
                                <td>مقدار لازم</td>
                                <td>واحد</td>
                            </tr>
                            </thead>
                            <tbody id={"ingredients_tbody"}>
                            <tr>
                                <td><input type={"text"}/></td>
                                <td><input type={"number"}/></td>
                                <td>
                                    <select>
                                        <option>انتخاب کنید...</option>
                                        <option>قاشق غذاخوری</option>
                                        <option>پیمانه</option>
                                        <option>قاشق چای خوری</option>
                                    </select>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <button className={Style.addIngredients + " rounded-circle btn"} onClick={onAddIngredientsClick}><span data-uk-icon={"icon:plus"}></span></button>
                </div>
                <div className={"col-12"}>
                    <label>دستور پخت:</label>
                    <CKEditor
                        config={ {
                            language:'ar'
                        } }
                        editor={ ClassicEditor }
                        data=""
                    />


                </div>
                <div className={"col-12 d-flex justify-content-center mt-4"}>
                    <button className={Style.uploadBtn + " btn"}>ارسال دستور پخت</button>
                </div>
            </div>
        </div>

        <Footer/>
    </div>);
}



