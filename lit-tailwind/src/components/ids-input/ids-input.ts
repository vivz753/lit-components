import "../../styles.css";

import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

const defaultColor = `text-pink-300 placeholder-pink-200`;
const labelStyle = `text-lg mx-2 block`;
const inputStyle = `w-full text-base block relative rounded-sm h-8 p-2 focus:outline-none`;

@customElement("ids-input")
class IdsInput extends LitElement {
  @property() // properties are type String by default
  label?: string = "Default Label";

  @property() // properties are type String by default
  text?: string;

  // @property()
  // color?: string;

  @property({ reflect: true })
  value?: string = "Default Initial Value";

  @property({ reflect: true })
  placeholder?: string = "Default Placeholder Text";

  @property({ type: Boolean })
  readOnly?: boolean = false;

  @property({ type: Boolean, reflect: true })
  disabled?: boolean = false;

  @property({ type: Boolean, reflect: true })
  clearable?: boolean = false;

  createRenderRoot() {
    return this;
  }

  updateValue(e: { target: HTMLInputElement }) {
    this.value = e.target!.value;
  }

  clearValue() {
    this.value = "";
  }

  clearableTemplate() {
    return html`
      <div
        class="absolute right-0 mr-1 h-8 w-8 flex justify-center align-items"
      >
        <span
          @click="${this.clearValue}"
          class="text-center text-red-500 cursor-pointer rounded-full my-auto bg-pink-100 bg-opacity-50 hover:bg-red-500 hover:text-pink-100 h-6 w-6"
        >
          x
        </span>
      </div>
    `;
  }

  render() {
    return html`
      <div class="flex flex-col w-full justify-center">
        <label class="
          ${labelStyle}
          ${this.readOnly || this.disabled ? "text-gray-400" : defaultColor} 
        ">
          ${this.label}
        </label>
        <div 
          class="flex flex-row mx-2 relative rounded-sm
            ${this.clearable && "border-red-500"}
            ${this.disabled || this.readOnly ? "bg-gray-300" : "bg-white"}
        ">
          <input
            type="text"
            class="
              ${inputStyle}
              ${this.clearable ? "mr-8" : "focus:ring-2 focus:ring-pink-400"}
              ${this.readOnly || this.disabled ? "bg-gray-300" : defaultColor}
            "
            .placeholder="${this.placeholder}"
            .value="${this.value}"
            .disabled="${this.disabled || this.readOnly}"
            @change="${this.updateValue}"
            @input="${this.updateValue}"
          >
          </input>
          ${this.value && this.clearable ? this.clearableTemplate() : ""}
        </div>
      </div>
    `;
  }
}

export default IdsInput;
