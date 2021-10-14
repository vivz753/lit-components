// import "../../styles.css";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
let IdsCard = class IdsCard extends LitElement {
    constructor() {
        super(...arguments);
        this.text = "Test";
    }
    createRenderRoot() {
        return this;
    }
    render() {
        return html `
      <div class="bg-${this.color}-500 rounded w-96 h-64 mx-auto shadow-lg p-8 text-xl text-white">
        ${this.text}
      </div>
    `;
    }
};
__decorate([
    property() // properties are type String by default
], IdsCard.prototype, "text", void 0);
__decorate([
    property()
], IdsCard.prototype, "color", void 0);
IdsCard = __decorate([
    customElement("ids-card")
], IdsCard);
export default IdsCard;
