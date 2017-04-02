/**
 * Created by Administrator on 2017-04-02.
 */
import moment from 'moment';
export function formatDate(date, fmt) {
  return moment(date).format('YYYY-MM-DD HH:mm');
}
