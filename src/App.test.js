import { render, screen } from '@testing-library/react';
import { shallow} from 'enzyme';
import App from './App';
import CreateCustomer from './components/CreateCustomer'
import CustomerTableRow from './components/CustomerTableRow'

let wrapped;

beforeEach(()=>{
  wrapped = shallow(<CreateCustomer />);
})


it('has a form', ()=>{
  render(<CreateCustomer />);

  expect(wrapped.find('form').length).toEqual(1);
})

it('has a button', ()=>{
  render(<CreateCustomer />);

  expect(wrapped.find('button').length).toEqual(1);
})



