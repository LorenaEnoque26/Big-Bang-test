<template>
	<footer>
		<div class="container">
			<div class="flex-footer-cima">
				<img alt="Vue logo" src="../assets/logo-branca.svg">
				<font-awesome-icon :icon="['fab', 'instagram']" />
				<font-awesome-icon :icon="['fab', 'facebook-f']" />
				<font-awesome-icon :icon="['fab', 'twitter']" />
				<div class="menu-footer">
					<p class="title">Institucional</p>
					<p>Sobre nós</p>
					<p>Contato</p>
				</div>
				<div class="menu-footer">
					<p class="title">Loja</p>
					<p>Cadastre-se</p>
					<p>Área do lojista</p>
				</div>
				<div class="menu-footer">
					<p class="title">Atendimento</p>
					<p>hello@espaconamah.com.br</p>
					<p>(31) 2515 6200</p>
				</div>	
			<div class="assine">
				<p class="title">Assine nossa Newsletter</p>
				<input class="email" type="email" placeholder="Seu endereço de e-mail">
				<button class="btn">Assinar</button>
			</div>
		</div>		
			<hr/>
			<div class="flex-footer-baixo">
				<p>© 2020 Espaço Namah. Todos os direitos reservados. CNPJ: 19.035.854/0001-31.</p>
				<p>Formas de pagamento:	
					<font-awesome-icon class="svgs" :icon="['fab', 'cc-visa']" />
					<font-awesome-icon class="svgs" :icon="['fab', 'cc-mastercard']" />
					<font-awesome-icon class="svgs" :icon="['fab', 'cc-diners-club']" />
					<font-awesome-icon class="svgs" :icon="['fab', 'cc-amex']" />
					<font-awesome-icon class="svgs" icon="barcode"/>
				</p>
				<p><font-awesome-icon icon="lock" class="svgs"/> Site seguro</p>
				<p>Dúvidas Frequentes | Políticas da Loja</p>
			</div>
		</div>
	</footer>
</template>

<script>

export default {
name:"Footer"
  
}
</script>

<style scoped lang="scss">
footer {
	background-color:black;
	color: white;
	height: 100%;
	.container {	
		width: 90%;
		margin: 0 auto;
		padding-top: 50px;
		padding-bottom: 15px;
		.flex-footer-cima {
			display: flex;
			justify-content: space-between;
			align-items: stretch;
			padding-bottom: 20px;
			img {
				width: 200px;
			}
			svg {
				color: white;
				font-size: 26px;
				cursor: pointer;
				padding-top: 40px;
			}
			p {
				font-size: 14px;
				cursor: pointer;
			}
			.title {
				padding-bottom: 10px;
				font-weight: bold;
				font-size: 16px;
				cursor: default;
			}
			.email {
				padding: 10px 5px;
				width: 250px;
				margin-right: 10px;
			}
			.btn {
				background-color:transparent;
				color: white;
				padding: 10px;
				border: 1px solid white;
				cursor: pointer;
				text-transform: uppercase;
				&:hover {
					color: black;
					background-color: white;
				}
			}
		}
		.flex-footer-baixo {
			display:flex;
			justify-content: space-between;
			align-items: center;
			font-size: 13px;
			text-align: center;
			.svgs {
				color: white;
				font-size: 20px;
				padding: 0 5px;
				cursor: default;
			}
		}
	}
}

@media(max-width: 767px) {
	footer > .container > .flex-footer-cima  {
		display: grid;
		align-items: center;
		justify-items:center;
		svg {
			padding-bottom: 30px;
		}
		.menu-footer {
			border-top: 1px solid white;
			width: 100%;
			display: grid;
			text-align: center;
			padding: 30px 0;
			.title {
				padding:0;
				font-size: 20px;
			}
		}
		.assine {
			border-top: 1px solid white;
			text-align: center;
			padding-top: 10px;
			.title {
				font-size: 20px;
			}
			.btn {
				margin-top: 15px;
			}
		}
	}
	footer > .container > .flex-footer-baixo  {
		display: grid;
		gap: 20px;
		align-items: center;
		justify-items:center;
	}
}

</style>