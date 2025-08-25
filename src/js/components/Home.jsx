import React from "react";
import Card from "./Card";
import Recetas from "./Recetas";
import Digit from "./Digit";

//create your first component
const Home = ({timer}) => {


	//props! ---> como los argumentos de una funcion 

	const texto = "No existen mas opciones"

	const cardData = [{
		picture: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F3.bp.blogspot.com%2F-qWz2aPJr9Yc%2FU7MV5DHTXvI%2FAAAAAAACPVU%2F26B3_n4fbk4%2Fs1600%2Fview-of-st-angelo-bridge-1920x1200-wallpaper.jpg&f=1&nofb=1&ipt=932fd4c12107a13fb29cd06c13b70439edef0ba28fcf3285dc809dd342bb657e',
		description: {
			lugar: 'Madrid',
			fecha: 'ayer',
			humedad: '50%'
		},
		options: ["love", "meh", "hate"]
	},
	{
		picture: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.freepik.com%2Ffotos-premium%2Famanecer-montana-vista-al-valle_820340-4446.jpg&f=1&nofb=1&ipt=a2dccb2f7de26dc5cf2a0e1d1e56cac61580a89b28f79b363dd575130fde927e',
		description: {
			lugar: 'Valencia',
			fecha: 'otro dia anterior',
			humedad: '85%'
		},
		options: ["love", "meh", "hate"]
	},
	{
		picture: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.blogs.es%2Fanexom%2Fwp-content%2Fuploads%2F2018%2F03%2Ffotografia-digital-1.jpg&f=1&nofb=1&ipt=d1246a4dc57da5e386eebab512f4b046cbab85cc4aabd8581656ab7ba8f9fe2a',
		description: {
			lugar: 'Sevilla',
			fecha: 'Hoy',
			humedad: '75%'
		},
		options: ["love", "meh", "hate"]
	},
	{
		picture: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-akHEj1LhU0w%2FU3zi6hyvs7I%2FAAAAAAACNC4%2FLPAZAvxws4M%2Fs1600%2Flas-fotos-mas-lindas-y-hermosas-de-internet-fondos-y-wallpapers-gratis-para-compartir-imagenes-gratis%2B(20).jpg&f=1&nofb=1&ipt=edb0e4287f82c501474d884f0b4188c9ed3ba77ca2b8a7c0d766583448e87c31',
		description: {
			lugar: 'La Mancha',
			fecha: 'de una fecha que no me quiero acordar',
			humedad: '99%'
		},
		options: ["love", "meh", "hate"]
	},

	]
/*
console.log(cardData[0].options)
console.log(cardData[0].options.join(''))
*/
	return (
		<div className="text-center">
			{/* <div className="row">
				<Card
					picture={'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F3.bp.blogspot.com%2F-qWz2aPJr9Yc%2FU7MV5DHTXvI%2FAAAAAAACPVU%2F26B3_n4fbk4%2Fs1600%2Fview-of-st-angelo-bridge-1920x1200-wallpaper.jpg&f=1&nofb=1&ipt=932fd4c12107a13fb29cd06c13b70439edef0ba28fcf3285dc809dd342bb657e'}
					description="Mi primera foto"
					options={texto}
				/>
				<Card
					picture={'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.freepik.com%2Ffotos-premium%2Famanecer-montana-vista-al-valle_820340-4446.jpg&f=1&nofb=1&ipt=a2dccb2f7de26dc5cf2a0e1d1e56cac61580a89b28f79b363dd575130fde927e'}
					description="Mi segunda foto"
					options={texto}
				/>
				<Card
					picture='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.blogs.es%2Fanexom%2Fwp-content%2Fuploads%2F2018%2F03%2Ffotografia-digital-1.jpg&f=1&nofb=1&ipt=d1246a4dc57da5e386eebab512f4b046cbab85cc4aabd8581656ab7ba8f9fe2a'
					description="Mi tercera foto"
					options={texto}
				/>
			</div> */}


			<Recetas
				title="Cafe con Leche"
				ingredients={['leche', 'cafe', 'azucar']}
				cookingTime='3 minutos'
			/>
			<Recetas
				title="Flan"
				ingredients={['huevos', 'leche', 'vainilla', 'azucar', 'ganas']}
				cookingTime='30 minutos'
			/>


			<div className="row">


				{
					cardData.map((el, i) => <Card key={i}
						picture={el.picture} description={el.description} options={el.options} />)
				}


			</div>


				<section>

					<Digit value={timer}/>
					<Digit value={timer}/>
					<Digit value={timer}/>
					<Digit value={timer}/>
					<Digit value={timer}/>
					<Digit value={timer}/>


				</section>


		</div>
	);
};

export default Home;