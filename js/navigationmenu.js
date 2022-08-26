export {nMenu};

class nMenu extends HTMLElement {
	constructor(){
		super();
		this.attachShadow({mode: "open"});
	}

	static get observedAttributes(){
		return ["home", "bands", "vision"];
	}
	attributeChangedCallback(attr, oldVal, newVal){

		if (attr === "home" && oldVal !== newVal) {
			this.home = newVal
		}

		if (attr === "bands" && oldVal !== newVal) {
			this.bands = newVal
		}

		if (attr === "vision" && oldVal !== newVal) {
			this.vision = newVal
		}


	}

	getTemplate(){
		const template = document.createElement("template");
		template.innerHTML = `
			<nav class="menu">
				<ul>
					<li> <a href="${this.home}" class="logo">SOD</a></li>
					<li> <a href="${this.home}">Home</a></li>
					<li> <a href="${this.bands}">Bands</a></li>
					<li> <a href="${this.vision}">Vision</a></li>
				</ul>
			</nav>
			${this.getStyle()}
		`;
		return template;
	}
	getStyle(){
		return `
			<style>
				:host {}
				
					/* Logo y Menu de navegación*/
				.menu {
					position: fixed;
					width: 100%;
					display: flex;
					padding: 0 10px;
					z-index: 200;
					background: #ffffff95;
				}
				
				.menu ul .logo{
					position: relative;
					color: #000;
					font-size: 2em;
					text-decoration: none;
					transition: all .3s;
				}
				
				.menu ul .logo:hover {
					color: #aaa;
					border-bottom: none;
				}
				
				ul {
					display: flex;
				}
				
				li {
					list-style: none;
					margin: auto;
					margin-left: 30px;
				}
				
				li > a {
					display: flex;
					color: #000;
					font-size: 1.2em;
					margin-left: 10px;
					padding: 10px;
					text-decoration: none;
					transition: all .5s;
				}

				a:hover {
					color: #757474b4;
					border-bottom: #757474b4 solid 1px;
				}
						
					/* botton estilos */
				.menu ul .modo {
					width: 50px;
					font-size: 2em;
					margin-left: auto;
					cursor: pointer;
				}
			</style>
		`;
	}
	render(){
		this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
	}
	connectedCallback(){
		this.render();
	}
}
customElements.define('navigation-menu', nMenu)