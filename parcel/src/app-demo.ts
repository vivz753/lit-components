import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

import './components/test-element';

@customElement('app-demo')
class App extends LitElement {
  @property()

  render() {
  console.log('I am the main app')
  return html`
    <h1>Lit App</h1>
    <test-element></test-element>
  `
  }
}

export default App;
