<template>
	<div class="container">
		<div class="grid">
			<div class="card">
				<img src="../assets/Podcasts/anupam-mahapatra-Vz0RbclzG_w-unsplash.svg"/>
				<div class="card-content">
					<p>Namacast #123</p>
					<h3>Título do podcast lorem ipsum dolor sit amet, consectetur elit tempor ut labore magna aliqua et dolore</h3>
					<div class="card-content-grid">
						<span>Descrição do episódio do podcast lorem ipsum dolor sit amet, consectetur elit tempor</span>
						<button class="play"><font-awesome-icon icon="play"/></button>
					</div>	
				</div>
			</div>
			<div class="card">
				<img  src="../assets/Início/bruce-mars-ZXq7xoo98b0-unsplash.svg"/>
				<div class="card-content">
					<p>Namacast #122</p>
					<h3>Título do podcast lorem ipsum dolor sit amet, consectetur elit tempor ut labore magna aliqua et dolore</h3>
					<div class="card-content-grid">
						<span>Descrição do episódio do podcast lorem ipsum dolor sit amet, consectetur elit tempor</span>
						<button class="play"><font-awesome-icon icon="play"/></button>
					</div>	
				</div>
			</div>
			<div class="card">
				<img  src="../assets/Podcasts/kaylee-garrett-GaprWyIw66o-unsplash.svg"/>
				<div class="card-content">
					<p>Namacast #121</p>
					<h3>Título do podcast lorem ipsum dolor sit amet, consectetur elit tempor ut labore magna aliqua et dolore</h3>
					<div class="card-content-grid">
						<span>Descrição do episódio do podcast lorem ipsum dolor sit amet, consectetur elit tempor</span>
						<button class="play"><font-awesome-icon icon="play"/></button>
					</div>	
				</div>
			</div>
		</div>
		<button class="btn">VEJA TODOS OS PODCASTS <font-awesome-icon class="play" icon="long-arrow-alt-right"/></button>
	</div>
</template>
<script>
export default {
  name: 'NamahConcept'
}
</script>
<style scoped lang="scss">
.container {
	text-align: center;
	padding-bottom: 100px;
}
.grid {
	text-align: left;
	display: grid; 
	grid-template-columns: repeat(3, 1fr);
	gap: 20px;
	justify-content: center;
	align-items: center;
	.card {
		box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
		width: 100%;
		.card-content {
			padding: 15px;
			p {
				color: #73A8A0;
			}
			.card-content-grid {
				display: grid;
				grid-template-columns: 6fr 1fr;
				align-items: center;
				justify-content: center;
				font-size: 14px;
				gap: 20px;
				.play {
					cursor: pointer;
					border-radius: 100%;
					width: 40px;
					height: 40px;
					padding: 0;	
					background-color: #73A8A0;		 
					border:1px solid #73A8A0;
					color: white;
					&:hover {
						background-color:white;
						color: #73A8A0;
					}
				}
			}
		}
		img {
			object-fit: cover;
			height: 15vh;
			width: 100%;
		}
	}
}
.btn {
	cursor: pointer;
	padding: 20px 50px;
	background-color: #73A8A0;
	color: white;
	border:1px solid #73A8A0;
	margin-top: 50px;
	&:hover {
		background-color:white;
		color: #73A8A0;
	}
	svg {
		padding: 0 0 0 5px;
	}
}

@media(max-width: 767px) {
	.container > .grid {
		display: grid;
		grid-template-columns: 1fr;
	}
}

</style>
