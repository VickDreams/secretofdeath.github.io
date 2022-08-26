export {fAlbums};

class fAlbums extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }
    static get observedAttributes(){
        return["title", "description", "download"]
    }

    attributeChangedCallback(Attr, oldVal, newVal){
        
        if (Attr === "title" && oldVal !== newVal) {
            this.title = newVal
        }

        if (Attr === "description" && oldVal !== newVal) {
            this.description = newVal
        }

        if (Attr === "download" && oldVal !== newVal) {
            this.download = newVal
        }
    }

    getTemplate(){
        const template = document.createElement('template')
        template.innerHTML = `
    <div class="content">
        <div class="boxbig">
            <div class="boxmin">
                <h2>${this.title}</h2>
                <p>${this.description}</p>
                <a href="${this.download}" target="_bank">Descargar</a>
            </div>
        </div>
     </div>
     ${this.getStyle()}
        `;
        return template;
    }
    getStyle(){
        return `
            <style>
            .content {
               display: flex;
               z-index: 100;
               position: relative;
               width: 60%;
            }
            
            .content .boxbig {
                margin-top: 200px;
                margin-left: 50px;
            }
            
            .content .boxmin {
                padding: 40px;
                background: #ffffffa1;
                opacity: 0;
                border-radius: 10px;
                box-shadow:inset 0 0 30px 1px #000;
                transition: all .9s;
            }
            
            .content .boxmin:hover {
                opacity: 1;
            }
            
            .boxmin h2 {
                color: #000;
                margin: 20px;
                font-size: 2.5em;
            }
            
            .content .boxmin p
            {
                font-size: 2em;
                color: #000;
                margin: 20px;
            }
            
            .content .boxmin a
            {
                padding: 10px 20px;
                margin: 20px;
                border: 1px solid #808080;
                color: #000;
                font-size: 1.5em;
                border-radius: 10px;
                text-decoration: none;
            }
            
            .content .boxmin a:hover
            {
                background: #fff;
                color: #000;
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
customElements.define('details-album', fAlbums);