import React from 'react';
// import Cardlist from './Cardlist';
// import SearchBox from './SearchBox';
// import {robots }from './robots';

const SearchBox=(  { searchfeild , searchChange})=>{
    return(
      <div className='pa2'>
    <input className='pa3 ba b--green bg-lightest-blue' 
    type='search'
     placeholder='search robots'
     onChange={searchChange}
     />

     </div>);
} 
export default SearchBox; 