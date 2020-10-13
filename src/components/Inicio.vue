<template>
	<div class="container">
		<div class="grid-container">
			<div class="banner">
				<img alt="Vue logo" src="../assets/Início/banner.svg">
				<div class="banner-text">
					<h1>Lorem ipsum dolor sit amet</h1>
					<p>Lorem ipsum dolor sit amet</p>
					<button>LOREM IPSUM</button>
				</div>
			</div>
			<div class="grid-yoga">
				<div class="yoga">
					<img alt="Vue logo" src="../assets/Início/kike-vega-F2qh3yjz6Jk-unsplash.svg">
					<div class="yoga-text">
						<h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
						<div class="yoga-text-flex">
							<p>VIAGEM</p>
							<p>por Fulano de Tal</p>
						</div>
					</div>
				</div>
				<div class="grid-yoga-direita">
					<div class="podcast">
						<img alt="Vue logo" src="../assets/Início/bruce-mars-ZXq7xoo98b0-unsplash.svg">
						<div class="podcast-text">
							<p>Namahcast #122</p>
							<h1>Nome do episódio do podcast lorem ipsum dolor sit amet consectetur eli...</h1>
					</div>
					</div>
					<div class="grid-yoga-direita-small">
						<div class="curso">
							<img alt="Vue logo" src="../assets/Início/rawan-yasser-E0Sbr9d1IV0-unsplash.svg">
							<div class="curso-text">
								<p>CURSO - 04 ABR</p>
								<h1>Imersão Vinyasa Flowt</h1>
							</div>
						</div>
							<div class="produto">
								<img alt="Vue logo" src="../assets/Início/shampoo-solido-namah_Re73DDa.svg">
							<div class="produto-text">
								<h1>Condicionador Namah</h1>
								<p>COMPRE AGORA</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<hr/>
		<div class="recomendam">
			<div>
				<p class="especialistas">nossos especialistas</p>
				<h1>recomendam</h1> 
			</div>
			<div class="consegui">
				<div>
					<img alt="Vue logo" src="../assets/Início/livro-acenda-a-sua-luz.svg">
					<p class="titulo">Livro Acenda a Sua Luz</p>
					<p class="subtitulo">Carol Rache</p>
					<p class="preço">R$ 54,00</p>
				</div>
				<div class="menu-footer">
				<img alt="Vue logo" src="../assets/Início/camiseta-solidaria.svg">
					<p class="titulo">Camiseta Solidária</p>
					<p class="subtitulo">Tamanho único</p>
					<p class="preço">R$ 149,00</p>
				</div>
				<div class="menu-footer">
				<img alt="Vue logo" src="../assets/Início/tapete-viagem-passaro.svg">
					<p class="titulo">Tapete Viagem Pássaro</p>
					<p class="subtitulo">Pássaro</p>
					<p class="preço">R$ 237,00</p>
				</div>
					<div>
					<img alt="Vue logo" src="../assets/Início/livro-acenda-a-sua-luz.svg">
					<p class="titulo">Livro Acenda a Sua Luz</p>
					<p class="subtitulo">Carol Rache</p>
					<p class="preço">R$ 54,00</p>
				</div>
				<div class="menu-footer">
				<img alt="Vue logo" src="../assets/Início/camiseta-solidaria.svg">
					<p class="titulo">Camiseta Solidária</p>
					<p class="subtitulo">Tamanho único</p>
					<p class="preço">R$ 149,00</p>
				</div>
				<div class="menu-footer">
				<img alt="Vue logo" src="../assets/Início/tapete-viagem-passaro.svg">
					<p class="titulo">Tapete Viagem Pássaro</p>
					<p class="subtitulo">Pássaro</p>
					<p class="preço">R$ 237,00</p>
				</div>
			</div>	
		</div>		
		<hr/>
	</div>
</template>
<script>
export default {
    name: 'Inicio',
		
}
</script>
<style scoped lang="scss">
.container {
	padding-bottom: 100px;
	.grid-container {
		display: grid;
		gap: 30px;
		padding-top: 30px;
		img {
			width: 100%;
			height: auto;
		}
		.banner {
			position: relative;
			.banner-text {
				text-align: center;
				color: gray;
				height: auto;
				position: absolute;
				top: 5%;
				left: 50%;
				z-index: 2;
				h1 {
					max-width: 350px;
					font-family: URW Chancery L;
					color: black;
					font-size: 2vw;
				}
				p {
					color: #666666;
					margin-bottom: 20px;
					font-size: 0.9vw;	
				}
				button {
					padding: 15px 50px;
					background-color:#73A8A0;
					border: none;
					color: white;
					cursor: pointer;
					font-size: 0.8vw;
					&:hover {
						background-color: white;
						color: #73A8A0;
						border: 1px solid #73A8A0; 
					}
				}
			}
		}
		.grid-yoga {
			display: grid;
			grid-template-columns: 2fr 1fr;
			gap: 20px;
			padding-bottom: 30px;
				.yoga {
					position: relative;
					.yoga-text {
						color: white;
						padding: 20px;
						position: absolute;
						bottom: 0;
						h1 {
							font-size: 2vw;
							font-family: URW Chancery L;
							cursor: pointer;
						}
						.yoga-text-flex {
							display: flex;
							justify-content: space-between;
							width: 250px;
							p {
								border-bottom: 0.8px solid white;
								cursor: pointer;
								font-size: 0.9vw;
							}
						}
					}
				}
			.grid-yoga-direita {
				display: grid;
				grid-template-rows: 1fr 1fr;
				row-gap: 10px;
				.podcast {
					position: relative;
					.podcast-text {
						color: white;
						position: absolute;
						bottom: 0;
						padding: 5px;
						cursor: pointer;
						p {
							font-size: 0.8vw;
						}
						h1 {
							font-size: 1.4vw;
							font-family: URW Chancery L;
							cursor: pointer;
						}
					}
				}
				.grid-yoga-direita-small {
					display: grid;
					grid-template-columns: 1fr 1fr;
					gap: 20px;
					.curso {
						position: relative;
						.curso-text {
							cursor: pointer;
							color: white;
							padding: 5px;
							position: absolute;
							bottom: 0;
							p {
							font-size: 0.6vw;
							}
							h1 {
								font-size: 1.5vw;
								font-family: URW Chancery L;
							}
						}
					}
					.produto {
						position: relative;
						.produto-text {
							cursor: pointer;
							color: white;
							padding: 5px;
							position: absolute;
							bottom: 0;
							p {
							font-size: 0.6vw;
							}
							h1 {
								font-size: 1.5vw;
								font-family: URW Chancery L;
							}
						}
					}
				}
			}
		}
	}
	.recomendam {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		align-items: center;
		.consegui {
				display: grid;
				grid-template-columns: repeat(6, 1fr);
				gap: 40px;
				text-align: center;
			}
		.especialistas {
			padding: 0;
			margin: 0;
		}
		h1 {
			padding: 0;
			margin: 0;
			font-family: URW Chancery L;
		}
		.titulo {
			font-size: 12px;
			font-weight:bold;
			margin: 0;	
		}
		.subtitulo {
			font-size: 11px;
			color: #666666;
			margin: 0;
		}
		.preço {
			font-size: 12px;
		}
	}
}

.flex-produtos {
	display: flex;
	grid-template-columns: 1fr;
}

@media(max-width: 767px) {
	.container {
		.grid-container {
			display: grid;
			gap: 20px;
			padding-top: 20px;
			.banner {
				position: relative;
				img {
					object-fit: cover;
					height: 15vh;
					width: 100%;
				}
				.banner-text {
					text-align: center;
					position: absolute;
					top: 10%;
					left: 40%;
					h1 {
						font-size: 15px;
					}
					p {
						margin:5px;
						font-size: 10px;
					}
					button {
						padding: 5px 20px;
						font-size: 5px;
					}
				}
			}
			.grid-yoga {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				grid-row-gap: 20px;
				.yoga > .yoga-text {
					h1 {
						font-size: 20px;
					}
					.yoga-text-flex {
						width: 70px;
						p {
							font-size: 5px;
						}
					}
				}
				.grid-yoga-direita {
					display: grid;
					row-gap: 20px;
					.podcast > .podcast-text {
						h1 {
							font-size: 20px;
						}
						p {
							font-size: 10px;
						}
					}
					.grid-yoga-direita-small {
						display: grid;
						grid-template-columns: 1fr 1fr;
						gap: 20px;
						.curso > .curso-text {
							h1 {
								font-size: 20px;
							}
							p {
								font-size: 10px;
							}
						}
						.produto > .produto-text {
							h1 {
								font-size: 20px;
							}
							p {
								font-size: 10px;
							}
						}		
					}
				}
			}
		}
		.recomendam {
			text-align: center;
			display: grid;
			grid-template-columns: 1fr;
			gap: 20px;
			.consegui {
				display: grid;
				grid-template-columns: 1fr 1fr;
			}
		}
	}
}


</style>
