<template>
	<div class="container">
		<div class="grid">
			<div class="card">
				<img src="../assets/Início/rawan-yasser-E0Sbr9d1IV0-unsplash.svg"/>
				<div class="card-content">
					<p>04 Abr - 05 Abr</p>
					<h3>Imersão Vinyasa Flow</h3>
					<div class="card-content-grid">
						<span>Por Fernanda Cunha 2 dias de curso</span>
						<font-awesome-icon class="play"  icon="long-arrow-alt-right"/>
					</div>	
				</div>
			</div>
			<div class="card">
				<img  src="../assets/Início/rawan-yasser-E0Sbr9d1IV0-unsplash.svg"/>
				<div class="card-content">
					<p>04 Abr - 05 Abr</p>
					<h3>Imersão Vinyasa Flow</h3>
					<div class="card-content-grid">
						<span>Por Fernanda Cunha 2 dias de curso</span>
						<font-awesome-icon class="play" icon="long-arrow-alt-right"/>
					</div>	
				</div>
			</div>
			<div class="card">
				<img  src="../assets/Início/rawan-yasser-E0Sbr9d1IV0-unsplash.svg"/>
				<div class="card-content">
					<p>04 Abr - 05 Abr</p>
					<h3>Imersão Vinyasa Flow</h3>
					<div class="card-content-grid">
						<span>Por Fernanda Cunha 2 dias de curso</span>
						<font-awesome-icon class="play" icon="long-arrow-alt-right"/>
					</div>	
				</div>
			</div>
		</div>
		<button class="btn">VEJA TODOS OS CURSOS <font-awesome-icon class="play" icon="long-arrow-alt-right"/></button>
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
				grid-template-columns: 8fr 1fr;
				align-items: center;
				justify-content: center;
				font-size: 14px;
				gap: 20px;
				span {
					width: 140px;
				}
				svg {
					cursor: pointer;
					padding: 0;
					color: #73A8A0;
					font-style: normal;
					font-weight: normal;
					font-size: 24px;
					line-height: 24px;
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
	align-items: center;
	cursor: pointer;
	padding: 20px 50px;
	margin-top: 50px;
	background-color: #73A8A0;
	color: white;
	border:1px solid #73A8A0;
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
