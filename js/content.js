export {contentInfo};

class contentInfo extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({mode: 'open'});
	}

	static get observedAttributes(){
		return['img', 'title', 'description', 'source'];
	}

	attributeChangedCallback(attr, oldVal, newVal){

		if (attr === 'img' && oldVal !== newVal) {
				this.img = newVal
		}

		if (attr === 'title' && oldVal !== newVal) {
				this.title = newVal
		}

		if (attr === 'description' && oldVal !== newVal) {
				this.description = newVal
		}

		if (attr === 'source' && oldVal !== newVal) {
				this.source = newVal
		}

	}

	getTemplate(){
		const template = document.createElement('template');
		template.innerHTML = `
				<div class="contenedor">
						<figure>
							<img src="${this.img}">
							<div class="capa">
								<h3>${this.title}</h3>
								<p>${this.description}</p> <br>
								<a href="${this.source}">Ir Al Álbum</a>
							</div>
						</figure>
					</div>
				</section>
				${this.getStyle()}
		`;
		return template;
	}
	getStyle() {
		return`
			<style>
			/* seccion contenedor uno */
					.contenedor {
							width: 100%;
							height: 100%;
							flex-grow: 1;
							padding: 0 29px;
							margin: auto;
						}
						
						.contenedor figure {
							display: inline-flex;
							margin: 20px;
							position: relative;
							height: 390px;
							width: 390px;
							overflow: hidden;
							border-radius: 10px;
						}
						
						.contenedor figure:hover {
							box-shadow: 0px 10px 20px 10px ;
						}
						
						.contenedor figure img {
							width: 100%;
							height: 100%;
							transition: all ease 2s;
						}
						
						.contenedor figure .capa {
							position: absolute;
							top: 0;
							width: 100%;
							height: 100%;
							background: #ffffff95;
							opacity: 0;
							visibility: hidden;
							text-align: center;
						}
						
						.contenedor figure:hover > .capa {
							opacity: 1;
							visibility: visible;
						}
						
						.contenedor figure > .capa h3 {
							margin-top: 100px;
						}
						
						.contenedor figure:hover > img {
							transform: scale(1.6);
						}
						
						.contenedor figure > img {
							transition: all .5s;
						}
						
						.contenedor figure .capa h3 {
							transition: all .5s;
							font-size: 2em;
						}
						
						.contenedor figure .capa p {
							font-size: 1.5rem;
							max-width: 270px;
							margin: auto;
						}
						
						.contenedor figure a {
							text-decoration:none;
							color: #000;
							font-size: 1.2rem;
						}
						
						.contenedor figure a:hover {
							text-decoration: underline;
							color: #bbb;
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
customElements.define('content-info', contentInfo);