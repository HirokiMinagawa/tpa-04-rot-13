import { handleBtnConvert } from './convert-util.js';
import {
  formPreventDefault,
  initDOMAndListeners,
} from './view.js';

const initApp = () => {
  formPreventDefault();
  initDOMAndListeners(handleBtnConvert);
};

export {
  initApp,
};
