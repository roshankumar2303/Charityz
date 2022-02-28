import React, { useState } from "react";
import { Modal } from "react-bootstrap";

const ImageModal = (props) => {
    const [visibility, setVisibility] = useState(false);
    const handleClose = () => setVisibility(false);
    const handleShow = () => setVisibility(true);
    
    return <div>
        <button className="custom-btn sm" onClick={handleShow}>{props.btnText}</button>
        <Modal size="lg" show={visibility} onHide={handleClose}>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                <img className="img-fluid" src={props.proofImg} alt="" style={{borderRadius:"4px"}}></img>
            </Modal.Body>
        </Modal>
    </div>
}

export default ImageModal;