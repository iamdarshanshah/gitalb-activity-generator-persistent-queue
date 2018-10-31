/* global describe it:true */
const { assert } = require('chai');

const deleteGroup = require('./delete-group-activity.js');
// const assert = require('chai').assert;

const deleteGroupData = {
  method: 'DELETE', path: '/getting-started-group', format: 'html', controller: 'GroupsController', action: 'destroy', status: 302, duration: 15.52, view: 0.0, db: 1.55, location: 'http://localhost:10080/', time: '2018-10-09T06:30:14.400Z', params: [{ key: 'utf8', value: '✓' }, { key: '_method', value: 'delete' }, { key: 'authenticity_token', value: '[FILTERED]' }, { key: 'id', value: 'getting-started-group' }], remote_ip: '172.20.0.1', user_id: 3, username: 'neelanjan', ua: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36',
};
const deleteGroupOutput = {
  '@context': 'https://www.w3.org/ns/activitystreams',
  type: 'DELETE',
  published: '2018-10-09T06:30:14.400Z',
  actor:
    {
      type: 'Person',
      uri: 'localhost:10080/neelanjan',
      name: 'neelanjan',
    },
  object:
    {
      type: 'group',
      uri: 'http://localhost:10080/',
      name: 'getting-started-group',
    },
};

describe('deleteGroupActivity method Test', () => {
  it('should return the output against input', () => {
    const data = {
      '@context': 'https://www.w3.org/ns/activitystreams', type: '', published: '', actor: { type: '', uri: '', name: '' }, object: { type: '', uri: '', name: '' },
    };
    assert.deepEqual(deleteGroup(deleteGroupData, data), deleteGroupOutput);
  });
});
