import {generateFilms} from './mock/films.js';
import {generateFilters} from './mock/filter.js';
import FilmsModel from './models/films.js';

import {render} from './utils/render-component.js';
import HeaderProfileComponent from './components/header-profile.js';
import MainNavigationComponent from './components/main-navigation.js';
import PageController from './controllers/page.js';

const FILMS_COUNT = 20;

const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);

const films = generateFilms(FILMS_COUNT);
const filmsModel = new FilmsModel();
const filters = generateFilters(films);

filmsModel.setFilms(films);

const pageController = new PageController(siteMainElement, filmsModel);
const headerProfileComponent = new HeaderProfileComponent();
const mainNavigationComponent = new MainNavigationComponent(filters);


render(siteHeaderElement, headerProfileComponent);
render(siteMainElement, mainNavigationComponent);
pageController.render();
