import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {createBrowserHistory} from "history";

import Home from "./components/home/Home";
import Category from "./components/category/Category";
import Recipe from "./components/recipe/Recipe";
import ShareRecipe from "./components/recipe/ShareRecipe";

export default function TheRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" caseSensitive={false} element={<Home/>}/>
                <Route path="/category" caseSensitive={false} element={<Category/>}/>
                <Route path="/recipe" caseSensitive={false} element={<Recipe/>}/>
                <Route path="/share-recipe" caseSensitive={false} element={<ShareRecipe/>}/>
            </Routes>

        </BrowserRouter>
    )
}