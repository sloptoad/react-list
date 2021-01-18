import React from "react";
import axios from 'axios';
import CustomerTableRow from './CustomerRows';


export default class CustomerList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      customers: [],
      stateBustingKey: 0
    };
  }
  fetchData(){
    console.log("fetch")
    axios.get('http://localhost:4000/customers/')
    .then(res => {
      this.setState({
        customers: res.data
      });
    })
    .catch((error) => {
      console.log(error);
    })
  }
  handler=() =>{
    this.fetchData();
}
  componentDidMount() {
      this.fetchData();
  }
  componentDidUpdate(prevProps){
    console.log({prevProps})
    if(this.props.customers !==prevProps.customers){
      this.fetchData();
    }
  }

  insertCustomers() {
    return this.state.customers.map((res, i) => {
      return <CustomerTableRow  action={this.handler} obj={res} key={i} />;
    }); 
  }

  render() {
    return (
    <div> 
      <br></br>
       <div className="ui horizontal divider"> List of Customers </div>
      {this.insertCustomers()}
    </div>);
  }
}