import React from "react";
import { Form, Modal, Header } from "semantic-ui-react";
import axios from "axios";

class ContactForm extends React.Component {
  state = {
    name: "",
    email: "",
    message: "",
  };

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addContact(this.state)
    this.setState({
      name: '',
      email: '',
      message: ''  
      })
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value, 
    });
  };

  render() {
    const { name, email, message } = this.state;
    return (
      <>
        <Modal.Content>
          <Header as h2>Contact Me</Header>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group widths="equal">
              <Form.Input
                label="Name"
                placeholder="Name"
                name="name"
                value={name}
                onChange={this.handleChange}
              />

              <Form.Input
                label="email"
                placeholder="email"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
              <Form.TextArea
                label="Message"
                placeholder="Message"
                name="message"
                value={message}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Button type="submit">Submit</Form.Button>
          </Form>
        </Modal.Content>
      </>
    );
  }
}

export default ContactForm;