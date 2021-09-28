import './styles.css';
import { LitElement, html } from "lit";
import { customElement } from 'lit/decorators.js';

@customElement('app-component')
export default class AppComponent extends LitElement {
  createRenderRoot() {
    return this;
  }
  render() {
    return html`
      <h1 class="mx-auto my-4 py-4 text-center shadow-lg text-xl w-1/2 bg-red-500">IDS Components</h1>
    `;
  }
}

