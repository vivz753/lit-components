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
};
AppComponent = __decorate([
    customElement("app-component")
], AppComponent);
export default AppComponent;
