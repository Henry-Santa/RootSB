const fs = require('fs');
const events = require('events');
const DrivesUpdated = new events.EventEmitter();

const basic = "[autorun]\n;Open=()\nShellExecute=()\nUseAutoPlay=1";

DrivesUpdated.on('Updated', function(DriveList){
    console.log(DriveList)
}
)

async function getDrives(){
    const drivelist = require('drivelist');
    var list = [];
    const drives = await drivelist.list();
   for (i in drives){
    list = list + drives[i].mountpoints[0].path
   };
   return(list);
}

getDrives().then(drivess => {
    DrivesUpdated.emit('Updated', drivess);
}
)
