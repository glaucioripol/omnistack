import React from "react";

// esse match pega todos os parametros jogados nesta rota
function Main({ match}) {
    // pegando o paramentro que foi para rota match.params. o nome dele
    return (
        <h1>Hello world: {match.params.id}</h1>
    )

}

export default Main;