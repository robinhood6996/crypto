import {Button, Image, Modal} from "react-bootstrap";
import {MdEdit} from "react-icons/md";
import Avater from "../assets/images/avater.jpg";
import {useState} from "react";

function Account() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className={"container pt-5"}>
            <div className="cs-card cs-box-shadow p-4">
                <div className="card-header">
                    <h5 className="fs-20px fw-700 text-cs-black mb-3">Account</h5>
                </div>
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex">
                            <Image src={Avater} className="w-70px me-3" rounded />
                            <div>
                                <h5 className="fs-16px fw-600 mb-0">Name</h5>
                                <p className="fs-14px fw-500">test@gmail.com</p>
                            </div>
                        </div>
                        <div className="">
                            <button className="btn btn-light btn-icon btn-sm d-flex align-items-center" onClick={handleShow}>
                                <MdEdit className="me-2" />
                                Edit
                            </button>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center">
                        <button className="btn btn-danger btn-lg">Sign Out</button>
                    </div>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Avater</label>
                            <input type="file" className="form-control" id="exampleInputEmail1"
                                   aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                            <input type="text" className="form-control" id="exampleInputEmail1"
                                   aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1"
                                   aria-describedby="emailHelp"/>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Account;