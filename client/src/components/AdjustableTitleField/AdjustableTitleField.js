import React, { Component } from 'react';
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Input,
  InputGroup,
  InputGroupButtonDropdown
} from 'reactstrap';

class AdjustableTitleField extends Component {
  constructor(props) {
    super(props);

    const { initialState } = props;

    this.state = {
      dropdownOpen: false,
      content: initialState.contentField.value,
      template: initialState.templateField.value,
      templateOptions: initialState.templateField.source,
    };

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState(state => ({
      ...state,
      dropdownOpen: !state.dropdownOpen,
    }))
  }

  render() {
    const { schema: { contentField, templateField } } = this.props;

    return (
      <InputGroup>
        <Input name={contentField.name} value={this.state.content} />
        <InputGroupButtonDropdown addonType="append" isOpen={this.state.dropdownOpen} toggle={this.handleToggle}>
          <DropdownToggle caret outline>
            { this.state.templateOptions.find(option => option.value === this.state.template).title}
          </DropdownToggle>
          <DropdownMenu>
            { this.state.templateOptions.map(option => (
              <DropdownItem
                dangerouslySetInnerHTML={{ __html: option.title }}
                value={option.value}
                disabled={option.disabled}
              />
            ))}
          </DropdownMenu>
        </InputGroupButtonDropdown>
      </InputGroup>
    )
  }
}


const thing = props => {

};

export default AdjustableTitleField;
