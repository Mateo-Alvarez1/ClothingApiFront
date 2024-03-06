const GetAll = () => {
  return (
    <>
      <h1>Categories</h1>
      <h2>Get All Categories</h2>
      <p>
        You can access the list of 3 categories by using the{" "}
        <span>/category/getAll </span>
        endpoint.
      </p>
      <small>Request</small>
      <div className="renderBlock">
        <pre>
          <span>[ GET ]</span>{" "}
          https://clothingapi-dev-aepd.3.us-1.fl0.io/category/getAll
        </pre>
      </div>
      <small>Response</small>
      <div className="renderBlock">
        <pre>
          {` [   
          {
              "id": 1,
              "name": "Pants",
          },
          //...
    ]`}
        </pre>
      </div>
    </>
  );
};

export default GetAll;
