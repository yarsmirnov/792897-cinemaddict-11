const createFilmCardTemplate = (film) => {
  const clonedFilm = Object.assign({}, film);
  const {title, rating, release, duration, genres, comments, poster, description} = clonedFilm;
  const posterPath = `./images/posters/`;

  return (
    `<article class="film-card">
      <h3 class="film-card__title">${title}</h3>
      <p class="film-card__rating">${rating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${release.getFullYear()}</span>
        <span class="film-card__duration">${duration}</span>
        <span class="film-card__genre">${genres[0]}</span>
      </p>
      <img src="${posterPath}${poster}" alt="" class="film-card__poster">
      <p class="film-card__description">${description.length > 140 ?
      `${description.slice(0, 139)}...` : description}</p>
      <a class="film-card__comments">${comments.length} comment${comments.length > 1 ? `s` : ``}</a>
      <form class="film-card__controls">
        <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
        <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
        <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
      </form>
    </article>`
  );
};

export {createFilmCardTemplate};
