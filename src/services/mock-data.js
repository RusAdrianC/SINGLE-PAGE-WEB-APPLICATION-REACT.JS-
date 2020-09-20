const intStream = (n) => Array.from(Array(n).keys());
//string templating

const data = intStream(10).map((index) => ({
  id: index,
  firstName: `Firstname${index}`,
  lastName: `Lastname${index}`,
  functie: `functie${index}`,
}));

const discipline = intStream(9).map((index) => ({
  id: index,
  nume: `Disciplina ${index}`,
}));
const cursuri = intStream(12).map((index) => ({
  id: index,
  nume: `Curs ${index}`,
}));

const laburi = intStream(12).map((index) => ({
  id: index,
  nume: `Laborator ${index}`,
}));

export const getDiscipline = () =>
  new Promise((resolve, reject) =>
    setTimeout(
      () => resolve(discipline),

      300
    )
  );

export const getCursuri = () =>
  new Promise((resolve, reject) =>
    setTimeout(
      () => resolve(cursuri),

      300
    )
  );
export const getLaburi = () =>
  new Promise((resolve, reject) =>
    setTimeout(
      () => resolve(laburi),

      300
    )
  );

const stiri = intStream(12).map((index) => ({
  id: index,
  nume: `Stire ${index}`,
}));

export const getStiri = () =>
  new Promise((resolve, reject) =>
    setTimeout(
      () => resolve(stiri),

      300
    )
  );
