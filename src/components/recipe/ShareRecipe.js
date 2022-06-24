import React, {useEffect, useState} from 'react';
import Navbar from "../global/Navbar";
import Footer from "../global/Footer";
import * as Style from "./shareRecipe.module.css";
import * as $ from 'jquery'
import "bootstrap-icons/font/bootstrap-icons.css";
import {NotificationManager, NotificationContainer} from "react-notifications";
import 'react-notifications/lib/notifications.css';
import {useNavigate } from 'react-router-dom'

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import Slide2 from "../../assets/samples/slide2.jpg";
import {generateURL} from "../../requests";

export default function ShareRecipe() {
    const navigate = useNavigate()
    const [file, setFile] = useState();

    const [ingredients, setIngredients] = useState([]);
    const [categories, setCategories] = useState([]);
    const [direction, setDirection] = useState("");


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

    const submitRecipe = () => {
        let axios = require('axios');

        let ingredient_array = [];
        ingredients.map((item) => {
            ingredient_array.push(item.id);
        })

        let data = {
            // "id": 0,
            "description": $("#name_input").val(),
            "prepTime": parseInt($("#prep_time_input").val()),
            "cookTime": parseInt($("#cook_time_input").val()),
            "servings": parseInt($("#servings_input").val()),
            "source": "string",
            "image": [
                $("#image_input").val()
            ],
            "directions": direction,
            "ingredientCommands": ingredient_array,
            "difficulty": $("#difficulty_input").val(),
            "categories": [
                parseInt($("#category_input").val())
            ]
        }
        console.log(data)
        let config = {
            method: 'post',
            url: generateURL("/ingredients/save"),
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(data)
        };

        axios(config)
            .then(function (response) {
                console.log(response);
                NotificationManager.success("دستور پخت ارسال شد", "", 2500);
                setTimeout(function (){
                    navigate("/")
                }, 2500)

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const onSubmitIngredient = () => {
        let axios = require('axios');

        let data = {
            // "id": 0,
            "description": $("#ingredient_name").val(),
            "amount": parseInt($("#ingredient_count").val()),
            "unitOfMeasure": $("#ingredient_unit").val(),
            // "recipeId": 0
        }
        console.log(data)
        let config = {
            method: 'post',
            url: generateURL("/ingredients/save"),
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(data)
        };

        axios(config)
            .then(function (response) {
                console.log(response)
                let ingredients_array = [...ingredients];
                ingredients_array.push(response.data);
                setIngredients(ingredients_array);

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const onRemoveIngredient = (id, index) => {
        let axios = require('axios');

        let config = {
            method: 'delete',
            url: generateURL("/ingredients/delete/") + id,
            headers: {
                'Content-Type': 'application/json'
            },
        };

        console.log(config)

        axios(config)
            .then(function (response) {
                console.log(response)
                let array = [...ingredients];
                array.splice(index, 1);
                setIngredients(array);

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(function (){

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
                setCategories(category_array);
            })
            .catch(function (error) {
                console.log(error);
            });



    }, []);

    return (<div>
        <Navbar/>
        <div className={"container dir-rtl " + Style.formContainer}>
            <h4 className={"text-right mt-5"}>ارسال دستور پخت</h4>
            <div className={"row"}>
                <div className={"col-12"}>
                    <label>نام غذا:</label>
                    <input type={"text"} id={'name_input'} />
                </div>
                <div className={"col-12 col-xl-6"}>
                    <label>زمان آماده سازی(دقیقه):</label>
                    <input type={"number"} id={"prep_time_input"} />
                </div>
                <div className={"col-12 col-xl-6"}>
                    <label>زمان پختن(دقیقه):</label>
                    <input type={"number"} id={"cook_time_input"}/>
                </div>
                <div className={"col-12 col-xl-6"}>
                    <label>تعداد افراد:</label>
                    <input type={"number"} id={"servings_input"}/>
                </div>
                <div className={"col-12 col-xl-6"}>
                    <label>درجه سختی غذا:</label>
                    <select id={"difficulty_input"}>
                        <option value={"EASY"}>آسان</option>
                        <option value={"MEDIUM"}>متوسط</option>
                        <option value={"HARD"}>سخت</option>
                    </select>
                </div>
                <div className={"col-12 col-xl-6"}>
                    <label>دسته‌بندی غذا:</label>
                    <select id={"category_input"}>
                        {
                            categories.map((item) => (
                                <option value={item.id}>{item.description}</option>
                            ))
                        }
                    </select>
                </div>
                <div className={"col-12"}>
                    <label>عکس غذا:</label>
                    <input  id={"image_input"} className={""} type={"text"} />
                    {/*<button className={Style.uploadBtn + " btn"} onClick={() => {$("#image_input").click()}}>آپلود عکس</button>*/}
                    {/*{ file && <img className={"w-100 rounded"} src={file}/>}*/}

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
                                <td>ثبت</td>
                                <td>حذف</td>
                            </tr>
                            </thead>
                            <tbody id={"ingredients_tbody"}>
                            <tr>
                                <td><input type={"text"} id={'ingredient_name'}/></td>
                                <td><input type={"number"} id={'ingredient_count'}/></td>
                                <td><input type={"text"} id={'ingredient_unit'}/></td>
                                <td><button className={'btn btn-success'} onClick={onSubmitIngredient}><i className="bi bi-check-lg"></i></button></td>
                                <td></td>
                            </tr>
                            {
                                ingredients.map((item, index) => (
                                    <tr>
                                        <td>{item.description}</td>
                                        <td>{item.amount}</td>
                                        <td>{item.unitOfMeasure}</td>
                                        <td></td>
                                        <td><button className={'btn btn-danger'} onClick={()=>onRemoveIngredient(item.id, index)}><i className="bi bi-trash"></i></button></td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
                    {/*<button className={Style.addIngredients + " rounded-circle btn"} onClick={onAddIngredientsClick}><span data-uk-icon={"icon:plus"}></span></button>*/}
                </div>
                <div className={"col-12"}>
                    <label>دستور پخت:</label>
                    <CKEditor
                        config={ {
                            language:'ar'
                        } }
                        editor={ ClassicEditor }
                        data=""
                        onChange={ ( event, editor ) => {
                            setDirection(editor.getData())
                        } }
                    />


                </div>
                <div className={"col-12 d-flex justify-content-center mt-4"}>
                    <button className={Style.uploadBtn + " btn"} onClick={submitRecipe}>ارسال دستور پخت</button>
                </div>
            </div>
        </div>
        <NotificationContainer/>
        <Footer/>
    </div>);
}



