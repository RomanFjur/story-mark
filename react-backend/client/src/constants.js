import moment from 'moment';

let dateArr = [];
for (let i = 29; i >= 0; i--) {
  dateArr.push(moment().subtract(i, 'days').format('D'));
}

const dateRegObj = [
  {"dateArr": dateArr[0], "users": 4},
  {"dateArr": dateArr[1], "users": 5},
  {"dateArr": dateArr[2], "users": 1},
  {"dateArr": dateArr[3], "users": 13},
  {"dateArr": dateArr[4], "users": 10},
  {"dateArr": dateArr[5], "users": 9},
  {"dateArr": dateArr[6], "users": 2},
  {"dateArr": dateArr[7], "users": 1},
  {"dateArr": dateArr[8], "users": 2},
  {"dateArr": dateArr[9], "users": 12},
  {"dateArr": dateArr[10], "users": 11},
  {"dateArr": dateArr[11], "users": 15},
  {"dateArr": dateArr[12], "users": 7},
  {"dateArr": dateArr[13], "users": 11},
  {"dateArr": dateArr[14], "users": 8},
  {"dateArr": dateArr[15], "users": 10},
  {"dateArr": dateArr[16], "users": 14},
  {"dateArr": dateArr[17], "users": 7},
  {"dateArr": dateArr[18], "users": 6},
  {"dateArr": dateArr[19], "users": 14},
  {"dateArr": dateArr[20], "users": 14},
  {"dateArr": dateArr[21], "users": 3},
  {"dateArr": dateArr[22], "users": 6},
  {"dateArr": dateArr[23], "users": 15},
  {"dateArr": dateArr[24], "users": 9},
  {"dateArr": dateArr[25], "users": 5},
  {"dateArr": dateArr[26], "users": 12},
  {"dateArr": dateArr[27], "users": 10},
  {"dateArr": dateArr[28], "users": 1},
  {"dateArr": dateArr[29], "users": 2}
];

const labels = [
  dateRegObj[0].dateArr, 
  dateRegObj[1].dateArr,
  dateRegObj[2].dateArr,
  dateRegObj[4].dateArr, 
  dateRegObj[5].dateArr,
  dateRegObj[6].dateArr,
  dateRegObj[7].dateArr, 
  dateRegObj[8].dateArr,
  dateRegObj[9].dateArr,
  dateRegObj[10].dateArr, 
  dateRegObj[11].dateArr,
  dateRegObj[12].dateArr,
  dateRegObj[13].dateArr, 
  dateRegObj[14].dateArr,
  dateRegObj[15].dateArr,
  dateRegObj[16].dateArr, 
  dateRegObj[17].dateArr,
  dateRegObj[18].dateArr,
  dateRegObj[19].dateArr, 
  dateRegObj[20].dateArr,
  dateRegObj[21].dateArr,
  dateRegObj[22].dateArr, 
  dateRegObj[23].dateArr,
  dateRegObj[24].dateArr,
  dateRegObj[25].dateArr,
  dateRegObj[26].dateArr,
  dateRegObj[27].dateArr, 
  dateRegObj[28].dateArr,
  dateRegObj[29].dateArr
];

const datas = [
  dateRegObj[0].users, 
  dateRegObj[1].users,
  dateRegObj[2].users,
  dateRegObj[4].users, 
  dateRegObj[5].users,
  dateRegObj[6].users,
  dateRegObj[7].users, 
  dateRegObj[8].users,
  dateRegObj[9].users,
  dateRegObj[10].users, 
  dateRegObj[11].users,
  dateRegObj[12].users,
  dateRegObj[13].users, 
  dateRegObj[14].users,
  dateRegObj[15].users,
  dateRegObj[16].users, 
  dateRegObj[17].users,
  dateRegObj[18].users,
  dateRegObj[19].users, 
  dateRegObj[20].users,
  dateRegObj[21].users,
  dateRegObj[22].users, 
  dateRegObj[23].users,
  dateRegObj[24].users,
  dateRegObj[25].users,
  dateRegObj[26].users,
  dateRegObj[27].users, 
  dateRegObj[28].users,
  dateRegObj[29].users
];

const months = [
  moment().subtract(2, 'months').subtract(moment().date() - 1, 'days').format('MMMM'), 
  moment().subtract(1, 'months').subtract(moment().date() - 1, 'days').format('MMMM'), 
  moment().subtract(0, 'months').subtract(moment().date() - 1, 'days').format('MMMM')
];

const monthPostsObj = [
  {"month": months[0], "posts": 57},
  {"month": months[1], "posts": 34},
  {"month": months[2], "posts": 13}
];

const monthsLabels = [
  monthPostsObj[0].month,
  monthPostsObj[1].month,
  monthPostsObj[2].month
];

const monthsDatas = [
  monthPostsObj[0].posts,
  monthPostsObj[1].posts,
  monthPostsObj[2].posts
];

export {labels, datas, monthsLabels, monthsDatas};