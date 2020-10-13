<template>
	<div class="container">
		<div class="grid-container">
			<div class="grid-blog-cima">
				<div class="blog-cima">
					<img alt="Vue logo" src="../assets/Início/kike-vega-F2qh3yjz6Jk-unsplash.svg">
					<div class="blog-cima-text">
						<h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
						<div class="blog-cima-text-flex">
							<p>VIAGEM</p>
							<p>por Fulano de Tal</p>
						</div>
					</div>
				</div>
				<div class="blog-cima">
					<img alt="Vue logo" src="../assets/Blog/samantha-gades-k95uqdEe8R4-unsplash.svg">
					<div class="blog-cima-text">
						<h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
						<div class="blog-cima-text-flex">
							<p>DESENVOLVIMENTO PESSOAL</p>
							<p>por Fulano de Tal</p>
						</div>
					</div>
				</div>	
			</div>





			<div class="grid-blog-baixo">
				<div class="blog-baixo">
					<img alt="Vue logo" src="../assets/Blog/jenny-hill-Io2Zgb3_kdk-unsplash.svg">
					<div class="blog-baixo-text">
						<h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
						<p class="viagem">VIAGEM</p>
						<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...</p>
					</div>
				</div>	
				<div class="blog-baixo">	
					<img alt="Vue logo" src="../assets/Blog/samantha-gades-k95uqdEe8R4-unsplash.svg">
					<div class="blog-baixo-text">
						<h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
						<p class="viagem">VIAGEM</p>
						<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...</p>
					</div>
				</div>
					<div class="assine">
						<div>
							<h1>Namah <br> no seu e-mail</h1>
							<p>Assine nossa newsletter</p>
						</div>	
						<div>
							<input class="email" type="email" placeholder="Seu e-mail">
							<button class="btn">Assinar</button>
						</div>
						<p class="termo">Ao clicar em “assinar”, você concorda em receber
							e-mails do Espaço Namah a aceita nossos Termos de Uso
							e nossas Políticas de Privacidade.
						</p>
					</div>
				</div>
			
		</div>
	</div>
</template>
<script>
export default {
  name: 'Blog',	
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
		.grid-blog-cima {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 30px;
			padding-bottom: 30px;
				.blog-cima {
					position: relative;
					.blog-cima-text {
						color: white;
						padding: 20px;
						position: absolute;
						bottom: 0;
						h1 {
							font-size: 2vw;
							font-family: URW Chancery L;
							cursor: pointer;
						}
						.blog-cima-text-flex {
							display: flex;
							justify-content: space-between;
							
							p {
								border-bottom: 0.4px solid white;
								cursor: pointer;
								font-size: 0.9vw;
							}
						}
					}
				}
			}

		.grid-blog-baixo {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			gap: 30px;
			.blog-baixo {
				.blog-baixo-text {
					bottom: 0;
					padding: 5px;
					cursor: pointer;
					.viagem {
						cursor: pointer;
						font-size: 0.8vw;
						margin: 20px 0;
					}
					p {
						font-size: 0.9vw;
						padding: 0;
						margin: 0;
					}
					h1 {
						font-size: 1.8vw;
						font-family: URW Chancery L;
						cursor: pointer;
					}
				}
			}
			.assine {
				display: grid;
				grid-template-rows: 1fr 1fr 1fr;
				gap: 20px;
				align-items: center;
				justify-items:center;
				border: 2px solid black;
				text-align: center;
				padding: 15px;
				h1 {
					padding: 0;
					margin: 0;
					font-size: 2vw;
					font-family: URW Chancery L;
				}
				p {
					font-size: 0.9vw;
					color: #666666
				}
				.email {
					display: grid;
					padding: 10px;
					font-size: 1vw;
					margin-bottom: 20px;
				}
				.btn {
					background-color:transparent;
					color: black;
					padding: 15px 30px;
					border: 1px solid black;
					cursor: pointer;
					font-weight: bold;
					text-transform: uppercase;
					&:hover {
						color: white;
						background-color: black;
					}
				}
				.termo {
					font-size: 0.8vw;
				}
			}
		}
	}
}

@media(max-width: 767px) {
	.container > .grid-container > .grid-blog-cima {
		display: grid;
		grid-template-columns: 1fr;
		gap: 60px;
			.blog-cima {
				.blog-cima-text {
				h1 {
					font-size: 25px;
				}
				.blog-cima-text-flex {
					p {
						font-size: 10px;
					}
				}
			}
		}
	}
		.container > .grid-container > .grid-blog-baixo {
			display: grid;
			grid-template-columns: 1fr;
			gap: 60px;
			.blog-baixo > .blog-baixo-text {
			.viagem {
				font-size: 10px;
			}
			p {
				font-size: 15px;
			}
			h1 {
				font-size: 25px;
			}
		}
		.assine {
			h1 {
				font-size: 30px;
			}
			p {
				font-size: 15px;
			}
			.email {
				font-size: 15px;
			}
			.termo {
				font-size: 9px;
			}
		}
	}
}
</style>
