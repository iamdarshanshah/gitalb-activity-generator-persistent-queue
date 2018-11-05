const { Tail } = require('tail');
let Client = require('act-streams-client');
const { ip } = require('./config.js');
const client = new Client(ip,'./sql-lite/sqllite.db');

const createActStream = require('./modules/activity-generator-controller');

const tail = new Tail('./log-files/production_json.log');

console.log('docker-running');

//Emitted when the sqlite database has been opened successfully (after calling .open() method)
client.on('open', function () {
  console.log('Opening SQLite DB');
  console.log('Queue contains ' + client.queueLength() + ' job/s');
});

//Emitted when a task has been added to the queue (after calling .add() method)
client.on('add', function (task) {
  console.log('Adding task: ' + JSON.stringify(task));
  console.log('Queue contains ' + client.queueLength() + ' job/s');

});

//Emitted when the queue starts processing tasks (after calling .start() method)
client.on('start', function () {
  console.log('Starting queue');
});

//Emitted when the next task is to be executed.
client.on('next', function (task) {
  console.log('Queue contains ' + client.queueLength() + ' job/s');
  console.log('Process task: ');
  console.log(JSON.stringify(task));

  console.log(`in next----------------------------------------------------\n`);

  client.push('activities', task, (ack) => {
    if (ack === 'received') {
      // tell Queue that we have finished this task
      // This call will schedule the next task (if there is one)
      client.done();
    }
  });

});

//opening queue
client.openQueue()
  .then(function () {
    //Streaming Log File Data
    tail.on('line', (data) => {
      const activity = createActStream(JSON.parse(data));
      console.log('activity\n', activity);
      // client.push('activities', activity);
      if (activity !== undefined) {
        client.addToQueue(activity);
        client.startQueue(activity);
      }
    })
    // error handling
    tail.on('error', error => error);
  })
  .catch(function (err) { //error handling
    console.log('Error occurred:');
    console.log(err);
    process.exit(1);
  });

//sending token to the server
console.log(require('./configure.json').access_token);
client.configure(require('./configure.json').access_token);