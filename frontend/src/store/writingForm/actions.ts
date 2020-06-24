import { SET_ACTIVE_SELECT } from './../../constants/index';
export default {
  setSelect(nextState: boolean) {
    return {
      type: SET_ACTIVE_SELECT,
      payload: nextState,
    };
  }
}