import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import PhoneListItem from '../../components/phonebook/PhoneListItem'
import PhoneBookRightBox from '../../components/phonebook/PhoneBookRightBox'

const PhoneBookBox = styled.section`
  margin: 50px auto;
  width: 100vw;
`

const PhonebookTitle = styled.h1`
  text-align: center;
  font-weight: 700;
  font-size: 32px;
  margin-bottom: 30px;
`

const PhoneBookRowBox = styled.div`
  display: flex;
  padding: 50px;
`

const PhoneBookLeftBox = styled.div`
`

const TextLabel = styled.label`
    display: block;
    font-family: 'Spoqa Han Sans Neo';
    font-size: 12px;
    font-weight: 500;
    line-height: 15px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 10px;
    color: var(--subtitle-text);
`;

export const TextInput = styled.input.attrs({
  type: 'text',
})`
  width: 322px;
  border: none;
  border-bottom: 1px solid var(--border-gray);
  font-family: 'Spoqa Han Sans Neo';
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  text-align: left;
  padding-bottom: 8px;
  margin-bottom: 16px;
  ::placeholder {
      color: var(--border-gray);
  }
  &:focus {
      border-bottom: 1px solid var(--main-color);
  }
`;

const PhoneNumberBtn = styled.button``
export const PhoneBookForm = styled.form``

const Phonebook = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(0);
  const dispatch = useDispatch();

  const addContact = (event) => {
    event.preventDefault();
    dispatch({type: 'ADD_CONTACT', payload: {name, phoneNumber}})
  }

  return (
    <PhoneBookBox>
      <PhonebookTitle>연락처</PhonebookTitle>
      <PhoneBookRowBox>
        <PhoneBookLeftBox>
          <PhoneBookForm onSubmit={addContact}>
            <TextLabel>이름</TextLabel>
            <TextInput onChange={(event) => setName(event.target.value)}></TextInput>
            <TextLabel>전화번호</TextLabel>
            <TextInput onChange={(event) => setPhoneNumber(event.target.value)}></TextInput>
            <PhoneNumberBtn type='submit'>추가</PhoneNumberBtn>
          </PhoneBookForm>
        </PhoneBookLeftBox>
        <PhoneBookRightBox/>
      </PhoneBookRowBox>
    </PhoneBookBox>
  )
}

export default Phonebook