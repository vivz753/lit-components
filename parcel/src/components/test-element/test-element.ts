import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('test-element')
class TestElement extends LitElement {
  @property()

  render() {
  console.log('I am working')
  return html`
    <p> This is a Test Lit Element!! </p>
  `
  }
}

export default TestElement;
