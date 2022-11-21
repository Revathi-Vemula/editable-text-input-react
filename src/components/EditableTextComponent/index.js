import {Component} from 'react'
import {
  MainContainer,
  EditableTextInputContainer,
  InputContainer,
  Heading,
  InputField,
  Text,
  SaveEditButton,
} from './styledComponents'

class EditableTextComponent extends Component {
  state = {isShowInput: true, textMessage: ''}

  onChangeTextInput = event => {
    this.setState({textMessage: event.target.value})
  }

  saveOrEditText = () => {
    this.setState(prevState => ({
      isShowInput: !prevState.isShowInput,
    }))
  }

  render() {
    const {isShowInput, textMessage} = this.state

    return (
      <MainContainer>
        <EditableTextInputContainer>
          <Heading>Editable Text Input</Heading>
          <InputContainer>
            {isShowInput ? (
              <InputField
                type="text"
                onChange={this.onChangeTextInput}
                value={textMessage}
              />
            ) : (
              <Text>{textMessage}</Text>
            )}
            <SaveEditButton onClick={this.saveOrEditText}>
              {isShowInput ? 'Save' : 'Edit'}
            </SaveEditButton>
          </InputContainer>
        </EditableTextInputContainer>
      </MainContainer>
    )
  }
}

export default EditableTextComponent
