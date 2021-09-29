// import "../../styles.css";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
let IdsInput = class IdsInput extends LitElement {
    constructor() {
        super(...arguments);
        this.text = "Test";
    }
    createRenderRoot() {
        return this;
    }
    updateValue(e) {
        console.log(e.target.value);
        this.value = e.target.value;
    }
    render() {
        return html `
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
};
__decorate([
    property() // properties are type String by default
], IdsInput.prototype, "text", void 0);
__decorate([
    property()
], IdsInput.prototype, "color", void 0);
__decorate([
    property({
        reflect: true,
    })
], IdsInput.prototype, "value", void 0);
IdsInput = __decorate([
    customElement("ids-input")
], IdsInput);
export default IdsInput;
