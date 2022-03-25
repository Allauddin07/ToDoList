import {
     Modal
}
    from 'react-bootstrap';

export default function MyVerticallydModal(props) {
    return (
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
       
        <Modal.Body className='d-flex'>
        <div className="spinner-border text-primary  " role="status">
        <i className="sr-only">Please wait...</i> 
        </div>
        <h4 className='spin'>Please wait...</h4>

        </Modal.Body>

      </Modal>
    );
  }
  