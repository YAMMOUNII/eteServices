import React from 'react'
import Skeleton from 'react-loading-skeleton';


const TableSkeleton = () => {
  return (
    <div>
        <Skeleton style={{height: '60px',marginBottom: '20px'}}/> 
        <Skeleton count={5} style={{height: '40px',marginBottom: '5px'}}/> 
    </div>
  )
}

export default TableSkeleton