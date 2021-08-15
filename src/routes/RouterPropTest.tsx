import { Link } from "react-router-dom";
export default function RouterPropTest() {
    const menu = {
        name: "짜장면",
        price: "5000",
    }
  return (
    <>
      <h1>RouterPropTest</h1>
      <Link to={{
          pathname: "/reacterproptestresult",
          state:{
              menu
          }
        }}>데이터 날리기</Link>
    </>
  );
}
