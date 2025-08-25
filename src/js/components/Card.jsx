import React from "react";

//utilizamos el objeto props como objeto
const Card = (props) => {
    // las propiedades con guiones se transforman a camelCase 
    // se tienen que poner dos {{}}, uno para indicar que es JS, el segundo es el objeto con las propiedades CSS
    // max-width ---> maxWidth 
    // font-size ---> fontSize 
    //ejemplo: style={{maxWidth: '25rem', backgroundColor: 'black'}}
    // const divStyle = {
    //     maxWidth: '25rem', 
    //     backgroundColor: 'black'
    // }
    //ejemplo: style={divStyle}

    // React solo puede devolver UN elemento, dentro de este elemento pueden haber tantos como necesitemos.
    // podemos usar el fragment <></> como padre cuando queramos devolver varios elementos y que NO se añada el fragmento al HTML


    /*
ejemplo de uso de fragment
  <>
        
        <article className="card"  >
            <div className="card-img-top">
                <img className="img-fluid" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F3.bp.blogspot.com%2F-qWz2aPJr9Yc%2FU7MV5DHTXvI%2FAAAAAAACPVU%2F26B3_n4fbk4%2Fs1600%2Fview-of-st-angelo-bridge-1920x1200-wallpaper.jpg&f=1&nofb=1&ipt=932fd4c12107a13fb29cd06c13b70439edef0ba28fcf3285dc809dd342bb657e" alt="" />
            </div>
            <div className="card-body">Descripcion: Puente de Triana</div>
            <div className="card-foot">Opciones: Amarlo...</div>
        </article>
         <article className="card"  >
            <div className="card-img-top">
                <img className="img-fluid" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F3.bp.blogspot.com%2F-qWz2aPJr9Yc%2FU7MV5DHTXvI%2FAAAAAAACPVU%2F26B3_n4fbk4%2Fs1600%2Fview-of-st-angelo-bridge-1920x1200-wallpaper.jpg&f=1&nofb=1&ipt=932fd4c12107a13fb29cd06c13b70439edef0ba28fcf3285dc809dd342bb657e" alt="" />
            </div>
            <div className="card-body">Descripcion: Puente de Triana</div>
            <div className="card-foot">Opciones: Amarlo...</div>
        </article>
        </>

    */

    const optionsMapper = {
        love: 'heart',
        meh: 'face-grimace',
        hate: 'heart-crack'
    }


    console.log(props, typeof props)
    console.log(props)

    return (
        <div className="col-sm-12 col-md-6 col-lg-4">
            <article className="card"  >
                <div className="card-img-top">
                    <img className="img-fluid" src={props.picture} alt="" />
                </div>
                <div className="card-body">Descripcion:
                    <p>
                        lugar: {props.description.lugar}
                    </p>
                    <p>
                        fecha: {props.description.fecha}
                    </p>
                    <p>
                        humedad: {props.description.humedad}
                    </p>
                </div>
                <div className="card-footer d-flex justify-content-between">

                    {
                        props.options.map((el, i) =>
                            <span key={i} 
                        className={`mx-3 fa-solid fa-${optionsMapper[el]} 
                        ${el==='love'? 'text-danger': ''} 
                        ${el==='meh' && 'text-success'} 
                        ${el==='hate' && 'text-dark'}  `}
                        />)
                    }

                </div>
            </article>
        </div>



    )
}

export default Card