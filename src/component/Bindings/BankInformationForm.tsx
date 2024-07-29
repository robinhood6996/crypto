import { Badge, Button, Form } from "react-bootstrap";
import "../../pages/Bindings/bindings.css";

const BankInformationForm = () => {
  return (
    <div>
      <h6 className="form-title">Bank Information</h6>
      <Form className="mt-3">
        <Form.Group className="mb-3">
          <Form.Label>Currency</Form.Label>
          <div>
            <Badge bg="success">INR</Badge>
          </div>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Bank Name</Form.Label>
          <Form.Control type="text" placeholder="ex: The city bank" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Bank Account Number</Form.Label>
          <Form.Control type="text" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Account Holder Name</Form.Label>
          <Form.Control type="text" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>IFSC Account Number</Form.Label>
          <Form.Control type="text" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="ex: jhon@gmail.com" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="phone" placeholder="" />
        </Form.Group>
        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default BankInformationForm;
