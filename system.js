var os = require('os');
var msg = 'System INFO: ';
var sysarray = new Array(
				'Type         : ' + os.type(),
				'Node Version : ' + process.version,
				'Platform     : ' + os.platform(),
				'Hostname     : ' + os.hostname(),
				'Total Mem    : ' + os.totalmem(),
				'Free Mem     : ' + os.freemem(),
				'Uptime       : ' + os.uptime()
				);
console.log(msg);
var arraylength = sysarray.length;
var i = 0;
while(i<arraylength) {
	console.log(sysarray[i]);
	i++;
}