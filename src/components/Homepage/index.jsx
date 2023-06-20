import React, { useCallback, useEffect, useState } from "react";
import "./Homepage.scss";
import { categoryImgMapper } from "../../Constants/CategoryImagesMapper";
import { Card } from "react-bootstrap";
import CategoryPage from '../CategoryPage/CategoryPage';
import { useNavigate } from "react-router";
import { useGetCategoryData } from "../../apiHooks/dataApi";

const HomePage = () => {
  const navigate = useNavigate();
  const [categoryClicked, setCategoryClicked] = useState();

  const movePage = (data) => {
    if (categoryClicked && data && !loading) {
      navigate("/Category", {state : {data}});
    }
  };

  const {
    refetch: getCategoryData,
    loading 
  } = useGetCategoryData(categoryClicked, movePage);

  const handleCategoryClick = (event) => {
    setCategoryClicked(event.target.id);
    console.log(event.target.id);
  };

  useEffect(() => {
    if(categoryClicked){
      getCategoryData();
    }
  }, [categoryClicked, getCategoryData])

  return (
    <div className="Homepage">
      {
        loading ? (
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
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
                              id={item.key}
                              src={item.link}
                              onClick={handleCategoryClick}
                              className="cardImg"
                              key={item.name}
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
        )
      }
    </div>
  );
};

export default HomePage;
