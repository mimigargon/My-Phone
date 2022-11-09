import { html, LitElement } from 'lit';
import galleryStyles from '../styles/gallery-styles';

export class GalleryComponent extends LitElement {
  static get styles() {
    return [galleryStyles]
  }

  static get properties() {
    return {
      
    };
  }

  constructor() {
    super();
   
  }

 
  render() {
    return html`
      
    `;
  }
}


window.customElements.define('gallery-component', GalleryComponent);
