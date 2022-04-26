import React from 'react'
import { Pagination } from '@mui/material';

const PageCounter = ({cardPerPage, totalCard, paginate}) => {

    const pageNum = [];
for (let index = 1; index < Math.ceil(totalCard/cardPerPage); index++) {
    pageNum.push(index)
   
}
console.log(pageNum);
  return (
    <Pagination count={pageNum.length} onClick={(e)=>paginate(e.target.innerText)}/>
  )
}

export default PageCounter
