import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../../../store/user/actions';
import UserEditForm from '../../../components/User/UserEditForm'

interface IUserEditProps {
  actions: any;
  match: {
    params: {
      userId:string;
    }
  };
  editData: {
    name: string;
    surname: string;
    email: string;
    birthDate: string;
    about: string;
  };
}
class UserEdit extends React.Component<IUserEditProps,{}> {
  constructor(props: IUserEditProps){
    super(props)
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.props.actions.getEditData(this.props.match.params.userId)
  }

  onSubmit(formData: any) {
    this.props.actions.sendEditData(formData, this.props.match.params.userId)
  }

 render() {
   return (
      <UserEditForm initialValues={this.props.editData} onSubmit={this.onSubmit} />
   )
 }
}

const mapStateToProps = (state: any) => ({ ...state.user });

const mapDispatchToProps = (dispatch: any) => ({
    actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserEdit);