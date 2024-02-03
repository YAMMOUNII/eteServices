import React, { useEffect } from "react";
import "./../../utils/Style/pages/ProductPage.scss";
import { fetchAllProduct } from "../../app/Slices/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import TableSkeleton from "../../components/TableSkelton";
import SimpleTable from "../../components/SimpleTable";
import ProductAPI from "../../api/ProductAPI";


function Product() {
  const {} = ProductAPI();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.product.gettingProductData);

  const columns = [
    { Header: 'Image', accessor: 'picture', Cell: ({row}) => <img src={`images/${row.original?.picture}`} width={50} /> },
    { Header: 'ID', accessor: '', Cell: ({row}) => <>#{row.original?._id}</> },
    { Header: 'Full Name', accessor: 'fullName', Cell: ({row}) => <>{row.original?.fullName}</> },
    { Header: 'Merchant Email', accessor: 'merchantEmail', Cell: ({row}) => <>{row.original?.merchantEmail}</> },
    { Header: 'Store Id', accessor: 'store', Cell: ({row}) => <>{row.original?.store}</> },
  ]

  useEffect(() => {
    dispatch(fetchAllProduct());
  },[])
  return (
    <>
      <div className="ProductPage">
        <p>Product</p>
        {data == null ?
          <TableSkeleton />
          :
          <SimpleTable data={data} columns={columns} />
        }
      </div>
    </>
  );
}
export default Product;
