import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AllProduct = () => {
  const [product, setProduct] = useState([]);

  // search
  // const [searchTerm, setSearchTerm] = useState("");
  // const handleSearch = (event) => {
  //   setSearchTerm(event.target.value);
  // };

  // const searchedProduct = product.filter(
  //   (pr) =>
  //     pr.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     pr.details.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  // console.log(product);

  // get data
  useEffect(() => {
    allprod();
  }, []);
  const allprod = async () => {
    axios
      .get(
        "http://localhost/inventory-react-php-mysql/api/product/allproducts.php"
      )
      .then((res) => {
        setProduct(res.data.datas.pr);
      });
  };

  return (
    <div class="container">
      <div class="row">
        <div class="col-md-2">
        </div>
        <div class="col-md-8">
          <h1 class="text-center">All Products Overview </h1>
          <hr/>
          {/* <label htmlFor="search">Search: </label> */}
          {/* <input
        id="search"
        type="text"
        name="searchTerm"
        onChange={handleSearch}
      /> */}
          <table className="table table-striped table-bordered">
          <thead className="thead-dark">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {product.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.sale_price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* <Link to="/products/add" className="btn btn-secondary">
        Add new product
      </Link> */}
        </div>
        <div class="col-md-2"> </div>
      </div>
    </div>
  );
};

export default AllProduct;
