import { useState } from "react";
import axios from "axios";

const Async = () => {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      //axios.get => get은 http의 요청 메서드중 하나. (정보를 가져오는 메서드)
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=kr&apiKey=0a8c4202385d4ec1bb93b7e277b3c51f',

      );
      setData(response.data);
    } catch(e) {
      console.log(e);
    }
  };

  //JSON.stringify(data, null, 2)
  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
      <textarea 
      rows={7} 
      value={JSON.stringify(data, null, 2)} 
      readOnly={true} 
      />
      )}
    </div>
  )
}

export default Async;