/* eslint-disable import/no-unresolved */
import "../../styles.css";
import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("app-component")
export default class AppComponent extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="bg-yellow-100 flex align-center h-screen w-full">
        <nav>Navigation</nav>
        <div class="container my-auto w-full flex justify-center align-center">
          <slot>Insert Component Here</slot>
        </div>
      </div>
    `;
  }
}
