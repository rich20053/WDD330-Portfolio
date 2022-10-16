
import HikesController from './hikesController.js';

const hikesCtrl = new HikesController('hikes');
window.addEventListener('load', () => {
    hikesCtrl.showHikeList();
});

