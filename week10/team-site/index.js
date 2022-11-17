import QuakesController from "./quakecontroller";

const qCtrl = new QuakesController;
const radiusInput = parseInt(document.getElementById("radiussize").value);

qCtrl.init(radiusInput);
