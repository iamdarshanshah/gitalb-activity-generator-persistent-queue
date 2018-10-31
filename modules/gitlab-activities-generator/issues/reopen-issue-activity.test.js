/* global describe it:true */

const { assert } = require('chai');
const closeIssue = require('./reopen-issue-activity');
// const assert = require('chai').assert;

const reopenIssueData = {
  method: 'PUT', path: '/neelanjan/getting-started/issues/1.json', format: 'json', controller: 'Projects::IssuesController', action: 'update', status: 200, duration: 102.26, view: 0.43, db: 23.63, time: '2018-10-09T06:17:36.306Z', params: [{ key: 'issue', value: { state_event: 'reopen' } }, { key: 'namespace_id', value: 'neelanjan' }, { key: 'project_id', value: 'getting-started' }, { key: 'id', value: '1' }], remote_ip: '172.20.0.1', user_id: 3, username: 'neelanjan', ua: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36', gitaly_calls: 2,
};
const reopenIssueOutput = {
  '@context': 'https://www.w3.org/ns/activitystreams',
  type: 'reopen',
  published: '2018-10-09T06:17:36.306Z',
  actor:
    {
      type: 'Person',
      uri: 'localhost:10080/neelanjan',
      name: 'neelanjan',
    },
  object:
    {
      type: 'issue',
      uri: 'localhost:10080/neelanjan/getting-started/issues/1.json',
      name: 'issue',
    },
  target:
    {
      type: 'project',
      name: 'getting-started',
      uri: 'localhost:10080/neelanjan/getting-started',
    },
};

describe('closeIssue method Test', () => {
  it('should return the output against input', () => {
    const data = {
      '@context': 'https://www.w3.org/ns/activitystreams', type: '', published: '', actor: { type: '', uri: '', name: '' }, object: { type: '', uri: '', name: '' },
    };
    assert.deepEqual(closeIssue(reopenIssueData, data), reopenIssueOutput);
  });
});
