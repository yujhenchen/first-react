function Profile(props) {
  //   console.log(props);  // if you don't pass a value to props, you'll see an empty Object {}
  return (
    <div>
      <h1>
        Profile User: {props.name}, the last name is: {props.lastName}
      </h1>

      {props.children}
    </div>
  );
}

export default Profile;
