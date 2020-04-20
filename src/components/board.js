import AbstractComponent from "./abstract-component.js";

export const createBoardTemplate = () => {
  return `<section class="board container"></section>`;
};

export default class Board extends AbstractComponent {
  getTemplate() {
    return createBoardTemplate();
  }
}
