export class Button extends HTMLElement {
  static observedAttributes = ["count", "text"];

  private button: HTMLButtonElement;

  constructor() {
    super();

    this.button = document.createElement("button");
  }

  attributeChangedCallback() {
    this.update();
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: "closed" });

    const style = document.createElement("style");
    style.textContent = `
      button {
        background-color: green;
        border: none;
        border-radius: 8px;
        color: white;
        padding: 0.5rem 1rem;
      }
      
      button:hover {
        cursor: pointer;
        background-color: darkgreen;
      }
    `;

    this.button.addEventListener("click", this.onClick);

    shadow.appendChild(style);
    shadow.appendChild(this.button);

    this.update();
  }

  onClick() {
    console.log("Internal click !");
  }

  update() {
    const text = this.getAttribute("text");
    const count = this.getAttribute("count");

    this.button.textContent = `${text} ${count}`;
  }
}
