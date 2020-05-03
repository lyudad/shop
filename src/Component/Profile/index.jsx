import React from "react";
import {connect} from 'react-redux'
import {isEmpty} from 'lodash'
import {Layout} from 'UI/Layout'

const ProfileComponent = ({user, ...rest}) => {

  if (isEmpty(user)) {
    return (
       <Layout style={{ minHeight: '100vh' }}>
     <div>Log in please...</div>
     </Layout>
     )
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <img src={user.picture} alt="Profile" />

      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <code>{JSON.stringify(user, null, 2)}</code>
    </Layout>
  );
};

const mapToProps = (store) => {
  return {
    user: store.auth.user,
  }
}


export const Profile = connect(mapToProps)(ProfileComponent);