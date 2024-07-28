import { Button, Col, Nav, Row, Tab } from "react-bootstrap";
import { IoIosAddCircleOutline } from "react-icons/io";
import Order from "../../pages/Orders/Order";

function CurrentOrders() {
  return (
    <>
      <div className="container">
        <Tab.Container id="left-tabs-example" defaultActiveKey="currentOrders">
          <Row>
            <Col sm={12}>
              <Nav
                variant="underline"
                className="flex-row justify-content-between"
              >
                <Nav.Item>
                  <Nav.Link
                    eventKey="currentOrders"
                    className="text--primary text-center"
                  >
                    Current Orders
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="pastOrders"
                    className="text--primary text-center"
                  >
                    Past Orders
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={12}>
              <Tab.Content>
                <Tab.Pane eventKey="currentOrders">
                  <div className="mt-5">
                    <div className="d-flex justify-content-between mb-2">
                      <h4 className="text--primary">Current Orders</h4>
                      <Button variant="success">
                        <IoIosAddCircleOutline fontSize={22} color="white" />{" "}
                        Create Order
                      </Button>
                    </div>
                    <Order />
                    <Order />
                    <Order />
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="pastOrders">
                  <div className="mt-5">
                    <h4 className="text--primary">Past Orders</h4>
                    <Order />
                    <Order />
                    <Order />
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </>
  );
}

export default CurrentOrders;
