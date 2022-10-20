import { IFormCards } from 'components/interfaces/interfaces';
import React, { useRef, useState } from 'react';
import List from './countryList';
import styles from './form.module.css';
import FormCards from './formCards';

const Form: React.FC = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const surnameRef = useRef<HTMLInputElement>(null);
  const birthRef = useRef<HTMLInputElement>(null);
  const avatarRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLSelectElement>(null);

  const [accept, setAccept] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [count, setCount] = useState(0);
  const [storage, setStorage] = useState<IFormCards[]>([] as IFormCards[]);

  const [nameError, setNameError] = useState(false);
  const [surnameError, setSurnameError] = useState(false);
  const [birthError, setBirthError] = useState(false);
  const [avatarError, setAvatarError] = useState(false);
  const [acceptError, setAcceptError] = useState(false);

  const nameHandler = () => {
    if (nameRef !== null) {
      setDisabled(false);
    }
  };

  const surnameHandler = () => {
    if (surnameRef !== null) {
      setDisabled(false);
    }
  };

  const birthHandler = () => {
    if (birthRef !== null) {
      setDisabled(false);
    }
  };

  const avatarHandler = () => {
    if (avatarRef !== null) {
      setDisabled(false);
    }
  };

  const countryHandler = () => {
    if (countryRef !== null) {
      setDisabled(false);
    }
  };

  const acceptHandler = () => {
    setAccept(!accept);
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (nameRef.current?.value.length === 0) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    if (surnameRef.current?.value.length === 0) {
      setSurnameError(true);
    } else {
      setSurnameError(false);
    }
    if (birthRef.current?.value.length === 0) {
      setBirthError(true);
    } else {
      setBirthError(false);
    }
    if (avatarRef.current?.value.length === 0) {
      setAvatarError(true);
    } else {
      setAvatarError(false);
    }
    if (accept === false) {
      setAcceptError(true);
    } else {
      setAcceptError(false);
    }
    if (
      nameRef.current?.value.length !== 0 &&
      surnameRef.current?.value.length !== 0 &&
      accept === true
    ) {
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
      ]);
      setCount(count + 1);

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
        {storage.length > 0 &&
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
