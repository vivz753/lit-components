import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('hi')
class Hi extends LitElement {
  @property()

  render() {
  console.log('hi')
  return html`
   <h2> hi </h2>  
  `
  }
}

export default Hi;
