import React from 'react'

const ShowSuggestion = ({Data}) => {
    //console.log("Data",Data);
    if (Data.length ==0) {
      return
    }
  return (
    <div className='fixed bg-white top-14 left-[27%] p-3 border rounded-lg w-4/12'>
    {Data.map((d)=> 
    <ul className='p-0' key={d}>
    <li className='hover:bg-gray-200 p-1 rounded-md'>{d}</li>
    </ul>
      
  )}
  </div>
  )
}

export default ShowSuggestion;
