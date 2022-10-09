import { IFormCards } from 'components/interfaces/interfaces';
import React, { Component } from 'react';
import styles from './form.module.css';

class FormCards extends Component<IFormCards> {
  constructor(props: IFormCards) {
    super(props);
  }

  render() {
    return (
      <div className={styles.form}>
        <div className={styles.form_avatar}>
          <h2 className={styles.form_avatar_heading}>Avatar</h2>
          <span className={styles.form_avatar_text}>
            <b className={styles.form_avatar_bold}>{this.props.avatar}</b>
          </span>
        </div>
        <div className={styles.form_name}>
          <h2 className={styles.form_name_heading}>Name</h2>
          <span className={styles.form_name_text}>
            <b>{this.props.name}</b>
          </span>
        </div>
        <div className={styles.form_surname}>
          <h2 className={styles.form_surname_heading}>Surname</h2>
          <span className={styles.form_surname_text}>
            <b>{this.props.surname}</b>
          </span>
        </div>
        <div className={styles.form_birth}>
          <h2 className={styles.form_birth_heading}>Birth</h2>
          <span className={styles.form_birth_text}>
            <b>{this.props.birthDate}</b>
          </span>
        </div>
        <div className={styles.form_country}>
          <h2 className={styles.form_country_heading}>Country</h2>
          <span className={styles.form_country_text}>
            <b>{this.props.country}</b>
          </span>
        </div>
      </div>
    );
  }
}

export default FormCards;
