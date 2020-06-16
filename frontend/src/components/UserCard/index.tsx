import React from 'react';

const UserCard = (props: any) => {
  // const {userData :{
  //   name,
  //   surname
  // }} = props;
  console.log(props)
  return (
    <section className="user-card__wrapper">
      <div className="content__row">
        <img src="" alt=""/>
        <div className="user__setting-area"> Настройки</div> 
      </div>
      {/* <h2 className="user__name">{`${name} ${surname}`}</h2> */}
      <div className="content__row">
        <p className="user__about">
          Немного о себе
        </p>
      </div>
      <div className="content__row">
        <span className="register-data"> Дата регистрации</span>
      </div>
    </section>
  )
}

export default UserCard;