import moment from 'moment';

export const formatDateTime = (date: Date, format?: string) => {
  var stillUtc = moment.utc(date).toDate();
  var local = moment(stillUtc)
    .local()
    .format(format ?? 'YYYY-MM-DD');
  return local;
};
