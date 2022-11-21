import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #f5d0fe;
  height: 100vh;
  width: 100vw;
`

export const EditableTextInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #ffffff;
  width: 25vw;
  height: 25vh;
  border-radius: 25px;
`

export const Heading = styled.h1`
  text-align: center;
  font-size: 28px;
  margin-bottom: 40px;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

export const InputField = styled.input`
  border: solid 1px #cbd2d9;
  height: 35px;
  border-radius: 5px;
  width: 280px;
  font-size: 18px;
  font-family: 'Consolas';
  outline: none;
`

export const Text = styled.p`
  font-family: 'Consolas';
  font-size: 18px;
  margin-top: 5px;
`

export const SaveEditButton = styled.button`
  background-color: #d946ef;
  padding: 5px;
  width: 80px;
  border-style: none;
  border-radius: 5px;
  height: 35px;
  color: #ffffff;
`
