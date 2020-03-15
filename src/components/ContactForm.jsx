import React, { useContext } from 'react';
import styled from 'styled-components';
import globals from '../utils/globals';
import { Formik } from 'formik';
import { AppContext } from '../context/appContext';
import selectArrow from '../assets/selectArrow.svg';

const { flex } = globals;

const Modal = styled.div`
  ${flex('center', 'center')}
  height:100vh;
  width: 100vw;
  background: rgba(48, 43, 43, 0.7);
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  visibility: visible;
`;

const FormMother = styled.div`
  ${flex('flex-start', 'flex-start', 'column')}
  background: white;
  border-radius: 5px;
  height: auto;
  width: auto;
  padding: 2rem;
  position: relative;
`;

const Title = styled.p`
  font-size: 1rem;
  font-weight: bold;
  & + & {
    color: red;
    vertical-align: super;
    font-size: smaller;
  }
`;

const InputWrapperColumn = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  & + & {
    margin-left: 1rem;
  }
`;

const InputWrapperRow = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  & + & {
    margin-top: 1rem;
  }
`;

const StyledInput = styled.input`
  text-align: left;
  width: 100%;
  border-radius: 5px;
  padding: 0.5rem;
  font-size: 1rem;
`;

const StyledForm = styled.form`
  ${flex('space-around', 'center', 'column')}
  text-align: center;
  height: 100%;
  width: 100%;
`;

const ErrorMsg = styled.div`
  position: absolute;
  top: -80px;
  width: 100%;
  min-height: 2rem;
  margin: 1rem 0rem;
  color: black;
  font-weight: bold;
  padding: 1rem;
  background-color: rgba(223, 42, 42, 0.8);
  font-size: 1rem;
  border-radius: 5px;
  text-align: center;
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
`;

const ButtonHolder = styled.div`
  ${flex('space-around', 'center')}
  height: auto;
  width: 100%;
  margin-top: 1rem;
`;

const TitleHolder = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
`;

const FormButton = styled.button`
  min-width: 5rem;
  border-radius: 5px;
  color: white;
  background: black;
  font-size: 1rem;
  border: 1px solid transparent;
  padding: 0.5rem;
  box-shadow: 0 4px lightGray;
  &:hover {
    color: black;
    background: white;
    border: 1px solid black;
    cursor: pointer;
  }
  &:active {
    box-shadow: 0 0px #666;
    transform: translateY(4px);
  }
`;

const SubjectSelect = styled.select`
  position: relative;
  width: 100%;
  border: 1px solid green;
  padding: 0.5rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-image: url(${selectArrow});
  background-repeat: no-repeat;
  background-position: right;
  background-size: 10% 70%;
  border: 1px solid black;
  outline: none;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    border: 1px solid green;
  }
`;

const SubjectTextArea = styled.textarea`
  width: 100%;
  min-height: 5rem;
  overflow: scroll;
  border: 1px solid black;
  resize: none;
  padding: 0.5rem;
  &:hover {
    cursor: text;
  }
  &:focus {
    border: 1px solid green;
  }
`;

const initValues = {
  firstName: 'First name',
  lastName: 'Last name',
  email: 'Email address',
  subject: 'Freelance work',
  phone: 'eg. 07506681217',
  message: '',
  sendBtn: 'Send',
  cancelBtn: 'cancel',
  selectOptions: ['Freelance work', 'Say hi!', 'Feedback'],
};

const ContactForm = ({ display }) => {
  const { setContactFormShow, showError, setShowError } = useContext(
    AppContext,
  );
  return (
    <Modal display={display}>
      <FormMother>
        <Formik
          enableReinitialize
          initialValues={{
            firstName: initValues.firstName,
            lastName: initValues.lastName,
            email: initValues.email,
            subject: initValues.subject,
            phone: initValues.phone,
            message: initValues.message,
          }}
          validate={values => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            setShowError(true);
            return errors;
          }}
          onSubmit={values => {
            console.log('submitting values', values);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
            isSubmitting,
          }) => (
            <>
              <StyledForm onSubmit={handleSubmit}>
                <InputWrapperRow>
                  <InputWrapperColumn>
                    <TitleHolder>
                      <Title>Name</Title>
                      <Title>*</Title>
                    </TitleHolder>

                    <StyledInput
                      type="text"
                      name="firstName"
                      onChange={handleChange}
                      placeholder={values.firstName}
                      autoComplete="off"
                    />
                  </InputWrapperColumn>
                  <InputWrapperColumn>
                    <StyledInput
                      type="text"
                      name="lastName"
                      onChange={handleChange}
                      placeholder={values.lastName}
                      autoComplete="off"
                    />
                  </InputWrapperColumn>
                </InputWrapperRow>
                <InputWrapperRow>
                  <InputWrapperColumn>
                    <TitleHolder>
                      <Title>Email</Title>
                      <Title>*</Title>
                    </TitleHolder>
                    <StyledInput
                      type="email"
                      name="email"
                      onChange={handleChange}
                      placeholder={values.email}
                      autoComplete="off"
                    />
                  </InputWrapperColumn>
                  <InputWrapperColumn>
                    <TitleHolder>
                      <Title>Phone</Title>
                      <Title>*</Title>
                    </TitleHolder>
                    <StyledInput
                      type="phone"
                      name="phone"
                      onChange={handleChange}
                      placeholder={values.phone}
                      autoComplete="off"
                    />
                  </InputWrapperColumn>
                </InputWrapperRow>
                <InputWrapperRow>
                  <InputWrapperColumn>
                    <TitleHolder>
                      <Title>Message subject</Title>
                      <Title>*</Title>
                    </TitleHolder>
                    <SubjectSelect
                      onChange={e => (values.subject = e.target.value)}
                    >
                      {initValues.selectOptions.map(el => {
                        if (el === 'Freelance work') {
                          return <option selected="selected">{el}</option>;
                        } else {
                          return <option>{el}</option>;
                        }
                      })}
                    </SubjectSelect>
                  </InputWrapperColumn>
                </InputWrapperRow>
                <InputWrapperRow>
                  <InputWrapperColumn>
                    <TitleHolder>
                      <Title>Message</Title>
                      <Title>*</Title>
                    </TitleHolder>
                    <SubjectTextArea
                      cols="30"
                      rows="4"
                      name="message"
                      placeholder="Write your message here"
                      onChange={e => (values.message = e.target.value)}
                    />
                  </InputWrapperColumn>
                </InputWrapperRow>
                {/* <ErrorMsg visible={showError}>
                  {errors.email && touched.email && errors.email}
                </ErrorMsg> */}
                <ButtonHolder>
                  <FormButton
                    type="button"
                    onClick={() => setContactFormShow(false)}
                  >
                    {initValues.cancelBtn}
                  </FormButton>
                  <FormButton
                    onClick={() => {
                      console.log('form submitted successfully');
                      // setContactFormShow(false);

                      // setTimeout(() => {
                      //   setShowError(false);
                      // }, 2000);
                    }}
                    type="submit"
                  >
                    {initValues.sendBtn}
                  </FormButton>
                </ButtonHolder>
              </StyledForm>
            </>
          )}
        </Formik>
      </FormMother>
    </Modal>
  );
};

export default ContactForm;
