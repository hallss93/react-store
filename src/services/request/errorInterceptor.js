const errorInterceptor = (error, dispatch) => {
  console.log('error ', JSON.stringify(error.response));
  if (
    error &&
    error.response &&
    error.response.data &&
    error.response.data.StatusCode &&
    error.response.data.StatusCode === 401
  ) {
    console.log(error.response.data);
  } else {
    console.log(error)
    console.log('Outro erro');
  }
};
export default errorInterceptor;
