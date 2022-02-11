import Vue from 'vue'
import moment from 'moment'

function formatDate(date, format, str) {
  console.log(date.getFullYear(),typeof(date),'datedatedatedate')
  if (date) {
    // date
    // if(typeof(date) == 'object' && date._isAMomentObject) {
    //   date = new Date(date).getTime()
    // }
    if(typeof(date) == 'object' && date._isAMomentObject) {
      date = new Date(date).getTime()
    }
    if (String(date).length === 13) {
      return moment(date).format(format);
    } else {
      return moment(date * 1000).format(format);
    }
  }
  return str || '';
}

Vue.filter('formatDate', formatDate)
