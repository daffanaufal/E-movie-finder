class AppBar extends HTMLElement {

  connectedCallback() {
      this.render();
  }

  set clickEvent(event) {
      this._clickEvent = event;
      this.render();
  }

  render() {
      this.innerHTML = `
      <style>
          .jumbotron {
              background: rgb(48, 71, 94);
              color: white;
          }
          .jumbotron h1 span{
              font-weight: 500;
          }
          
          .jumbotron .input-group{
              display: flex;
              box-shadow: 0px 3px 6px black;
              width: 75%;
              z-index: 0;
          }
          
          .jumbotron .btn{
              color: white;
          }

          @media screen and (max-width: 767px) {
              .jumbotron h1{
                  font-size: 24pt;
              }
              .jumbotron .input-group{
                  width: 100%;
              }
          }
      </style>
      <div class="jumbotron text-center">
          <div class="container mt-5">
              <h1 class="display-4 mb-5">E-Movie Searcher</h1>
              <p>Cari film disini!</p>
              <div class="input-group mb-3 ml-auto mr-auto">
                  <input type="text" class="form-control" id="searchFilm" placeholder="Ketik judul film disini!" aria-label="Ketik judul film disini!" aria-describedby="button-addon2">
                  <div class="input-group-append">
                      <button class="btn btn-primary" type="submit" id="searchButtonElement">Search</button>
                  </div>
              </div>
          </div>
      </div>`;
      this.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
  }
}

customElements.define("app-bar", AppBar);