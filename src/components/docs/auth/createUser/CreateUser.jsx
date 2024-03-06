const CreateUser = () => {
  return (
    <>
      <h1>Authentication JWT</h1>
      <h2>Create User</h2>
      <p>
        You can create a new user by using the <span>/auth/signup </span>
        endpoint.
      </p>
      <small>Request</small>
      <div className="renderBlock">
        <pre>
          <span>[ POST ]</span>{" "}
          https://clothingapi-dev-aepd.3.us-1.fl0.io/auth/signup
        </pre>
      </div>
      <small>Body</small>
      <div className="renderBlock">
        <pre>
          <pre>
            {` {
              "name":"test",
              "lastname":"test",
              "email":"test@gmail.com",
              "password":"test123"
  }`}
          </pre>
        </pre>
      </div>
      <small>Response</small>
      <div className="renderBlock">
        <pre>
          {` {
              "id": 1
              "name":"test",
              "lastname":"test",
              "email":"test@gmail.com",
              "password":"test123"
  }`}
        </pre>
      </div>
    </>
  );
};

export default CreateUser;
