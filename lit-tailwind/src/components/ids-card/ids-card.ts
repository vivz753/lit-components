// import "../../styles.css";

import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("ids-card")
class IdsCard extends LitElement {
  @property() // properties are type String by default
  text?: string = "Test";

  @property()
  color?: string;

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="bg-${this.color}-500 rounded w-96 h-64 mx-auto shadow-lg p-8 text-xl text-white">
        ${this.text}
      </div>
    `;
  }
}

export default IdsCard;
