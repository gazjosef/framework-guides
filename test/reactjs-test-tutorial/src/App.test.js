import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { Ticket } from './components/Ticket';
import { Footer } from './components/Footer';

it('should render Ticket and Footer', () => {
  const wrapper = shallow(<App />);
  const ticket = wrapper.find(Ticket);
  const footer = wrapper.find(Footer);

  expect(ticket.exists()).toBe(true);
  expect(footer.exists()).toBe(true);
});
