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
      <div class="bg-yellow-100 flex align-center justify-center h-screen w-full">
        <div class="container my-auto w-full flex flex-col justify-center align-center border-2 border-red-500">
          <div class="w-1/3 my-12 mx-auto border-2 border-green-500">
            <ids-input clearable value="MewTwo"></ids-input>
          </div>
          <div class="w-1/3 my-12 mx-auto">
            <ids-input clearable disabled value="Clearable Disabled Value"></ids-input>
          </div>
          <div class="w-1/3 my-12 mx-auto">
            <ids-input disabled value="Disabled Value"></ids-input>
          </div>
          <ids-card color="red" text="hi"></ids-card>
        </div>
      </div> 
    `;
  }
}
