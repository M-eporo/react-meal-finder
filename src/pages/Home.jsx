import {useContext} from "react";
import {AppContext} from "../context";
import Loading from "../components/Loading";

const Home = () => {
  const contextValues = useContext(AppContext);
  return (
    <>
    <h3>今夜のレシピを見つけよう</h3>
    {contextValues.loading && <Loading/>}
    </>
  )
}

export default Home;