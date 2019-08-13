import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Login from './pages/Login';
import Main from './pages/Main';

/* broser router é onde vao todas rotas e cada route uma rota*/
export default function Routes(){
    // exact para setar a principal
    return (
        <BrowserRouter>
        <Route path="/" exact component={Login} />
        <Route path="/dev/:id" component={Main} />
        </BrowserRouter>
    )

}