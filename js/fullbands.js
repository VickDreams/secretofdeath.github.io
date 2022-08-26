export {fBands};

class fBands extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
    }
    static get observedAttributes(){
        return["title", "description", "live"];
    }
    attributeChangedCallback(attr, oldVal, newVal){

        if (attr === "title" && oldVal !== newVal) {
            this.title = newVal
        }

        if (attr === "description" && oldVal !== newVal) {
            this.description = newVal
        }

        if (attr === "live" && oldVal !== newVal) {
            this.live = newVal
        }
    }

   // fullbands config section body
   getTemplate(){
       const template = document.createElement("template");
       template.innerHTML = `
       <!-- Bonton de albums y concierto -->
       <div class="content">
         <div class="boxbig">
           <div class="boxmin">
               <h2>${this.title}</h2>
               <p>${this.description}</p>
               <a href="albums.html">Álbums</a>
            <!-- <a href="concierto.html">Concierto</a> -->
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
           }
           
           .content .boxbig {
               margin-top: 120px;
               margin-left: 50px;
           }
           
           .content .boxmin {
               padding: 25px;
               background: #ffffffa1;
               opacity: 0;
               border-radius: 10px;
               box-shadow: inset 0px 0px 30px 1px #000;
               transition: all .9s;
           }
           
           .content .boxmin:hover {
               opacity: 1;
           }
           
           .content .boxmin h2 {
               color: #000;
               font-size: 3em;
               text-align: center;
               margin: 20px 0;
           }
           
           .content .boxmin p
           {
               font-size: 1.2em;
               color: #000;
           }
           
           .content .boxmin a
           {
               padding: 5px 20px;
               margin-left: 50px;
               border: 1px solid #808080;
               color: #000;
               font-size: 1.2em;
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
customElements.define('body-section',fBands);