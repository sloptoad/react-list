import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import dateFormat from 'dateformat';

const CustomerTableRow = ({ obj, action }) => {

    const deleteCustomer = () => { 
        axios.delete('http://localhost:4000/customers/delete-customer/' + obj._id)
            .then((res) => {
                console.log("deleted")
                action();
            }).catch((error) => {
                console.log(error)
            })
    }

    return (
        <>
            <div className="ui cards">
                <div className="card selection">
                    <div className="content">
                        <img className="right floated mini ui image" src="/square-image.png" alt="img" />
                        <div className="header">
                            {obj.firstname + " " + obj.lastname}</div>
                        <div className="meta">
                            {obj.address} </div>
                        <div className="description">
                            {dateFormat(obj.birthday, "dddd, mmmm dS, yyyy")}</div>
                    </div>
                    <div className="extra content">
                        <div className="ui two buttons">
                            <Link className="edit-link ui basic green button" to={"/edit-customer/" + obj._id}>
                                Edit
                        </Link>
                            <div onClick={deleteCustomer} className="ui basic red button">Delete</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}
export default CustomerTableRow;