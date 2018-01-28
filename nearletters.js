var relationshipStore = require('./letterrelationshipstore').relationshipStore;

var rs = new relationshipStore();

rs.registerString('qwertyuiop');
rs.registerString('asdfghjkl');
rs.registerString('zxcvbnm');
rs.registerString('qazxswedcvfrtgbnhyujmkilop');
rs.registerString('plokmnjiuhbvgytfcxdreszawq');

/**
 * Returns an object where the keys are adjacent letters on a qwerty keyboard
 */
exports.getNearTo = rs.getRelated;