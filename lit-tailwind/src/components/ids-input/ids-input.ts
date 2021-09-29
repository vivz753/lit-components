// import "../../styles.css";

import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("ids-input")
class IdsInput extends LitElement {
  @property() // properties are type String by default
  text?: string = "Test";

  @property()
  color?: string;

  @property({
    reflect: true,
  })
  value?: string;

  createRenderRoot() {
    return this;
  }

  updateValue(e: {target: HTMLInputElement}) {
    console.log(e.target!.value)
    this.value = e.target!.value;
  }

  render() {
    return html`
      <input
        type="text"
        class="rounded
        w-full
        mx-auto
        shadow-lg
        p-2
        "
        value="${this.value}"
        @change="${this.updateValue}"
        @input="${this.updateValue}"
      >
      </input>
    `;
  }
}

export default IdsInput;
