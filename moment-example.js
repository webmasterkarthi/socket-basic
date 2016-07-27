var moment=require('moment');
var now=moment();

// console.log(now.format());

// now.subtract(1,'year');
// console.log(now.format());
// console.log(now.format('MM Do YYYY, h:mma'));

var timestamp=1469643135;
var timestampMoment=moment.utc(timestamp);
console.log(timestampMoment.local().format('h:mm a'));