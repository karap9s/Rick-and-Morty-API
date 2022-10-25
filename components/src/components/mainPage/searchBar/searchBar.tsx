import React, { FormEvent, useEffect, useState } from 'react';
import styles from './searchBar.module.css';
import Pic from '../../../assets/icons/1200px-Magnifying_glass_icon.png';
import { SearchProps, TCheckedGender, TCheckedStatus } from 'components/interfaces/interfaces';

const Search: React.FC<SearchProps> = (props: SearchProps) => {
  const [search, setSearch] = useState(localStorage.getItem('search') || '');
  const [type, setType] = useState('name');
  const [gender, setGender] = useState<string>('');
  const [status, setStatus] = useState<string>('');

  const [checkedStatus, setCheckedStatus] = useState<TCheckedStatus>({
    any: true,
    alive: false,
    dead: false,
    unknown: false,
  });
  const [checkedGender, setCheckedGender] = useState<TCheckedGender>({
    any: true,
    male: false,
    female: false,
    genderless: false,
    unknown: false,
  });

  const handlerInput = (event: FormEvent<HTMLInputElement>): void => {
    setSearch(event.currentTarget.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    props.updateData(type, search, status, gender);
  };

  const handleRadioGender = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.value.toLowerCase()) {
      case 'any':
        setGender('');
        setCheckedGender({
          any: true,
          male: false,
          female: false,
          genderless: false,
          unknown: false,
        });
        break;
      case 'male':
        setGender(e.target.value.toLowerCase());
        setCheckedGender({
          any: false,
          male: true,
          female: false,
          genderless: false,
          unknown: false,
        });
        break;
      case 'female':
        setGender(e.target.value.toLowerCase());
        setCheckedGender({
          any: false,
          male: false,
          female: true,
          genderless: false,
          unknown: false,
        });
        break;
      case 'genderless':
        setGender(e.target.value.toLowerCase());
        setCheckedGender({
          any: false,
          male: false,
          female: false,
          genderless: true,
          unknown: false,
        });
        break;
      case 'unknown_second':
        setGender('unknown');
        setCheckedGender({
          any: false,
          male: false,
          female: false,
          genderless: false,
          unknown: true,
        });
        break;
      default:
        break;
    }
  };

  const handleRadioStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.value.toLowerCase()) {
      case 'any':
        setStatus('');
        setCheckedStatus({
          any: true,
          alive: false,
          dead: false,
          unknown: false,
        });
        break;
      case 'alive':
        setStatus(e.target.value.toLowerCase());
        setCheckedStatus({
          any: false,
          alive: true,
          dead: false,
          unknown: false,
        });
        break;
      case 'dead':
        setStatus(e.target.value.toLowerCase());
        setCheckedStatus({
          any: false,
          alive: false,
          dead: true,
          unknown: false,
        });
        break;
      case 'unknown':
        setStatus(e.target.value.toLowerCase());
        setCheckedStatus({
          any: false,
          alive: false,
          dead: false,
          unknown: true,
        });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    localStorage.setItem('search', search);
  });

  useEffect(() => {
    props.updateData(type, search, gender, status);
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.search_form}>
        <div className={styles.status}>
          <h3>Status:</h3>
          <div className={styles.any}>
            <input
              checked={checkedStatus.any}
              type="radio"
              name="status"
              id="any"
              value={'Any'}
              onChange={handleRadioStatus}
            />
            <label htmlFor="any">Any</label>
          </div>
          <div className={styles.dead}>
            <input
              checked={checkedStatus.dead}
              type="radio"
              name="status"
              id="dead"
              value={'Dead'}
              onChange={handleRadioStatus}
            />
            <label htmlFor="dead">Dead</label>
          </div>
          <div className={styles.alive}>
            <input
              checked={checkedStatus.alive}
              type="radio"
              name="status"
              id="alive"
              value={'Alive'}
              onChange={handleRadioStatus}
            />
            <label htmlFor="alive">Alive</label>
          </div>
          <div className={styles.unknown}>
            <input
              checked={checkedStatus.unknown}
              type="radio"
              name="status"
              id="unknown"
              value={'Unknown'}
              onChange={handleRadioStatus}
            />
            <label htmlFor="unknown">Unknown</label>
          </div>
        </div>
        <div className={styles.search_wrapper}>
          <select
            onChange={(event) => {
              setType(event.target.options[event.target.selectedIndex].text.toLowerCase());
            }}
            name="filter"
            id="filter"
          >
            <option value="name">Name</option>
            <option value="species">Species</option>
          </select>
          <input
            className={styles.search}
            type="text"
            placeholder="Search..."
            onChange={handlerInput}
            value={search}
          />
          <button type="submit" className={styles.search_btn}>
            <img src={Pic} alt="button" width={30} />
          </button>
        </div>
        <div className={styles.gender}>
          <h3>Gender:</h3>
          <div className={styles.any}>
            <input
              onChange={handleRadioGender}
              checked={checkedGender.any}
              name="gender"
              id="any"
              type="radio"
              value={'Any'}
            />
            <label htmlFor="any">Any</label>
          </div>
          <div className={styles.male}>
            <input
              checked={checkedGender.male}
              onChange={handleRadioGender}
              name="gender"
              id="male"
              type="radio"
              value={'Male'}
            />
            <label htmlFor="male">Male</label>
          </div>
          <div className={styles.female}>
            <input
              checked={checkedGender.female}
              onChange={handleRadioGender}
              name="gender"
              id="female"
              type="radio"
              value={'Female'}
            />
            <label htmlFor="female">Female</label>
          </div>
          <div className={styles.genderless}>
            <input
              checked={checkedGender.genderless}
              onChange={handleRadioGender}
              name="gender"
              id="genderless"
              type="radio"
              value={'Genderless'}
            />
            <label htmlFor="genderless">Genderless</label>
          </div>
          <div className={styles.unknown}>
            <input
              checked={checkedGender.unknown}
              onChange={handleRadioGender}
              name="gender"
              id="unknown_second"
              type="radio"
              value={'unknown_second'}
            />
            <label htmlFor="Unknown_second">Unknown</label>
          </div>
        </div>
      </form>
    </>
  );
};

export default Search;
