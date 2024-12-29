import moment from 'moment';

export const formatDateTime = (date: string) => {
  var stillUtc = moment.utc(date).toDate();
  var local = moment(stillUtc).local().format('YYYY-MM-DD HH:mm');
  return local;
};
