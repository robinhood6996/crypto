import { Card, CardBody } from "react-bootstrap";

const BankCard = () => {
  return (
    <div className="binding-info mt-2">
      <Card className="cs-box-shadow soft-bg-primary border-0">
        <CardBody className="p-2">
          <div className="d-flex justify-content-between">
            <h6>Bind Bank</h6>
            <h6>IFIC BANK</h6>
          </div>
          <div className="d-flex justify-content-between">
            <h6>Bind card number</h6>
            <h6>78962528877455</h6>
          </div>
          <div className="d-flex justify-content-between">
            <h6>IFSC account number</h6>
            <h6>78962528877455</h6>
          </div>
          <div className="d-flex justify-content-between">
            <h6>Account holder name</h6>
            <h6>MD. Abu Rayhan</h6>
          </div>
          <div className="d-flex justify-content-between">
            <h6>Contact</h6>
            <h6>+8801870800306</h6>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default BankCard;
