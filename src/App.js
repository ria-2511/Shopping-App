import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import MainPage from "./components/Mainpage/MainPage";
import CategoryPage from "./components/CategoryPage/CategoryPage";
import ProductPage from "./components/Product/Product";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} Component={MainPage} />
          <Route path={"Category"} Component={CategoryPage} />
          <Route path={"Product"} Component={ProductPage} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
