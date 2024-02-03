import React, { useEffect, useState } from "react";
import "./../../utils/Style/pages/ProductPage.scss";
import { fetchAllProduct } from "../../app/Slices/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import TableSkeleton from "../../components/TableSkelton";
import SimpleTable from "../../components/SimpleTable";
import ProductAPI from "../../api/ProductAPI";
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ProductEditModal from "../../components/ProductEditModal";

function Product() {
  const { DeleteProduct,GetProductById } = ProductAPI();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.product.gettingProductData);
  const isloading = useSelector((state) => state.product.isloading);
  const [getModalUpdateProduct, setModalUpdateProduct] = useState(false);
  const [getData, setData] = useState([]);

  const columns = [
    { Header: 'Image', accessor: 'picture', Cell: ({ row }) => <img src={`images/${row.original?.picture}`} width={50} /> },
    { Header: 'ID', accessor: '', Cell: ({ row }) => <>#{row.original?._id}</> },
    { Header: 'Full Name', accessor: 'fullName', Cell: ({ row }) => <>{row.original?.fullName}</> },
    { Header: 'Merchant Email', accessor: 'merchantEmail', Cell: ({ row }) => <>{row.original?.merchantEmail}</> },
    { Header: 'Store Id', accessor: 'store', Cell: ({ row }) => <>{row.original?.store}</> },
    { Header: '', accessor: 'delete', Cell: ({ row }) => <button className="button" onClick={() => DeleteProduct(row.original?._id)}><FontAwesomeIcon icon={faTrash} /></button> },
    {
      Header: '', accessor: 'edit', Cell: ({ row }) => <button className="button" onClick={() => {
          setData(row.original);
          setModalUpdateProduct(true);
      }}><FontAwesomeIcon icon={faPenToSquare} /></button>
    },
  ]

  useEffect(() => {
    dispatch(fetchAllProduct());
  }, [])
  return (
    <>
      <div className="ProductPage">
        <p>Product</p>
        {isloading === "pending" ?
          <TableSkeleton />
          :
          <SimpleTable data={data} columns={columns} />
        }
      </div>


      <ProductEditModal show={getModalUpdateProduct}
        onHide={() => setModalUpdateProduct(false)}
        getData={getData} />
    </>
  );
}
export default Product;
