import React, {Suspense} from 'react';
import {BrowserRouter} from "react-router-dom";
import TheRoutes from "./Routes";
import ReactDOM from 'react-dom/client';
import {createBrowserHistory} from "history";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
            <Suspense fallback="loading">
                <TheRoutes/>
            </Suspense>
    // </React.StrictMode>,
);
