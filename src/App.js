import "./styles.css";
import { imageDatas } from "./Images";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        {imageDatas.map((e) => (
          <div key={e.id} className="imgContainer">
            <h4>{e.title}</h4>
            <img src={e.img} alt="" />
          </div>
        ))}
      </div>
      {/* <div style={{ background: "blue", height: "50%" }}>dcdc</div> */}
    </div>
  );
}
