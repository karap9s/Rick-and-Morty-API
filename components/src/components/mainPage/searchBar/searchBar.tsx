import React, { FormEvent, useEffect, useState } from 'react';
import styles from './searchBar.module.css';
import Pic from '../../../assets/icons/1200px-Magnifying_glass_icon.png';
import { TCheckedGender, TCheckedStatus } from 'components/interfaces/interfaces';
import { useAppDispatch } from '../../../hooks';
import { setGender, setName, setStatus, setType } from '../../redux/mainSlice';

const Search: React.FC = () => {
  const [search, setSearch] = useState(localStorage.getItem('search') || '');
  const dispatch = useAppDispatch();

  const [checkedStatus, setCheckedStatus] = useState<TCheckedStatus>(
    JSON.parse(
      localStorage.getItem('checkedStatus') ||
        JSON.stringify({
          any: true,
          alive: false,
          dead: false,
          unknown: false,
        })
    )
  );

  const [checkedGender, setCheckedGender] = useState<TCheckedGender>(
    JSON.parse(
      localStorage.getItem('checkedGender') ||
        JSON.stringify({
          any: true,
          male: false,
          female: false,
          genderless: false,
          unknown: false,
        })
    )
  );

  const handlerInput = (event: FormEvent<HTMLInputElement>): void => {
    setSearch(event.currentTarget.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    dispatch(setName(search));
  };

  const handleRadioGender = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.value.toLowerCase()) {
      case 'any':
        dispatch(setGender(''));
        setCheckedGender({
          any: true,
          male: false,
          female: false,
          genderless: false,
          unknown: false,
        });
        break;
      case 'male':
        dispatch(setGender(e.target.value.toLowerCase()));
        setCheckedGender({
          any: false,
          male: true,
          female: false,
          genderless: false,
          unknown: false,
        });
        break;
      case 'female':
        dispatch(setGender(e.target.value.toLowerCase()));
        setCheckedGender({
          any: false,
          male: false,
          female: true,
          genderless: false,
          unknown: false,
        });
        break;
      case 'genderless':
        dispatch(setGender(e.target.value.toLowerCase()));
        setCheckedGender({
          any: false,
          male: false,
          female: false,
          genderless: true,
          unknown: false,
        });
        break;
      case 'unknown_second':
        dispatch(setGender('unknown'));
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
        dispatch(setStatus(''));
        setCheckedStatus({
          any: true,
          alive: false,
          dead: false,
          unknown: false,
        });
        break;
      case 'alive':
        dispatch(setStatus(e.target.value.toLowerCase()));
        setCheckedStatus({
          any: false,
          alive: true,
          dead: false,
          unknown: false,
        });
        break;
      case 'dead':
        dispatch(setStatus(e.target.value.toLowerCase()));
        setCheckedStatus({
          any: false,
          alive: false,
          dead: true,
          unknown: false,
        });
        break;
      case 'unknown':
        dispatch(setStatus(e.target.value.toLowerCase()));
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
    localStorage.setItem('checkedGender', JSON.stringify(checkedGender));
    localStorage.setItem('checkedStatus', JSON.stringify(checkedStatus));
  });

  useEffect(() => {
    dispatch(setName(search));
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
              dispatch(
                setType(event.target.options[event.target.selectedIndex].text.toLowerCase())
              );
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
