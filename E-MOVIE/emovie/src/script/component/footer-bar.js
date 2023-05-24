class Footer extends HTMLElement {
    constructor() {
      super();
      this.shadowDOM = this.attachShadow({mode: 'open'});
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.shadowDOM.innerHTML = `
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          :host {
            display: block;
            width: 100%;
            background-color: rgb(48, 71, 94);
            color: white;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            position: fixed;
            bottom: 0;
          }
          p {
            padding: 16px;
          }
        </style>
        <center>
        <p>Tugas Belajar Fundamental Front-End Web Development &#169; 2023, Dicoding Academy<br>by Daffa Naufal Santoso</p>
        </center>
      `;
    }
  }
  
  customElements.define('footer-bar', Footer);