import React, {useEffect} from 'react';
import { fetchProductCategories } from '../../apiHooks/dataApi';

const MainPage = () => {

    useEffect(() => {
      fetchProductCategories()
      .then((result) => {
        console.log(result);
        
      })
    }, [])
    
    return (
        <div>
            on the main page
        </div>
    )
}

export default MainPage;