const { Tail } = require('tail');
let Client = require('act-streams-client');
const { ip } = require('./config.js');
const client = new Client(ip);
var Queue = require('node-persistent-queue');
var q = new Queue('./sql-lite/sqllite.db');

const createActStream = require('./modules/activity-generator-controller');

const tail = new Tail('./log-files/production_json.log');

console.log('docker-running');


q.on('open', function () {
  console.log('Opening SQLite DB');
  console.log('Queue contains ' + q.getLength() + ' job/s');
});


q.on('add', function (task) {
  console.log('Adding task: ' + JSON.stringify(task));
  console.log('Queue contains ' + q.getLength() + ' job/s');

});


q.on('delete', function (task) {
  console.log('deleting task: ' + JSON.stringify(task));
  console.log('Queue contains ' + q.getLength() + ' job/s');

});



q.on('start', function () {
  console.log('Starting queue');
});

q.on('next', function (task) {
  console.log('Queue contains ' + q.getLength() + ' job/s');
  console.log('Process task: ');
  console.log(JSON.stringify(task));


  console.log(`in next----------------------------------------------------\n`);

  client.push('activities', task, (ack) => { q.done() });

  q.done();

  // Must tell Queue that we have finished this task
  // This call will schedule the next task (if there is one)

});


//opening queue
q.open()
  .then(function () {
    //client.on
    //performing operations after receiving ready event from server
    //Streaming Log File Data
    tail.on('line', (data) => {
      const activity = createActStream(JSON.parse(data));
      console.log('activity\n', activity);
      // client.push('activities', activity);
      if (activity !== undefined) {
        q.add(activity)
          .start(activity)
      }
    })
    // error handling
    tail.on('error', error => error);
  })
  .catch(function (err) {
    console.log('Error occurred:');
    console.log(err);
    process.exit(1);
  });


console.log(require('./configure.json').access_token);
client.configure(require('./configure.json').access_token);