import React, {  useState, useEffect, Fragment } from "react";
import axios from 'axios';
import BackButton from "./Back";

const EditCustomer = ({ match, history, dataTable }) => {

  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [birthday, setBirthday] = useState('')

  useEffect(async () => {
    const result = await axios.get('http://localhost:4000/customers/edit-customer/' + match.params.id)
      .catch((error) => {
        console.log(error);
      })
    setFirstName(result.data.firstname)
    setLastName(result.data.lastname)
    setAddress(result.data.address)
    setBirthday(result.data.birthday)
  }, [])

  const bdayConverter = (bday) => {
    let newday = bday.split('-');
    let day = newday[2];
    let month = newday[1];
    let year = newday[0];
    if (day) {
      return `${month}/${day[0] + day[1]}/${year}`
    }

  }

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

  const onSubmit = (e) => {
    e.preventDefault()

    const customerObject = {
      firstname: firstname,
      lastname: lastname,
      address: address,
      birthday: birthday
    };

    axios.put('http://localhost:4000/customers/update-customer/' + match.params.id, customerObject)
      .then((res) => {
        console.log(res.data)
        console.log('Customer successfully updated')
        history.push('/')
      }).catch((error) => {
        console.log(error)
      })
  }

  return (
    <>
      <BackButton />
      <form className="ui form" onSubmit={onSubmit}>
        <div className="field">
          <label>First name</label>
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
          <label>Birthday</label>
          <input required type="text" value={bdayConverter(birthday)} onChange={onChangeCustomerBirthday} />
        </div>
        <button className="ui button" type="submit">Submit</button>
      </form>
    </>
  );

}

export default EditCustomer;