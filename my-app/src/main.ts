import { LitElement, html } from "lit";
import { customElement } from 'lit/decorators.js';

@customElement('app-component')
export default class AppComponent extends LitElement {
  render() {
    return html`<h1>Hello bleh</h1>`;
  }
}

