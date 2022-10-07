import React, { Component } from 'react';
import List from './countryList';
import styles from './form.module.css';
// import {
//   nameHandler,
//   surnameHandler,
//   birthDateHandler,
//   countryHandler,
//   acceptHandler,
//   submitHandler,
//   state,
// } from './validation';

class Form extends Component<
  Record<string, never>,
  {
    name: string;
    surname: string;
    birthDate: string;
    avatar: string;
    country: string;
    accept: boolean;

    nameError: boolean;
    surnameError: boolean;
    birthDateError: boolean;
    avatarError: boolean;
    countryError: boolean;
    acceptError: boolean;
  }
> {
  constructor(props: Record<string, never>) {
    super(props);

    this.state = {
      name: '',
      surname: '',
      birthDate: '',
      avatar: '',
      country: '',
      accept: false,

      nameError: false,
      surnameError: false,
      birthDateError: false,
      avatarError: false,
      countryError: false,
      acceptError: false,
    };
  }

  nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ name: e.target.value });
  };

  surnameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ surname: e.target.value });
  };

  birthDateHandler = (e: HTMLInputElement) => {
    this.setState({ birthDate: e.value });
  };

  avatarHandler = (e: HTMLInputElement) => {
    this.setState({ avatar: e.value });
  };

  countryHandler = (e: HTMLSelectElement) => {
    this.setState({ country: e.value });
  };

  acceptHandler = () => {
    this.setState({ accept: !this.state.accept });
  };

  submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (this.state.name.length === 0) {
      this.setState({ nameError: true });
    }
    if (this.state.surname.length === 0) {
      this.setState({ surnameError: true });
    }
    if (this.state.birthDate.length === 0) {
      this.setState({ birthDateError: true });
    }
    if (this.state.avatar.length === 0) {
      this.setState({ avatarError: true });
    }
    if (this.state.accept === false) {
      this.setState({ acceptError: true });
    }
  };

  render() {
    return (
      <>
        <div className={styles.wrapper}>
          <form action="" onSubmit={this.submitHandler.bind(this)}>
            <section className={styles.form}>
              <div className={`${styles.name} ${styles.block}`}>
                <h2 className={`${styles.name_heading} ${styles.heading}`}>Name</h2>
                <input
                  type="text"
                  onChange={this.nameHandler.bind(this)}
                  className={`${styles.name_input} ${styles.input}`}
                />
                {this.state.nameError && (
                  <h3 className={styles.error}>You must fill in the Name field</h3>
                )}
              </div>
              <div className={`${styles.surname} ${styles.block}`}>
                <h2 className={`${styles.surname_heading} ${styles.heading}`}>Surname</h2>
                <input
                  type="text"
                  onChange={this.surnameHandler.bind(this)}
                  className={`${styles.surname_input} ${styles.input}`}
                />
                {this.state.surnameError && (
                  <h3 className={styles.error}>You must fill in the Surname field</h3>
                )}
              </div>
              <div className={`${styles.birth} ${styles.block}`}>
                <h2 className={`${styles.birth_heading} ${styles.heading}`}>Birth Date</h2>
                <input
                  type="date"
                  onChange={() => this.birthDateHandler.bind(this)}
                  className={`${styles.birth_input} ${styles.input}`}
                />
                {this.state.birthDateError && (
                  <h3 className={styles.error}>You must choose your Birth Date</h3>
                )}
              </div>
              <div className={`${styles.avatar} ${styles.block}`}>
                <h2 className={`${styles.avatar_heading} ${styles.heading}`}>Avatar</h2>
                <input
                  className={styles.avatar_button}
                  onChange={() => this.avatarHandler.bind(this)}
                  type="file"
                />
                {this.state.avatarError && <h3 className={styles.error}>You must choose Avatar</h3>}
              </div>
              <div className={`${styles.country} ${styles.block}`}>
                <h2 className={`${styles.country_heading} ${styles.heading}`}>
                  Choose your country
                </h2>
                <select name="country" id="country">
                  <List />
                </select>
                {this.state.countryError && (
                  <h3 className={styles.error}>You must choose your country</h3>
                )}
              </div>
              <div className={`${styles.agreement} ${styles.block}`}>
                <label className={styles.agreement_switch}>
                  <input
                    type="checkbox"
                    onClick={this.acceptHandler.bind(this)}
                    className={styles.agreement_checkbox}
                  />
                  <span className={styles.agreement_slider}></span>
                </label>
                <p className={styles.agreement_text}>Accept the agreement</p>
              </div>
              {this.state.acceptError && (
                <h3 className={styles.error}>You must accept agreement</h3>
              )}
              <button className={styles.submit}>Submit</button>
            </section>
          </form>
        </div>
      </>
    );
  }
}

export default Form;
