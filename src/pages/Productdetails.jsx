import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { deleteTheProduct, getAllProducts } from '../services/allAPI';

function Productdetails() {
  const [allProducts, setAllProduct] = useState([]);
  const [search, setSearch] = useState('');

  const viewAllProducts = async () => {
    const response = await getAllProducts();
    const { data } = response;

    // Filter products based on the search term
    const filteredProducts = data.filter(
      (product) =>
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase())
    );

    setAllProduct(filteredProducts);
  };

  const deleteProduct = async (id) => {
    await deleteTheProduct(id);
    viewAllProducts();
  };

  useEffect(() => {
    viewAllProducts();
  }, [search]); // Trigger the effect whenever the search term changes

  return (
    <div>
      <Header />
      <div className="row">
        <div className="col-3" style={{height:"200vh",backgroundColor:"green",width:"310px"}}>
          <Sidebar />
        </div>
        <div className="col-9 ">
          <h1>Product List</h1>
          <div className="d-flex mb-3">
            <input
              className="w-50 form-control"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              type="text"
              placeholder="Search Category"
            />
            <i className="fa-solid fa-magnifying-glass fa-2x ms-2"></i>
          </div>

          <table className="shadow p-5 w-100 mt-3">
            <thead>
              <tr>
                <th className="border border-dark p-3">ID</th>
                <th className="border border-dark p-3">Name</th>
                <th className="border border-dark p-3">Price</th>
                <th className="border border-dark p-3">Image</th>
                <th className="border border-dark p-3">Description</th>
                <th className="border border-dark p-3">Category</th>
              </tr>
            </thead>

            <tbody>
              {allProducts?.length > 0 ? (
                allProducts.map((item) => (
                  <tr key={item.id}>
                    <td className="border border-dark p-3">{item.pid}</td>
                    <td className="border border-dark p-3">{item.name}</td>
                    <td className="border border-dark p-3">{item.price} ₹</td>
                    <td className="border border-dark p-3">
                      <img src={item.image} className='rounded' alt="no image" height={'100px'} width={'100px'} />
                    </td>
                    <td className="border border-dark p-3">{item.description}</td>
                    <td className="border border-dark p-3">{item.category}</td>
                    <td className="border border-dark p-3">
                      <button type="button" onClick={() => deleteProduct(item?.id)}>
                        <i className="fa-solid fa-trash text-danger"></i>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7">Nothing to display</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Productdetails;
