const GetById = () => {
  return (
    <>
      <h2>Get By Id</h2>
      <p>
        You can get a single product by adding the <span>id</span> as a
        parameter: <span>/product/:id</span>
      </p>
      <small>Request</small>
      <div className="renderBlock">
        <pre>
          <span>[ GET ]</span>{" "}
          https://clothingapi.zeabur.app/product/1
        </pre>
      </div>
      <small>Response</small>
      <div className="renderBlock">
        <pre>
          {`  
        {
            "id": 1,
            "name": "Imported Cargo",
            "description": "Imported cargo pant combines style and functionality
             to meet the demands of an active, urban lifestyle.",
            "categoryId": 1,
            "color": "Black",
            "price": 35000,
            "stock": 5,
            "img_link": "https://clothingapi.s3.amazonaws.com/clothingapi-images/
            pantalones/cargos/cargo-importado-negro.jpeg"
        },
         `}
        </pre>
      </div>
    </>
  );
};

export default GetById;
