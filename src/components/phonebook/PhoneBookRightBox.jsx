import React from 'react'
import styled from 'styled-components'
import { TextInput } from '../../pages/phonebook/PhonebookPage'
import PhoneListItem from './PhoneListItem'
import { PhoneBookForm } from '../../pages/phonebook/PhonebookPage'
import { useSelector } from 'react-redux'

const SearchBtn = styled.button``
const PhoneBookListBox = styled.div`
  width: 100%;
`
const PhoneBookList = styled.ul``


function PhoneBookRightBox() {
  const contactList = useSelector(state => state.contactList);
  return (
    <div>
      <PhoneBookForm>
            <TextInput></TextInput>
            <SearchBtn>찾기</SearchBtn>
          </PhoneBookForm>
          <PhoneBookListBox>
            <PhoneBookList>
              {contactList.map((item, index) => (<PhoneListItem key={index} item={item} />))}
            </PhoneBookList>
          </PhoneBookListBox>
    </div>
  )
}

export default PhoneBookRightBox