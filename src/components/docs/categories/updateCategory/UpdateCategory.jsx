const UpdateCategory = () => {
  return (
    <>
      <h2>Update Category</h2>
      <p>
        You can update a category by sending an object like the following and
        adding the <span>id</span> as a parameter: <span> /category/:id</span>
      </p>
      <small>Request</small>
      <div className="renderBlock">
        <pre>
          <span>[ PATCH ]</span>{" "}
          https://clothingapi-dev-aepd.3.us-1.fl0.io/category/1
        </pre>
      </div>
      <small>Body</small>
      <div className="renderBlock">
        <pre>
          {`   
                    {
                        "name": "Shorts",
                    },  
         `}
        </pre>
      </div>
      <small>Response</small>
      <div className="renderBlock">
        <pre>Update Category Successfully</pre>
      </div>
    </>
  );
};

export default UpdateCategory;
