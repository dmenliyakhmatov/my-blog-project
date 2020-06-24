import React from 'react';
import  store  from '../../../../store';
import { change } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import actions from '../../../../store/writingForm/actions';

const SelectComponent = ({ input, meta, ...props }: any) => {
  const { formName, fieldLabel, options } = props;

  const handleOptionClick = (key: any) => {
    store.dispatch(change(formName, input.name, key));
  };

  const handleSelectClick = () => {
    props.actions.setSelect(!props.activeSelect);
  };

  const onBlurHandler = () => {
    props.actions.setSelect(false);
  };

  return (
    <div className="select_wrapper">
      <div className="select">
        <select {...input} className=" select-hidden">
          {Object.entries(options).map(([key, value]) => {
            return <option key={key} value={key}>{`${value}`}</option>;
          })}
        </select>
        <div
          role="presentation"
          className={`select-styled ${props.activeSelect ? 'active' : ''}`}
          onClick={handleSelectClick}
          onBlur={onBlurHandler}>
            {/* <span className="select-img">
              {props.img && <img src="" alt="" className="" />} 
            </span> */}
            
          <span className="select_placeholder" >{options[input.value]}</span>
          <ExpandMoreIcon className="arrow_down"/>
        </div>
        <div className="select_options_wrapper">
          <ul className="select-options">
            {Object.entries(options).map(([key, value]) => {
              return (
                <li
                  role="presentation"
                  key={key}
                  className={key === input.value ? 'is-selected' : ''}
                  onClick={() => handleOptionClick(key)}>
                  {/* <span className="option-img">
                    {props.img && <img src="" alt="" className="" />} 
                  </span> */}
                  <span className="option_value" >{`${value}`}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({ ...state.writingForm});

const mapDispatchToProps = (dispatch: any) => ({
    actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectComponent);