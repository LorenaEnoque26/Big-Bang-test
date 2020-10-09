<template>
	<nav>
		<div class="navbar">
			<ul>
				<li v-for="item in items" :key="item.itemMenu"><a href="default.asp">{{item.itemMenu}}</a></li>
			</ul>	
				<img alt="Vue logo" src="../assets/logo.svg">
			<ul>
				<li class="icon"><font-awesome-icon icon="search"/></li>
				<li class="icon"><font-awesome-icon icon="user-circle"/></li>
				<li class="icon"><font-awesome-icon icon="box"/></li>
				<li class="icon"><font-awesome-icon icon="heart"/></li>
				<li class="icon"><font-awesome-icon icon="shopping-basket"/></li>
				<li class="icon"><font-awesome-icon icon="sign-out-alt"/></li>	
			</ul>
		</div>
		<div class="small-navbar">
			<img alt="Vue logo" src="../assets/logo.svg">
			<ul>
				<li><font-awesome-icon icon="user-circle"/></li>
				<li><font-awesome-icon icon="heart"/></li>
				<li><font-awesome-icon icon="shopping-basket"/></li>
				<li v-show="!openMenu" @click="openMenu = !openMenu"><font-awesome-icon icon="bars"/></li>
				<li @click="openMenu = !openMenu" v-show="openMenu"><font-awesome-icon icon="times"/></li>
			</ul>
			<ul class="dropdown" v-if="openMenu">
				<li v-for="item in items" :key="item.itemMenu">
					<a href="default.asp">{{item.itemMenu}}</a>
				</li>
					
			</ul> 
		</div>
	</nav>	
</template>
<script>
export default {
    name: 'Navbar',
	data() {
		return {
			openMenu: false,
			items: [
				{itemMenu: 'Início'},
				{itemMenu: 'Blog'},
				{itemMenu: 'Loja'},
				{itemMenu: 'Podcasts'},
				{itemMenu: 'Cursos'},
				{itemMenu: 'Contato'}
			]
		}
	}
}
</script>
<style scoped lang="scss">

nav {
	text-align: center;
	left: 0%;
	right: 0%;
	top: 0%;
	bottom: 0%;
	.navbar {
		display: -webkit-flex;
		display: flex;
		justify-content: space-between;
		-webkit-align-items: center;
		align-items: center;
		margin: 0;
		padding: 10px;
		ul {
			display: -webkit-flex;
			display: flex;
			list-style-type: none;
			margin: 0;
			padding: 0;
			.icon {
				padding: 0 30px;
			}
			li {
				cursor: pointer;
				padding: 0 15px;
				a {
					font-style: normal;
					font-weight: 600;
					font-size: 16px;
					line-height: 16px;
					text-transform: uppercase;
					text-decoration: none;
					color:#666666;
					&:hover {
						color: black;
						border-bottom: 4px solid #73A8A0;
					}
				}
				svg {
					color:#666666;
					font-size: 24px;
					color: #666666;
					&:hover {
						color: black;
					}
				}
			}
		}
		img {
			text-align: center;
		}
	}
	.small-navbar {
		display: none;
	}
}

@media(max-width: 767px){
	nav > .navbar {
		display: none;
	}
	nav {
		.small-navbar {
			display: -webkit-flex;
			display: flex;
			justify-content: space-between;
			-webkit-align-items: center;
			align-items: center;
			margin: 0;
			padding: 10px;
			ul {
				display: -webkit-flex;
				display: flex;
				list-style-type: none;
				margin: 0;
				padding: 0;
				li {
					padding: 0 10px;
					a {
						font-family: Arial, Helvetica, sans-serif;
						font-style: normal;
						font-weight: 600;
						font-size: 16px;
						line-height: 16px;
						text-transform: uppercase;
						text-decoration: none;
						color:#666666;
						&:hover {
							color: black;
							border-bottom: 4px solid #73A8A0;
						}
					}
					svg {
						color:#666666;
						font-style: normal;
						font-weight: 300;
						font-size: 24px;
						line-height: 24px;
						/* identical to box height */
						color: #666666;
						&:hover {
							color: black;
						}
					}
				}
			}
			.dropdown {
				position: absolute;
				display: block;
				right: 0;
				left: auto;
				top: 10%;
				z-index: 1000;
				min-width: 10rem;
				padding: .5rem 0;
				margin: .125rem 0 0;
				font-size: 1rem;
				color: #686a6e;
				text-align: left;
				list-style: none;
				background-color: #fff;
				background-clip: padding-box;
				border: 1px solid rgba(0,0,0,.15);
				border-radius: 0;
				li {
					cursor: pointer;
					padding: 20px 30px;
				}
			}
		}
		img {
			text-align: left;	
		}
	}
}


</style>
