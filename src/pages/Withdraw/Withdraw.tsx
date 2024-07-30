import { useState } from "react";
import { Button, Card, CardBody, Form, InputGroup } from "react-bootstrap";
import BankCard from "../../component/Withdraw/BankCard";
import OTPInput from "../../component/Withdraw/CapitalCode";
import "./withdraw.css";

const Withdraw = () => {
  const [method, setMethod] = useState(0);
  const [selectedWallet, setSelectedWallet] = useState(0);
  return (
    <div className="container pb-5">
      <div className="page-header py-2 mb-2">
        <h5 className="ms-2">Request for Withdraw</h5>
      </div>
      <Card className="custom-card cs-box-shadow p-1">
        <CardBody className="p-2">
          <h5 className="">Withdrawal Channel</h5>
          <div className="d-flex gap-4 align-items-center">
            <Button
              variant={method === 1 ? "success" : "outline-success"}
              onClick={() => setMethod(1)}
              size="sm"
            >
              Digital Currency
            </Button>
            <Button
              variant={method === 2 ? "success" : "outline-success"}
              onClick={() => setMethod(2)}
              size="sm"
            >
              Bank Card
            </Button>
          </div>
          {method > 0 && (
            <div className="mt-3">
              <div className="currency">
                <p className="pb-1 mb-0">Select Currency</p>
                <Form.Select>
                  <option>INR</option>
                  <option>BDT</option>
                </Form.Select>
              </div>

              {method === 1 ? (
                <>
                  <p className="pb-1 mb-0 mt-2">Select digital wallet</p>
                  <div className="d-flex gap-4 align-items-center">
                    <Button
                      variant={
                        selectedWallet === 1 ? "success" : "outline-success"
                      }
                      onClick={() => setSelectedWallet(1)}
                      size="sm"
                    >
                      BTC
                    </Button>
                    <Button
                      variant={
                        selectedWallet === 2 ? "success" : "outline-success"
                      }
                      onClick={() => setSelectedWallet(2)}
                      size="sm"
                    >
                      ETH
                    </Button>
                  </div>
                </>
              ) : (
                <></>
              )}
              {method === 2 ? <BankCard /> : <></>}
              {method > 0 && (
                <div className="mt-2">
                  <p className="pb-1 mb-0">Withdrawal Amount</p>
                  <Form.Group>
                    <InputGroup className="mb-0">
                      <Form.Control
                        placeholder="0"
                        className="border-0 outline-none"
                        type="number"
                      />
                      <InputGroup.Text
                        id="basic-addon2"
                        className="bg-white border-0 cursor-pointer"
                      >
                        Max
                      </InputGroup.Text>
                    </InputGroup>
                    <Form.Text className="text--primary fw-semibold">
                      Available Balance: 1270.59
                    </Form.Text>
                  </Form.Group>
                </div>
              )}
              <OTPInput />
            </div>
          )}
          <div className="mt-3 d-grid">
            <Button variant="success" size="sm">
              Submit
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Withdraw;
