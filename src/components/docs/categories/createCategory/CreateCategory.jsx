const CreateCategory = () => {
  return (
    <>
      <h2>Create Category</h2>
      <p>
        You can create a new category by sending an object like the following to{" "}
        <span> /category </span>
        endpoint.
      </p>
      <small>Request</small>
      <div className="renderBlock">
        <pre>
          <span>[ POST ]</span>{" "}
          https://clothingapi.zeabur.app/category
        </pre>
      </div>
      <small>Body</small>
      <div className="renderBlock">
        <pre>
          {`   
          {
              "name": "T-shirt",
          },
    `}
        </pre>
      </div>
      <small>Response</small>
      <div className="renderBlock">
        <pre>
          {`  
          {
              "id": 2,
              "name": "T-shirt",
          }
 
`}
        </pre>
      </div>
    </>
  );
};

export default CreateCategory;
