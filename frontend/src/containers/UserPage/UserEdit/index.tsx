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
  history: any;
}
class UserEdit extends React.Component<IUserEditProps,{}> {
  constructor(props: IUserEditProps){
    super(props)
    this.onSubmit = this.onSubmit.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  componentDidMount (){
     this.props.actions.getEditData(this.props.match.params.userId)
  }

  onDelete = () => {
    const userId = this.props.match.params.userId
    this.props.actions.deleteUser(userId)
    this.props.history.push(`/`)
  }

  formProps = {
    onDelete: this.onDelete,
  }
  onSubmit(formData: any) {
    const userId = this.props.match.params.userId;

    this.props.actions.sendEditData(formData, this.props.match.params.userId);
    this.props.history.push(`/user/${userId}`)
  }

 render() {
   console.log('edit', this.props.editData)
   return (
      <UserEditForm {...this.formProps} initialValues={this.props.editData} onSubmit={this.onSubmit} />
   )
 }
}

const mapStateToProps = (state: any) => ({ ...state.user });

const mapDispatchToProps = (dispatch: any) => ({
    actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserEdit);