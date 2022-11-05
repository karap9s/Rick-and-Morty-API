import { IFormCards, IReducer } from 'components/interfaces/interfaces';
import React, { useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  countIncrement,
  setAccept,
  setAcceptError,
  setAvatarError,
  setBirthError,
  setDisabled,
  setNameError,
  setStorage,
  setSurnameError,
} from '../redux/formSlice';
import List from './countryList';
import styles from './form.module.css';
import FormCards from './formCards';

const Form: React.FC = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const surnameRef = useRef<HTMLInputElement>(null);
  const birthRef = useRef<HTMLInputElement>(null);
  const avatarRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLSelectElement>(null);

  const accept = useAppSelector((state: IReducer) => state.form.accept);
  const disabled = useAppSelector((state: IReducer) => state.form.disabled);
  const count = useAppSelector((state: IReducer) => state.form.count);
  const storage = useAppSelector((state: IReducer) => state.form.storage);
  const nameError = useAppSelector((state: IReducer) => state.form.nameError);
  const surnameError = useAppSelector((state: IReducer) => state.form.surnameError);
  const birthError = useAppSelector((state: IReducer) => state.form.birthError);
  const avatarError = useAppSelector((state: IReducer) => state.form.avatarError);
  const acceptError = useAppSelector((state: IReducer) => state.form.acceptError);

  const dispatch = useAppDispatch();

  const nameHandler = (): void => {
    if (nameRef !== null) {
      dispatch(setDisabled(false));
    }
  };

  const surnameHandler = (): void => {
    if (surnameRef !== null) {
      dispatch(setDisabled(false));
    }
  };

  const birthHandler = (): void => {
    if (birthRef !== null) {
      dispatch(setDisabled(false));
    }
  };

  const avatarHandler = (): void => {
    if (avatarRef !== null) {
      dispatch(setDisabled(false));
    }
  };

  const countryHandler = (): void => {
    if (countryRef !== null) {
      dispatch(setDisabled(false));
    }
  };

  const acceptHandler = (): void => {
    dispatch(setAccept(!accept));
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (nameRef.current?.value.length === 0) {
      dispatch(setNameError(true));
    } else {
      dispatch(setNameError(false));
    }
    if (surnameRef.current?.value.length === 0) {
      dispatch(setSurnameError(true));
    } else {
      dispatch(setSurnameError(false));
    }
    if (birthRef.current?.value.length === 0) {
      dispatch(setBirthError(true));
    } else {
      dispatch(setBirthError(false));
    }
    if (avatarRef.current?.value.length === 0) {
      dispatch(setAvatarError(true));
    } else {
      dispatch(setAvatarError(false));
    }
    if (accept === false) {
      dispatch(setAcceptError(true));
    } else {
      dispatch(setAcceptError(false));
    }
    if (
      nameRef.current?.value.length !== 0 &&
      surnameRef.current?.value.length !== 0 &&
      accept === true
    ) {
      dispatch(
        setStorage([
          ...storage,
          {
            name: nameRef.current?.value,
            surname: surnameRef.current?.value,
            birthDate: birthRef.current?.value,
            avatar: avatarRef.current?.value,
            country: countryRef.current?.value,
            key: count.toString(),
          } as IFormCards,
        ])
      );
      dispatch(countIncrement());

      if (
        nameRef.current?.value &&
        surnameRef.current?.value &&
        birthRef.current?.value &&
        avatarRef.current?.value &&
        countryRef.current?.value
      ) {
        nameRef.current.value = '';
        surnameRef.current.value = '';
        birthRef.current.value = '';
        avatarRef.current.value = '';
        countryRef.current.value = '';
      }
    }
  };

  return (
    <>
      <div className={styles.wrapper}>
        <form action="" onSubmit={submitHandler}>
          <section className={styles.form}>
            <div className={`${styles.name} ${styles.block}`}>
              <h2 className={`${styles.name_heading} ${styles.heading}`}>Name</h2>
              <input
                ref={nameRef}
                type="text"
                onChange={nameHandler}
                className={`${styles.name_input} ${styles.input}`}
              />
              {nameError && <h3 className={styles.error}>You must fill in the Name field</h3>}
            </div>
            <div className={`${styles.surname} ${styles.block}`}>
              <h2 className={`${styles.surname_heading} ${styles.heading}`}>Surname</h2>
              <input
                ref={surnameRef}
                type="text"
                onChange={surnameHandler}
                className={`${styles.surname_input} ${styles.input}`}
              />
              {surnameError && <h3 className={styles.error}>You must fill in the Surname field</h3>}
            </div>
            <div className={`${styles.birth} ${styles.block}`}>
              <h2 className={`${styles.birth_heading} ${styles.heading}`}>Birth Date</h2>
              <input
                ref={birthRef}
                type="date"
                onChange={birthHandler}
                className={`${styles.birth_input} ${styles.input}`}
              />
              {birthError && <h3 className={styles.error}>You must choose your Birth Date</h3>}
            </div>
            <div className={`${styles.avatar} ${styles.block}`}>
              <h2 className={`${styles.avatar_heading} ${styles.heading}`}>Avatar</h2>
              <input
                ref={avatarRef}
                className={styles.avatar_button}
                onChange={avatarHandler}
                type="file"
              />
              {avatarError && <h3 className={styles.error}>You must choose Avatar</h3>}
            </div>
            <div className={`${styles.country} ${styles.block}`}>
              <h2 className={`${styles.country_heading} ${styles.heading}`}>Choose your country</h2>
              <select ref={countryRef} name="country" id="country" onChange={countryHandler}>
                <List />
              </select>
            </div>
            <div className={`${styles.agreement} ${styles.block}`}>
              <label className={styles.agreement_switch}>
                <input
                  type="checkbox"
                  onClick={acceptHandler}
                  className={styles.agreement_checkbox}
                />
                <span className={styles.agreement_slider}></span>
              </label>
              <p className={styles.agreement_text}>Accept the agreement</p>
            </div>
            {acceptError && <h3 className={styles.error}>You must accept the agreement</h3>}
            <button className={styles.submit} disabled={disabled}>
              Submit
            </button>
          </section>
        </form>
      </div>
      <div className={styles.form_wrapper}>
        {storage.length &&
          storage.map((item) => {
            return (
              <FormCards
                key={item.key}
                name={item.name}
                surname={item.surname}
                birthDate={item.birthDate}
                avatar={item.avatar}
                country={item.country}
              />
            );
          })}
      </div>
    </>
  );
};

export default Form;
