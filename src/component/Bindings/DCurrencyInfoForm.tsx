import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "../../pages/Bindings/bindings.css";

const DCurrencyInfoForm = () => {
  const [method, setMethod] = useState(0);
  return (
    <>
      <div>
        <h6 className="form-title">Currency Information</h6>
        <Form className="mt-3">
          <Form.Group className="mb-3">
            <Form.Label>Select Chain</Form.Label>
            <div className="d-flex gap-2 align-items-center">
              <Button
                variant={method === 1 ? "success" : "outline-success"}
                onClick={() => setMethod(1)}
              >
                Bitcoin
              </Button>
              <Button
                variant={method === 2 ? "success" : "outline-success"}
                onClick={() => setMethod(2)}
              >
                Ethereum
              </Button>
            </div>
          </Form.Group>

          {method > 0 ? (
            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Address" />
            </Form.Group>
          ) : (
            <></>
          )}
        </Form>
      </div>
    </>
  );
};

export default DCurrencyInfoForm;
