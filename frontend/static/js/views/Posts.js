import AbstractView from "./AbstractView.js";
export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Posts");
  }
  async getHtml() {
    return `
    <h1> Posts</h1>
<p>You are viewing the posts.</p> 
<a href="https://www.youtube.com/watch?v=6BozpmSjk-Y">video1</a>
<a href="https://www.youtube.com/watch?v=SBmSRK3feww">video2</a>

    `;
  }
}
