import railsAxios from '../../util/railsAxios';

export const registerAdmin = async (store, admin) => {
  const { createUrl, userIdentity } = store.state;
  const {
    email, password, firstName, lastName, city, state, zip,
  } = admin;

  try {
    const response = await railsAxios().post(createUrl, JSON.stringify({
      [userIdentity]: {
        email,
        password,
        first_name: firstName,
        last_name: lastName,
        address_city: city,
        address_state: state,
        address_zip: zip,
      },
    }));

    await store.setState({
      jwt: response.data?.jwt || '',
      user: response.data?.admin || {},
    });
    return response.status;
  } catch (error) {
    await store.setState({
      jwt: '',
      user: {},
    });
    return error.response.status;
  }
};

const register = (store, user) => registerAdmin(store, user);

export { register };
