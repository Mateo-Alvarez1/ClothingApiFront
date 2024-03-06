const ExistingUser = () => {
  return (
    <>
      <h2>Existing User</h2>
      <p>
        You can login a user by using the <span>/auth/login </span>
        endpoint.
      </p>
      <small>Request</small>
      <div className="renderBlock">
        <pre>
          <span>[ POST ]</span>{" "}
          https://clothingapi-dev-aepd.3.us-1.fl0.io/auth/login
        </pre>
      </div>
      <small>Body</small>
      <div className="renderBlock">
        <pre>
          <pre>
            {` {
              "email":"test@gmail.com",
              "password":"test123"
  }`}
          </pre>
        </pre>
      </div>
      <small>Response</small>
      <div className="renderBlock">
        <pre>
          {`{

            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIi
            wiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
          `}
        </pre>
      </div>
    </>
  );
};

export default ExistingUser;
