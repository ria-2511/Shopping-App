import { useLocation } from "react-router";
import NavbarElement from "../Navbar/Navbar";
import "./CategoryPage.scss";
import Sidebar from "../Sidebar/Sidebar";
import ProductBox from "../ProductBox/ProductBox";

const CategoryPage = () => {
  const {state} = useLocation();
  const {data, categoryClicked} = state;
  const itemsCount = data.products.length;

  return (
    <div>
      <NavbarElement/>
      <div className="MainPage">
        <div className="mainContainer" id="itemCount">
          <section style={{width: '15rem', display:'flex',flexDirection:'column'}}>
            <div>
            <span className="categoryClickedHeading">
              {categoryClicked}
            </span> - 
            <span style={{color : "grey", fontWeight: 'normal', paddingLeft: '5px'}}>
              {itemsCount}
            </span>
            </div>
            <span className="filterBtn">Filter Results</span>
          <div className="sidebar">
          <Sidebar
            data={data}
            categoryClicked={categoryClicked}
          />
          </div>
          </section>
          <div id="categoryData" className="categoryData">
            <>
              {data.products.map((product) => {
                return (
                    <ProductBox className={'productMain'} productData={product}/>
                )
              })}
            </>
          </div>
        </div>
      </div>
    </div>
  )
};

export default CategoryPage;
