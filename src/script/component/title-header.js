class TitleHeader extends HTMLElement {

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <style>
    h1{
      -webkit-text-stroke: 3px black;
    }

    @media screen and (max-width: 900px){
      h1{
        font-size:80px !important;
      }
    }

    @media screen and (max-width: 800px){
      h1{
        font-size:60px !important;
      }
    }

    @media screen and (max-width: 600px){
      h1{
        font-size:50px !important;
      }
    }
    </style>
    <h1 class="text-center font-weight-bold display-1">DIGIMON WEB</h1>
    `
  }
}

customElements.define('title-header', TitleHeader);