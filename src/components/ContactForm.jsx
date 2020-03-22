import React, { useContext } from 'react';
import styled from 'styled-components';
import globals from '../utils/globals';
import { Formik } from 'formik';
import { AppContext } from '../context/appContext';
import selectArrow from '../assets/selectArrow.svg';
import { AnimatePresence, motion } from 'framer-motion';
import emailjs from 'emailjs-com';

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
  min-width: 100%;
  position: absolute;
  left: 50%;
  bottom:-5rem;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%)
  min-height: 2rem;
  margin: 1rem 0rem;
  color: black;
  font-weight: bold;
  padding: 1rem;
  background-color: rgba(223, 42, 42, 0.6);
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

const placeholders = {
  firstName: 'First name',
  lastName: 'Last name',
  email: 'Email address',
  subject: 'Freelance work',
  phone: '0750*******',
  message: 'Write your message here',
  sendBtn: 'Send',
  cancelBtn: 'cancel',
  selectOptions: ['Freelance work', 'Say hi!', 'Feedback'],
};

const ContactForm = ({ display }) => {
  const isObjectEmpty = obj => Object.keys(obj).length === 0;
  const regex = {
    name: /^[A-Za-z\d]{1,15}$/i,
    email: /^([A-Za-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  };

  const info = {
    service: 'default_service',
    template: 'thank_you_for_contacting_me_template',
    userID: 'user_tshCUzSkkbbEc5SZJgFzT',
  };

  const capitalize = s => {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  const {
    showError,
    setContactFormShow,
    setShowError,
    contactFormValues,
    setContactFormValues,
    submitForm,
    setSubmitForm,
  } = useContext(AppContext);
  return (
    <Modal display={display}>
      <FormMother>
        <Formik
          enableReinitialize
          initialValues={{
            firstName: contactFormValues.firstName,
            lastName: contactFormValues.lastName,
            email: contactFormValues.email,
            subject: contactFormValues.subject,
            phone: contactFormValues.phone,
            message: contactFormValues.message,
          }}
          validate={values => {
            const errors = {};
            if (!values.firstName) {
              errors.firstName = 'Please include your first name';
            } else if (!regex.name.test(values.firstName)) {
              errors.firstName = 'Invalid first name';
            }
            if (!values.lastName) {
              errors.lastName = 'Please include your last name';
            } else if (!regex.name.test(values.lastName)) {
              errors.lastName = 'Invalid last name';
            }
            if (!values.email) {
              errors.email = 'Please include an email';
            } else if (!regex.email.test(values.email)) {
              errors.email = 'Invalid email address';
            }
            if (!isObjectEmpty(errors)) {
              setShowError(true);
              setTimeout(() => {
                setShowError(false);
              }, 2000);
            }
            return errors;
          }}
          onSubmit={values => {
            console.log('values', values);
            setContactFormShow(false);
            emailjs
              .send(info.service, info.template, contactFormValues, info.userID)
              .then(
                result => {
                  result.status === 200 &&
                    console.log('Email sent', result.status, result.text);
                },
                err => {
                  console.log('Email failted to send', err);
                },
              );
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
            isSubmitting,
            setSubmitting,
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
                      autoFocus
                      type="text"
                      name="firstName"
                      value={contactFormValues.firstName}
                      onChange={e => {
                        const val = e.target.value;
                        setContactFormValues(prevState => {
                          return {
                            ...prevState,
                            firstName: capitalize(val),
                          };
                        });
                      }}
                      placeholder={placeholders.firstName}
                      autoComplete="off"
                    />
                  </InputWrapperColumn>
                  <InputWrapperColumn>
                    <StyledInput
                      type="text"
                      name="lastName"
                      value={contactFormValues.lastName}
                      onChange={e => {
                        const val = e.target.value;
                        setContactFormValues(prevState => {
                          return {
                            ...prevState,
                            lastName: capitalize(val),
                          };
                        });
                      }}
                      placeholder={placeholders.lastName}
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
                      value={contactFormValues.email}
                      onChange={e => {
                        const val = e.target.value;
                        setContactFormValues(prevState => {
                          return {
                            ...prevState,
                            email: val,
                          };
                        });
                      }}
                      placeholder={placeholders.email}
                      autoComplete="off"
                    />
                  </InputWrapperColumn>
                  <InputWrapperColumn>
                    <TitleHolder>
                      <Title>Phone</Title>
                      <Title>*</Title>
                    </TitleHolder>
                    <StyledInput
                      type="number"
                      name="phone"
                      value={contactFormValues.phone}
                      onChange={e => {
                        const val = e.target.value;
                        setContactFormValues(prevState => {
                          return {
                            ...prevState,
                            phone: val,
                          };
                        });
                      }}
                      placeholder={placeholders.phone}
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
                      value={contactFormValues.subject}
                      onChange={e => {
                        const val = e.target.value;
                        setContactFormValues(prevState => {
                          return {
                            ...prevState,
                            subject: val,
                          };
                        });
                      }}
                    >
                      {placeholders.selectOptions.map(el => {
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
                      rows="5"
                      name="message"
                      placeholder={placeholders.message}
                      value={contactFormValues.message}
                      onChange={e => {
                        const val = e.target.value;
                        setContactFormValues(prevState => {
                          return {
                            ...prevState,
                            message: val,
                          };
                        });
                      }}
                    />
                  </InputWrapperColumn>
                </InputWrapperRow>
                <AnimatePresence>
                  {showError && (
                    <motion.div
                      key="error"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        duration: 0.8,
                        stop: 4,
                      }}
                      exit={{ opacity: 0 }}
                    >
                      <ErrorMsg visible={showError}>
                        {errors.firstName || errors.lastName || errors.email}
                      </ErrorMsg>
                    </motion.div>
                  )}
                </AnimatePresence>
                <ButtonHolder>
                  <FormButton
                    type="button"
                    onClick={() => setContactFormShow(false)}
                  >
                    {placeholders.cancelBtn}
                  </FormButton>
                  <FormButton
                    onSubmit={() => {
                      if (!Object.keys(errors).length) {
                        handleSubmit();
                      }
                    }}
                    type="submit"
                  >
                    {placeholders.sendBtn}
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
