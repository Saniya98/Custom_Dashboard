import AbstractView from "./AbstractView.js";
export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("settings");
  }
  async getHtml() {
    return `
    <h1> Settings</h1>
<p>Manage your privacy and configurations</p> 
    `;
  }
}
