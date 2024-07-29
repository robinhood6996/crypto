import { Card, CardBody, CardHeader } from "react-bootstrap";
import coin from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import "./account.css";
function Account() {
  return (
    <div className="container">
      <Card className="custom-card cs-box-shadow">
        <CardHeader className="custom-card-header">
          <h5>My Account</h5>
        </CardHeader>
        <CardBody>
          <div className="d-flex align-items-center">
            <div className="avatar rounded">
              <img src={coin} alt="" width={150} />
            </div>
            <div>
              <h6 className="text--primary fs-20px"> Fakrul Islam Robin</h6>
              <p className="p-0 m-0">Email - fakrulrobin7@gmail.com</p>
              <p className="p-0 m-0">Phone - +8801870800306</p>
            </div>
          </div>
          <div className="account-navs">
            <Link to={"/"}>
              <div className="link my-2">Bindings</div>
            </Link>
            <Link to={"/"}>
              <div className="link my-2">Withdraw</div>
            </Link>
            <Link to={"/"}>
              <div className="link my-2">Orders</div>
            </Link>
            <Link to={"/"}>
              <div className="link my-2">Settings</div>
            </Link>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default Account;
