const GetAll = () => {
  return (
    <>
      <h1>Product</h1>
      <h2>Get All Products</h2>
      <p>
        You can access the list of 50 products by using the{" "}
        <span>/product/getAll </span>
        endpoint.
      </p>
      <small>Request</small>
      <div className="renderBlock">
        <pre>
          <span>[ GET ]</span>{" "}
          https://clothingapi-dev-aepd.3.us-1.fl0.io/product/getAll
        </pre>
      </div>
      <small>Response</small>
      <div className="renderBlock">
        <pre>
          {` [   
          {
              "id": 3,
              "name": "Seams Cargo",
              "description": "This cargo pant with white stitching is a versatile
               and modern piece that combines functionality and style for the contemporary man.",
              "categoryId": 1,
              "color": "Black",
              "price": 27000,
              "stock": 5,
              "img_link": "https://clothingapi.s3.amazonaws.com/clothingapi-images/
              pantalones/cargos/cargo-costuras.png"
          },
          //...
    ]`}
        </pre>
      </div>
    </>
  );
};

export default GetAll;
