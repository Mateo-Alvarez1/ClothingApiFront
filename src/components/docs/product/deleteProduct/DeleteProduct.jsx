const DeleteProduct = () => {
  return (
    <>
      <h2>Delete Product</h2>
      <p>
        You can delete a product by adding the <span>id</span> as a parameter:{" "}
        <span> /product/:id</span>
      </p>
      <small>Request</small>
      <div className="renderBlock">
        <pre>
          <span>[ DELETE ]</span>{" "}
          https://clothingapi-dev-aepd.3.us-1.fl0.io/product/1
        </pre>
      </div>
      <small>Response</small>
      <div className="renderBlock">
        <pre>Delete Product Successfully</pre>
      </div>
    </>
  );
};

export default DeleteProduct;
