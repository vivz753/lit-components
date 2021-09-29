var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import "./styles.css";
import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import "./components/ids-card";
import "./components/ids-input";
let AppComponent = class AppComponent extends LitElement {
    createRenderRoot() {
        return this;
    }
    render() {
        return html `
      <div class="bg-yellow-100 h-screen w-full">
      <h1 class="mx-auto my-4 py-4 text-center shadow-lg text-xl w-1/2 bg-red-500">IDS Components</h1>
      <ids-card text="hello" color="blue"></ids-card>
      <ids-input value="sh"></ids-input>
      </div>
    `;
    }
};
AppComponent = __decorate([
    customElement("app-component")
], AppComponent);
export default AppComponent;
