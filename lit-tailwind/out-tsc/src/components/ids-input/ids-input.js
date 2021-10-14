// import "../../styles.css";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
const defaultColor = `text-pink-300 placeholder-pink-200`;
const labelStyle = `text-lg mx-2 block`;
const inputStyle = `text-base block relative rounded-sm h-8 p-2 focus:outline-none`;
let IdsInput = class IdsInput extends LitElement {
    constructor() {
        super(...arguments);
        this.label = "Default Label";
        // @property()
        // color?: string;
        this.value = "Default Initial Value";
        this.placeholder = "Default Placeholder Text";
        this.readOnly = false;
        this.disabled = false;
        this.clearable = false;
    }
    createRenderRoot() {
        return this;
    }
    updateValue(e) {
        this.value = e.target.value;
    }
    clearValue() {
        this.value = "";
    }
    clearableTemplate() {
        return html `
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
        return html `
      <div class="flex flex-col items-start border-1 border-black justify-start w-full">
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
              ${this.readOnly || this.disabled
            ? "bg-gray-300 text-white"
            : defaultColor}
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
};
__decorate([
    property() // properties are type String by default
], IdsInput.prototype, "label", void 0);
__decorate([
    property() // properties are type String by default
], IdsInput.prototype, "text", void 0);
__decorate([
    property({ reflect: true })
], IdsInput.prototype, "value", void 0);
__decorate([
    property({ reflect: true })
], IdsInput.prototype, "placeholder", void 0);
__decorate([
    property({ type: Boolean })
], IdsInput.prototype, "readOnly", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], IdsInput.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], IdsInput.prototype, "clearable", void 0);
IdsInput = __decorate([
    customElement("ids-input")
], IdsInput);
export default IdsInput;
