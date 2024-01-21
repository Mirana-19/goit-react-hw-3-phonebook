import { Component } from 'react';
import { Button, Title } from 'styles/Shared.styles';
import { Input, Label, Phonebook } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;

    this.props.addContact({ name, number });

    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <Title>Phonebook</Title>
        <Phonebook onSubmit={this.onSubmit}>
          <Label>
            Name
            <Input
              value={name}
              onChange={this.onInputChange}
              type="text"
              name="name"
              required
            />
          </Label>
          <Label>
            Number
            <Input
              value={number}
              onChange={this.onInputChange}
              type="tel"
              name="number"
              required
            />
          </Label>
          <Button>Add contact</Button>
        </Phonebook>
      </>
    );
  }
}
