import { useQuery } from "react-query";
import axios from "axios";

export async function fetchProductCategories() {
  try {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
  } catch (error) {
    console.log(error);
  }
}

export async function fetchProductData(key, successCb) {
  try {
    fetch(`https://dummyjson.com/products/category/${key}`)
      .then((res) => res.json())
      .then(successCb());
  } catch (error) {
    console.log(error);
  }
}

export function useGetCategoryData(key,successCb) {
  return useQuery(
    "posts",
    async () => {
      const { data } = await axios.get(
        `https://dummyjson.com/products/category/${key}`
      );
      return data;
    },
    {
      onSuccess: successCb,
      enabled: false
    }
  );
}
