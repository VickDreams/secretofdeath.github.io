export {sFooter};

class sFooter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
    }
    static get observedAttributes(){
        return["footer"];
    }
    attributeChangedCallback(attr, oldVal, newVal){

        if (attr === "footer" && oldVal !== newVal) {
            this.footer = newVal
        }
    }

    getTemplate(){
        const template = document.createElement("template");
        template.innerHTML = `
        <!-- Pie de la pagina -->
        <footer>${this.footer}
            <p>Esta es una página en la cual compartimos música para ustedes a partir de las peticioses.
                cualquier pedido o sugerencia es bien recibida, puedes contactarnos desdes nuestro correo:
                <a href="https://bit.ly/secretofdeathmx" target="-bank">secretofdeath00@gmail.com</a></p>
        
                <!-- Derechos --> 
            <section class="derechos">
            <p>todos los derecho reservados 2021 SODHDR&M®</p>
            </section>
        </footer>
        ${this.getStyle()}
        `;
        return template;
    }
    getStyle(){
        return `
        <style>
        /* seccion pie de la página */
        footer {
            display: block;
            margin-top: 100px;
            align-content: center;
        }
        
        footer p {
            margin-top: 50px;
            padding: 0 30px;
            font-size: 2em;
            text-align: justify;
        }
        
        footer a {
            font-size: 1em;
            color: #777;
        }
        
        footer a:hover {
            color: #000;
            text-decoration: none;
        }
        
        .derechos p {
            margin-top: 50px;
            text-align: center;
            font-size: 1.5em;
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
customElements.define("footer-section",sFooter);