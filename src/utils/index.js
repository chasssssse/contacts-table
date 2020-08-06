import moment from 'moment';

export const getAge = (birthDate) => moment().year() - moment(birthDate).year()