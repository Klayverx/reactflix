import React, { useState, useEffect } from 'react'
import PageDefault from '../../components/PageDefault'
import Carousel from '../../components/Carousel'
import BannerMain from '../../components/BannerMain'
import categoriasRepository from '../../repositories/categorias'

function Home() {
	const [dadosIniciais, setdadosIniciais] = useState([])

	useEffect(() => {
		categoriasRepository
			.getAllWithVideos()
			.then(item => {
				setdadosIniciais(item)
			})
			.catch(err => {
				console.log(err)
			})
	}, [])

	return (
		<PageDefault>
			{dadosIniciais.length === 0 && <div>Loading...</div>}

			{dadosIniciais.map((categoria, indice) => {
				if (indice === 0) {
					return (
						<div key={categoria.id}>
							<BannerMain
								videoTitle={dadosIniciais[0].videos[0].titulo}
								url={dadosIniciais[0].videos[0].url}
								videoDescription={dadosIniciais[0].videos[0].description}
							/>
							<Carousel ignoreFirstVideo category={dadosIniciais[0]} />
						</div>
					)
				}

				return <Carousel key={categoria.id} category={categoria} />
			})}
		</PageDefault>
	)
}

export default Home
