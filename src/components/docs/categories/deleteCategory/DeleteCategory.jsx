const DeleteCategory = () => {
  return (
    <>
      <h2>Delete Category</h2>
      <p>
        You can delete a category by adding the <span>id</span> as a parameter:{" "}
        <span> /category/:id</span>
      </p>
      <small>Request</small>
      <div className="renderBlock">
        <pre>
          <span>[ DELETE ]</span>{" "}
          https://clothingapi.zeabur.app/category/1
        </pre>
      </div>
      <small>Response</small>
      <div className="renderBlock">
        <pre>Delete Category Successfully</pre>
      </div>
    </>
  );
};

export default DeleteCategory;
