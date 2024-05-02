const GetById = () => {
  return (
    <>
      <h2>Get Category By id</h2>
      <p>
        You can get a single category by adding the <span> id </span> as a
        parameter:
        <span> /category/:id </span>
        endpoint.
      </p>
      <small>Request</small>
      <div className="renderBlock">
        <pre>
          <span>[ GET ]</span>{" "}
          https://clothingapi.zeabur.app/category/1
        </pre>
      </div>
      <small>Response</small>
      <div className="renderBlock">
        <pre>
          {`   
          {
              "id": 1,
              "name": "Pants",
          }
    `}
        </pre>
      </div>
    </>
  );
};

export default GetById;
