import { Card } from "react-bootstrap";

const Order = () => {
  return (
    <>
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-4">
        <Card className="custom-card cs-box-shadow text-center">
          <Card.Body>
            <div className="d-flex justify-content-between">
              <h5 className="fs-15px fw-400 mb-0">Amount- $50</h5>
              <div className={"fs-15px fw-400 mb-0 text--primary"}>
                Time - 60 Sec.
              </div>
              <p className={"fs-20px fw-600 text--primary mb-0"}>Profit- $25</p>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Order;
