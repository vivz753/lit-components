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
      <div class="bg-yellow-100 flex align-center h-screen w-full">
        <div class="container my-auto w-full flex justify-center align-center">
          <ids-card text="hello" color="blue"></ids-card>
          <ids-input label="Pokedex" clearable placeholder="Type any Pokemon..." value=""></ids-input>
          <ids-input label="Pokedex" disabled placeholder="Type any Pokemon..." value="Regice"></ids-input>
          <ids-input label="Pokedex" clearable readOnly placeholder="Type any Pokemon..." value="Snorlax"></ids-input>
        </div>
      </div>
    `;
  }
}
