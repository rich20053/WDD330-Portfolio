
import HikesController from './hikesController.js';

const hikesCtrl = new HikesController('hikeList');
window.addEventListener('load', () => {
    hikesCtrl.showHikeList();
});

