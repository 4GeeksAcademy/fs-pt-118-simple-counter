import React from "react";
import PropTypes from "prop-types";



//desestructuramos el objeto props
const Recetas = ({ title,
    ingredients,
    cookingTime }) => {


    console.log(ingredients)

    return (
        <div className="card">

            <h1>{title}</h1>
            <ul>
                {/* 
                el key es necesario cuando generamos contenido 
                    con map para que react pueda diferenciar a cada 
                    elemento uno de otro
                    el key tiene que tener un valor unico
                */}
                {ingredients.map((el, i) => <li key={i}>{el}</li>)}
            </ul>
            <p>tiempo coccion: {cookingTime}</p>
        </div>
    )
}

//para definir el tipo de dato de mis props y si no se recibe ese tipo de dato lanza un warning por consola
Recetas.propTypes = {
    title: PropTypes.string,
    ingredients: PropTypes.array,
    cookingTime: PropTypes.string,
}


export default Recetas;