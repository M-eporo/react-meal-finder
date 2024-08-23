import {useContext} from "react";
import {AppContext} from "../context";

const History = () => {
  const contextValues = useContext(AppContext);

  return (
    <ul>
      
      {contextValues.imgUrl.map(url => 
        <li key={url}>
          <img src={url} alt="meal-image" />
        </li>
      )}
    </ul>
  )
};

export default History;