const fs = require('fs')
const drivelist = require('drivelist');

const drives = await drivelist.list();
console.log(drives);

var basic = "[autorun]\n;Open=()\nShellExecute=()\nUseAutoPlay=1"