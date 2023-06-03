import React, { useState } from "react";
import "./Homepage.scss";
import { categoryImgMapper } from "../../Constants/CategoryImagesMapper";
import { Card } from "react-bootstrap";
import CategoryPage from "../CategoryPage/CategoryPage";

const HomePage = () => {
  const [categoryClicked, setCategoryClicked] = useState(false);
  const handleCategoryClick = () => {
    setCategoryClicked(true);
  };

  return (
    <div className="Homepage">
      {categoryClicked ? (
        <CategoryPage />
      ) : (
        <>
          {categoryImgMapper.map((category) => {
            return (
              <>
                {
                  <div>
                    <div className="categoryHeading">
                      {category.categoryName}
                    </div>
                    <div className="categoryList">
                      {category.list.map((item) => {
                        return (
                          <Card style={{ width: "14rem", margin: "20px" }}>
                            <Card.Img
                              variant="top"
                              src={item.link}
                              onClick={handleCategoryClick}
                              className="cardImg"
                            />
                            <Card.Body>
                              <Card.Title>{item.name}</Card.Title>
                            </Card.Body>
                          </Card>
                        );
                      })}
                    </div>
                  </div>
                }
              </>
            );
          })}
        </>
      )}
    </div>
  );
};

export default HomePage;
