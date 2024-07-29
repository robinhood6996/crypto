import { Button, Card, CardBody } from "react-bootstrap";
import "./bindings.css";
import { useState } from "react";
import DCurrencyInfoForm from "../../component/Bindings/DCurrencyInfoForm";
import BankInformationForm from "../../component/Bindings/BankInformationForm";
const Bindings = () => {
  const [method, setMethod] = useState(0);
  return (
    <div className="container pb-5">
      <div className="page-header py-2 mb-2">
        <h5 className="ms-2">Add Collection</h5>
      </div>
      <Card className="custom-card cs-box-shadow">
        <CardBody>
          <h5 className="">Bind Type</h5>
          <div className="d-flex gap-4 align-items-center">
            <Button
              variant={method === 1 ? "success" : "outline-success"}
              onClick={() => setMethod(1)}
            >
              Digital Currency
            </Button>
            <Button
              variant={method === 2 ? "success" : "outline-success"}
              onClick={() => setMethod(2)}
            >
              Bank Card
            </Button>
          </div>
          <div className="mt-3">
            {method === 1 ? (
              <DCurrencyInfoForm />
            ) : method === 2 ? (
              <BankInformationForm />
            ) : (
              <></>
            )}
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Bindings;
