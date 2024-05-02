const CreateProduct = () => {
  return (
    <>
      <h2>Create Product</h2>
      <p>
        You can create a new product by sending an object like the following to
        <span> /product </span>
        endpoint.
      </p>
      <small>Request</small>
      <div className="renderBlock">
        <pre>
          <span>[ POST ]</span>{" "}
          https://clothingapi.zeabur.app/product
        </pre>
      </div>
      <small>Body</small>
      <div className="renderBlock">
        <pre>
          {`

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
         `}{" "}
        </pre>
      </div>
      <small>Response</small>
      <div className="renderBlock">
        <pre>
          {`
        
          {
              "id": 3,
              "name": "Seams Cargo",
              "description": "This cargo pant with white stitching is a versatile
               and modern piece that combines functionality and style for the contemporary man.",
              "categoryId": {
                    id: 1 ,
                    name: "Pants"
               },
              "color": "Black",
              "price": 27000,
              "stock": 5,
              "img_link": "https://clothingapi.s3.amazonaws.com/clothingapi-images/
              pantalones/cargos/cargo-costuras.png"
          },
      
      `}
        </pre>
      </div>
    </>
  );
};

export default CreateProduct;
