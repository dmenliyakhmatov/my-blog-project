import { SET_ACTIVE_SELECT } from './../../constants/index';

interface IFormState {
  activeSelect: boolean;
};

const initialState: IFormState = {
  activeSelect: false
};

const writingFormReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_ACTIVE_SELECT:
      return {
        activeSelect: action.payload,
      }
  }
}