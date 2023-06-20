import { useLocation } from "react-router";

const CategoryPage = () => {
  const {state} = useLocation();
  const {data} = state;
  console.log(data);

  return <div>`{JSON.stringify(data)}`</div>;
};

export default CategoryPage;
