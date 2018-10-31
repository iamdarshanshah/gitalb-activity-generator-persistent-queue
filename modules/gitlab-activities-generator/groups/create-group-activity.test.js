/* global describe it:true */
const { assert } = require('chai');
const createGroup = require('./create-group-activity');

const createGroupData = {
  method: 'POST',
  path: '/groups',
  format: 'html',
  controller: 'GroupsController',
  action: 'create',
  status: 302,
  duration: 233.8,
  view: 0.0,
  db: 159.52,
  location: 'http://localhost:10080/getting-started-group',
  time: '2018-10-09T06:27:41.955Z',
  params: [{ key: 'utf8', value: '✓' }, { key: 'authenticity_token', value: '[FILTERED]' }, {
    key: 'group',
    value: {
      parent_id: '', path: 'getting-started-group', name: 'getting-started-group', description: '', visibility_level: '0',
    },
  }],
  remote_ip: '172.20.0.1',
  user_id: 3,
  username: 'neelanjan',
  ua: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36',
};
const createGroupOutput = {
  '@context': 'https://www.w3.org/ns/activitystreams',
  type: 'Create',
  published: '2018-10-09T06:27:41.955Z',
  actor:
    {
      type: 'Person',
      uri: 'http://localhost:10080/neelanjan',
      name: 'neelanjan',
    },
  object:
    {
      type: 'group',
      uri: 'http://localhost:10080/getting-started-group',
      name: 'getting-started-group',
    },
};

describe('createGroupActivity method Test', () => {
  it('should return the output against input', () => {
    const data = {
      '@context': 'https://www.w3.org/ns/activitystreams', type: '', published: '', actor: { type: '', uri: '', name: '' }, object: { type: '', uri: '', name: '' },
    };
    assert.deepEqual(createGroup(createGroupData, data), createGroupOutput);
  });
});
