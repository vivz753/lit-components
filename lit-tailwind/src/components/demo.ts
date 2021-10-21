/* eslint-disable import/no-unresolved */
// import "./styles.css";
import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

import "./app-component";
import "./ids-input";
import "./ids-card";

@customElement("demo-component")
export default class DemoComponent extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="bg-yellow-100 flex align-center justify-center h-screen w-full">
        <div class="container my-auto w-full flex flex-col justify-center align-center border-2 border-red-500">
          <div class="w-full flex">
            hello
          </div>
          <ids-input clearable value="MewTwo"></ids-input>
          <ids-card color="red" text="hi"></ids-card>
        </div>
      </div> 
    `;
  }
}
