const SearchUser = () => {
  return (
    <>
      <h2>Search Specific User</h2>
      <p>
        You can search a specific user by using the <span>/auth/:email </span>
        endpoint.
      </p>
      <small>Request</small>
      <div className="renderBlock">
        <pre>
          <span>[ POST ]</span>{" "}
          https://clothingapi-dev-aepd.3.us-1.fl0.io/auth/test@gmail.com
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

export default SearchUser;
