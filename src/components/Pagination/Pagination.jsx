import React from 'react'

const Pagination = ({ perPage, totalLaunch, paginate}) =>
{   
  const pageNumbers = []
  for(let index = 1; index<=Math.ceil(totalLaunch / perPage); index++){
    pageNumbers.push(index)
  }

  return (
    <nav>
      <ul className='flex container mx-5 lg:justify-center' style={{justifyContent:'flex-end',paddingRight:'27px'}}>
        {pageNumbers.map(number => (
          <li key={number}>
            <button 
              onClick={()=>paginate(number)} 
              className='border active:gray-500 text-black rounded
                         hover:bg-black hover:text-white p-2 cursor-pointer' key={number}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination;
