import { Badge, Card, Table } from "react-bootstrap";

const Order = () => {
  return (
    <>
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-4">
        <Card className="custom-card cs-box-shadow p-2">
          <Card.Title>
            <div className="d-flex justify-content-between">
              <Badge bg="success">
                <h5 className="fs-12px fw-400 mb-0">BTC/USDT</h5>
              </Badge>
              <Badge bg="secondary">
                <h5 className="fs-12px fw-400 mb-0">2024-05-25 01:28</h5>
              </Badge>
            </div>
            <p className="fs-16px mt-2">
              Settlement Timing: <span className="text--primary">178 s</span>
            </p>
          </Card.Title>
          <Card.Body className="p-2">
            <div className="w-100">
              <Table responsive="sm" striped>
                <thead>
                  <tr className="text-center">
                    <th className="fs-12px">Investment Time</th>
                    <th className="fs-12px">Direction</th>
                    <th className="fs-12px">Scale</th>
                    <th className="fs-12px">Investment Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-center">
                    <td>
                      <p className="fs-12px text--primary">80000.00</p>
                    </td>
                    <td>
                      <Badge bg="success">
                        <p className="fs-12px text--primary text-white mb-0">
                          UP
                        </p>
                      </Badge>
                      {/* <Badge bg="danger">
                        <p className="fs-12px text--primary text-white mb-0">
                          DOWN
                        </p>
                      </Badge> */}
                    </td>
                    <td>
                      <p className="fs-12px text--primary">50%</p>
                    </td>
                    <td>
                      <p className="fs-12px text--primary">180 s</p>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div className="d-flex justify-content-between">
              <div>
                <p>Buy Price</p>
                <p>Closing Price</p>
                <p>Profit</p>
              </div>
              <div>
                <p className="fw-600 text--primary">80.5800</p>
                <p className="fw-600 text--primary">0.153000</p>
                <p className="fw-600 text--primary">20.512</p>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Order;
