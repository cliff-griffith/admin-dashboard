import "./topbox.scss";
import { topDealUsers } from "../../data";
import { roundToNearestHundredth } from "../../helperFunctions/round-to-nearest-hundredth";

const TopBox = () => {
  return (
    <div className="topBox">
      <h1>Top Deals</h1>
      <div className="list">
        {topDealUsers.map((user) => (
          <div className="listItem" key={user.id}>
            <div className="user">
              <img src={user.img} alt="" />
              <div className="userText">
                <span className="username">{user.username}</span>
                <span className="email">{user.email}</span>
              </div>
            </div>
            <span className="amount">
              {roundToNearestHundredth(Number(user.amount))}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBox;
