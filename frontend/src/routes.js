import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Login from './pages/Login';
import Main from './pages/Main';

/* broser router é onde vao todas rotas e cada route uma rota*/
export default function Routes(){
    return (
        <BrowserRouter>
        <Route path="/" component={Login} />
        <Route path="/main" component={Main} />
        </BrowserRouter>
    )

}