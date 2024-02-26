import AbstractView from "./AbstractView.js";
export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Dashboard");
  }
  async getHtml() {
    return `
    <h1> Welcome back, Folks!</h1>
<p>Here, we will be learning more about Javascript, where I will be providing you with resources for the same.</p> 
<p>These resources are very important for all the people who are learning JS.</p> 
<p>Getting a good and legit resource helps us learn right things in a short term</p>
<p>
<a href="/posts" data-link>View recent posts</a>.
</p>
    `;
  }
}
