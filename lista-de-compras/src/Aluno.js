import React from "react"

function Aluno(props) {             
    console.log(props.nome)
    return (

        <>
        <h1>{props.nome} - {props.idade} - 20 anos</h1>
        </>


        <h1>{props.nome} - {props.idade} - 20 anos</h1>
    )
}

export default Aluno