import React, { useState, Fragment } from "react";
import axios from 'axios';
import CustomerList from "./CustomerList";

const CreateCustomer = () => {

  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [birthday, setBirthday] = useState('')
  const [customers, setCustomers] = useState([])

  const onChangeCustomerFirstName = (e) => {
    setFirstName(e.target.value)
  }

  const onChangeCustomerLastName = (e) => {
    setLastName(e.target.value)
  }

  const onChangeCustomerAddress = (e) => {
    setAddress(e.target.value)
  }
  const onChangeCustomerBirthday = (e) => {
    setBirthday(e.target.value)
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    const customerObject = {
      firstname: firstname,
      lastname: lastname,
      address: address,
      birthday: birthday
    };
    const result = await axios.post('http://localhost:4000/customers/create-customer', customerObject)
    console.log(result.data.birthday)
    setFirstName(result.data.firstname)
    setLastName(result.data.lastname)
    setAddress(result.data.address)
    setBirthday(result.data.birthday)

    const result2 = await axios.get('http://localhost:4000/customers/')
      .catch((error) => {
        console.log(error);
      })
    setCustomers(result2)
  }

  return (
    <>
      <form className="ui form" onSubmit={onSubmit}>
        <div className="field">
          <label>First Name</label>
          <input required type="text" value={firstname} onChange={onChangeCustomerFirstName} />
        </div>
        <div className="field">
          <label>Last Name</label>
          <input required type="text" value={lastname} onChange={onChangeCustomerLastName} />
        </div>
        <div className="field">
          <label>Address</label>
          <input required type="text" value={address} onChange={onChangeCustomerAddress} />
        </div>
        <div className="field">
          <label>Date of Birth</label>
          <input required type="date" value={birthday} onChange={onChangeCustomerBirthday} />
        </div>

        <button className="ui button" type="submit">Submit</button>
      </form>
      <CustomerList customers={customers}></CustomerList>
    </>

  );

}

export default CreateCustomer;