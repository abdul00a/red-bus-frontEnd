import React from 'react';
import { Modal, Button } from 'antd';
import './BookingForm.css';

class BookingForm extends React.Component {
  render() {
    return (
      <div>
        <Modal
          visible={true}
          title='Title'
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width='630px'
          footer={[
            <Button key='back' type='danger'>
              Return
            </Button>,
            <Button key='submit' type='primary' loading={true}>
              Submit
            </Button>
          ]}
        >
          <form>
            <div className='donation-form'>
              <h1 className='form-title' id='personal-info'>
                Passenger's Information
              </h1>
              <div className='input-box' id='fname-container'>
                <input type='text' className='input-field' id='fname' />
                <label className='field-label'>FIRST NAME</label>
              </div>
              <div className='input-box' id='lname-container'>
                <input type='text' className='input-field' id='lname' />
                <label className='field-label'>LAST NAME</label>
              </div>
              <div className='input-box' id='gender-container'>
                <input type='text' className='input-field' id='gender' />
                <label className='field-label'>GENDER</label>
              </div>
              <div className='input-box' id='age-container'>
                <input type='text' className='input-field' id='age' />
                <label className='field-label'>AGE</label>
              </div>
              <div className='input-box' id='phone-container'>
                <input type='text' className='input-field' id='phone' />
                <label className='field-label'>PHONE</label>
              </div>
              <div className='input-box' id='email-container'>
                <input type='text' className='input-field' id='email' />
                <label className='field-label'>EMAIL ADDRESS</label>
              </div>
            </div>
          </form>
        </Modal>
      </div>
    );
  }
}


export default BookingForm;
