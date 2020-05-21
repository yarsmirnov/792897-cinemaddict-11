import AbstractComponent from './abstract-component.js';

const createShowMoreButtonTemplate = () => {
  return (
    `<button class="films-list__show-more">Show more</button>`
  );
};


export default class ShowMoreButton extends AbstractComponent {
  getTemplate() {
    return createShowMoreButtonTemplate();
  }

  setButtonClickHandler(handler) {
    this.getElement().addEventListener(`click`, handler);
  }

  isElement() {
    return Boolean(this._element);
  }
}
