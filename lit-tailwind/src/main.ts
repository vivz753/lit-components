import "./styles.css";
import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

import "./components/ids-card";
import "./components/ids-input";

@customElement("app-component")
export default class AppComponent extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="bg-yellow-100 h-screen w-full">
        <h1 class="mx-auto my-4 py-4 text-center shadow-lg text-xl w-1/2 bg-red-500">IDS Components</h1>
        <ids-card text="hello" color="blue"></ids-card>
        <ids-input label="Pokedex" placeholder="Type any Pokemon..." value=""></ids-input>
      </div>
    `;
  }
}
