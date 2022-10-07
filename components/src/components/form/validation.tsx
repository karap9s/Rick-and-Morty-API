export const state = {
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

export const nameHandler = (e: HTMLInputElement) => {
  state.name = e.value;
};

export const surnameHandler = (e: HTMLInputElement) => {
  state.surname = e.value;
};

export const birthDateHandler = (e: HTMLInputElement) => {
  state.birthDate = e.value;
};

export const countryHandler = (e: HTMLSelectElement) => {
  state.country = e.value;
};

export const acceptHandler = () => {
  state.accept = !state.accept;
};

export const submitHandler = () => {
  if (state.name.length > 0) {
    state.nameError = true;
  }
  if (state.surname.length > 0) {
    state.surnameError = true;
  }
  if (state.birthDate.length > 0) {
    state.birthDateError = true;
  }
  if (state.avatar.length > 0) {
    state.avatarError = true;
  }
  if (state.accept === false) {
    state.acceptError = true;
  }
};
