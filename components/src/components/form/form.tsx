import { IFormCards } from 'components/interfaces/interfaces';
import React, { ChangeEvent, Component, createRef } from 'react';
import List from './countryList';
import styles from './form.module.css';
import FormCards from './formCards';

class Form extends Component<Record<string, never>, IFormCards> {
  storage: IFormCards[];
  i: number;

  nameInput: React.RefObject<HTMLInputElement>;
  surnameInput: React.RefObject<HTMLInputElement>;
  dateInput: React.RefObject<HTMLInputElement>;
  fileInput: React.RefObject<HTMLInputElement>;
  countryInput: React.RefObject<HTMLSelectElement>;
  acceptButton: React.RefObject<HTMLInputElement>;

  constructor(props: Record<string, never>) {
    super(props);

    this.nameInput = createRef();
    this.surnameInput = createRef();
    this.dateInput = createRef();
    this.fileInput = createRef();
    this.countryInput = createRef();
    this.acceptButton = createRef();

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

      disabled: true,
    };

    this.storage = [];
    this.i = 0;

    this.nameHandler.bind(this);
    this.surnameHandler.bind(this);
    this.birthDateHandler.bind(this);
    this.countryHandler.bind(this);
    this.avatarHandler.bind(this);
    this.acceptHandler.bind(this);
    this.submitHandler.bind(this);
  }

  nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 0) {
      this.setState({ disabled: false });
    }
    this.setState({ name: e.target.value });
  };

  surnameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 0) {
      this.setState({ disabled: false });
    }
    this.setState({ surname: e.target.value });
  };

  birthDateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 0) {
      this.setState({ disabled: false });
    }
    this.setState({ birthDate: e.target.value });
  };

  avatarHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 0) {
      this.setState({ disabled: false });
    }
    this.setState({ avatar: e.target.value });
    // const target: (EventTarget & HTMLInputElement) | (EventTarget & HTMLSelectElement) = e.target;
    // const name: string = target.name;
    // const picture: HTMLInputElement | null = this.fileInput.current;

    // if (name === 'file' && picture?.files && picture.files.length) {
    //   this.setState({ disabled: true });
    //   this.setState({ avatar: URL.createObjectURL(picture.files[0]) });
    // }
  };

  countryHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    this.setState({ country: e.target.value });
  };

  acceptHandler = () => {
    this.setState({ accept: !this.state.accept });
  };

  submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (this.state.name.length === 0) {
      this.setState({ nameError: true });
    } else {
      this.setState({ nameError: false });
    }
    if (this.state.surname.length === 0) {
      this.setState({ surnameError: true });
    } else {
      this.setState({ surnameError: false });
    }
    if (this.state.birthDate.length === 0) {
      this.setState({ birthDateError: true });
    } else {
      this.setState({ birthDateError: false });
    }
    if (this.state.avatar.length === 0) {
      this.setState({ avatarError: true });
    } else {
      this.setState({ avatarError: false });
    }
    if (this.state.accept === false) {
      this.setState({ acceptError: true });
    } else {
      this.setState({ acceptError: false });
    }
    if (this.state.name.length > 0 && this.state.surname.length > 0 && this.state.accept === true) {
      this.storage = [...this.storage, this.state];
    }
  };

  render() {
    return (
      <>
        <div className={styles.wrapper}>
          <form action="" onSubmit={this.submitHandler}>
            <section className={styles.form}>
              <div className={`${styles.name} ${styles.block}`}>
                <h2 className={`${styles.name_heading} ${styles.heading}`}>Name</h2>
                <input
                  ref={this.nameInput}
                  type="text"
                  onChange={this.nameHandler}
                  className={`${styles.name_input} ${styles.input}`}
                />
                {this.state.nameError && (
                  <h3 className={styles.error}>You must fill in the Name field</h3>
                )}
              </div>
              <div className={`${styles.surname} ${styles.block}`}>
                <h2 className={`${styles.surname_heading} ${styles.heading}`}>Surname</h2>
                <input
                  ref={this.surnameInput}
                  type="text"
                  onChange={this.surnameHandler}
                  className={`${styles.surname_input} ${styles.input}`}
                />
                {this.state.surnameError && (
                  <h3 className={styles.error}>You must fill in the Surname field</h3>
                )}
              </div>
              <div className={`${styles.birth} ${styles.block}`}>
                <h2 className={`${styles.birth_heading} ${styles.heading}`}>Birth Date</h2>
                <input
                  ref={this.dateInput}
                  type="date"
                  onChange={this.birthDateHandler}
                  className={`${styles.birth_input} ${styles.input}`}
                />
                {this.state.birthDateError && (
                  <h3 className={styles.error}>You must choose your Birth Date</h3>
                )}
              </div>
              <div className={`${styles.avatar} ${styles.block}`}>
                <h2 className={`${styles.avatar_heading} ${styles.heading}`}>Avatar</h2>
                <input
                  ref={this.fileInput}
                  className={styles.avatar_button}
                  onChange={this.avatarHandler}
                  type="file"
                />
                {this.state.avatarError && <h3 className={styles.error}>You must choose Avatar</h3>}
              </div>
              <div className={`${styles.country} ${styles.block}`}>
                <h2 className={`${styles.country_heading} ${styles.heading}`}>
                  Choose your country
                </h2>
                <select
                  ref={this.countryInput}
                  name="country"
                  id="country"
                  onChange={this.countryHandler}
                >
                  <List />
                </select>
                {this.state.countryError && (
                  <h3 className={styles.error}>You must choose your country</h3>
                )}
              </div>
              <div className={`${styles.agreement} ${styles.block}`}>
                <label className={styles.agreement_switch}>
                  <input
                    ref={this.acceptButton}
                    type="checkbox"
                    onClick={this.acceptHandler}
                    className={styles.agreement_checkbox}
                  />
                  <span className={styles.agreement_slider}></span>
                </label>
                <p className={styles.agreement_text}>Accept the agreement</p>
              </div>
              {this.state.acceptError && (
                <h3 className={styles.error}>You must accept the agreement</h3>
              )}
              <button className={styles.submit} disabled={this.state.disabled}>
                Submit
              </button>
            </section>
          </form>
        </div>
        <div className={styles.form_wrapper}>
          {this.storage.length > 0 &&
            this.storage.map((item) => {
              return (
                <FormCards
                  key={this.i++}
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
  }
}

export default Form;
