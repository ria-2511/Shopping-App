import React, {useEffect} from 'react';
import { fetchProductCategories } from '../../apiHooks/dataApi';
import HomePage from '../Homepage';
import NavbarElement from '../Navbar/Navbar';

export const MainPage = () => {

    useEffect(() => {
      fetchProductCategories()
      .then((result) => {
        console.log(result);
        
      })
    }, [])
    
    return (
      <>
        <div>
          <NavbarElement/>
          <HomePage/>
        </div>
      </>
    )
}

