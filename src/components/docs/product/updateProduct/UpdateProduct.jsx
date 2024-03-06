const UpdateProduct = () => {
  return (
    <>
      <h2>Update Product</h2>
      <p>
        You can update a product by sending an object like the following and
        adding the <span>id</span> as a parameter: <span> /product/:id</span>
      </p>
      <small>Request</small>
      <div className="renderBlock">
        <pre>
          <span>[ PATCH ]</span>{" "}
          https://clothingapi-dev-aepd.3.us-1.fl0.io/product/1
        </pre>
      </div>
      <small>Body</small>
      <div className="renderBlock">
        <pre>
          {`   
                    {
                        "name": "Imported Cargo",
                        "description": "Imported cargo pant combines style and functionality to meet
                         the demands of an active, urban lifestyle.",
                        "categoryId": 1,
                        "color": "Green",
                        "price": 35000,
                        "stock": 5,
                        "img_link": "https://clothingapi.s3.amazonaws.com/clothingapi-images/
                        pantalones/cargos/cargo-importado-negro.jpeg"
                    },
                     
         `}{" "}
        </pre>
      </div>
      <small>Response</small>
      <div className="renderBlock">
        <pre>Update Product Successfully</pre>
      </div>
    </>
  );
};

export default UpdateProduct;
