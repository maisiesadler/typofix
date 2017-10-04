var relationshipStore = require('./letterrelationshipstore').relationshipStore;

var rs = new relationshipStore();

rs.registerString('qwertyuiop');
rs.registerString('asdfghjkl');
rs.registerString('zxcvbnm');
rs.registerString('qazxswedcvfrtgbnhyujmkilop');
rs.registerString('plokmnjiuhbvgytfcxdreszawq');

// var isNear = function (l1, l2) {
//     validateChars(l1, l2);

//     var nearl1 = near[l1];
//     if (nearl1 == null)
//         return false;
//     return nearl1[l2] === true;
// };


exports.getNearTo = rs.getRelated;