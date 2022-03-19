/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {NavLink} from "react-router-dom"

function Home() {
  let Style = {
    position: "relative",
    bottom : "1rem",


}

  return (
    <div className="App" style={Style}>

          <NavLink to="/Acts">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHhdW6z2_2CkaEkndEnyJ7FeaXjNk4vhgnQg"  className="shadow p-3 mb-5 bg-body rounded rounded mx-auto d-block"></img>
          <h4 className="text-center">Merchant Of Venice</h4>

</NavLink>

    </div>
  );
}

export default Home;