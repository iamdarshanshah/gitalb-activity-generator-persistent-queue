/* global describe it:true */

const { assert } = require('chai');
const createProject = require('./create-issue-activity');

// const assert = require('chai').assert;

const createIssueData = {
  method: 'POST',
  path: '/neelanjan/getting-started/issues',
  format: 'html',
  controller: 'Projects::IssuesController',
  action: 'create',
  status: 302,
  duration: 105.58,
  view: 0.0,
  db: 20.18,
  location: 'http://localhost:10080/neelanjan/getting-started/issues/1',
  time: '2018-10-09T06:09:55.076Z',
  params: [{ key: 'utf8', value: '✓' }, { key: 'authenticity_token', value: '[FILTERED]' }, {
    key: 'issue',
    value: {
      title: 'getting-started-issue', description: '', confidential: '0', assignee_ids: ['0'], label_ids: [''], due_date: '', lock_version: '',
    },
  }, { key: 'namespace_id', value: 'neelanjan' }, { key: 'project_id', value: 'getting-started' }],
  remote_ip: '172.20.0.1',
  user_id: 3,
  username: 'neelanjan',
  ua: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36',
  gitaly_calls: 2,
};
const createIssueOutput = {
  '@context': 'https://www.w3.org/ns/activitystreams',
  type: 'Create',
  published: '2018-10-09T06:09:55.076Z',
  actor:
    {
      type: 'Person',
      uri: 'http://localhost:10080/neelanjan',
      name: 'neelanjan',
    },
  object:
    {
      type: 'issue',
      uri: 'http://localhost:10080/neelanjan/getting-started/issues/1',
      name: 'getting-started-issue',
    },
  target:
    {
      type: 'project',
      name: 'getting-started',
      uri: 'http://localhost:10080/neelanjan/getting-started',
    },
};

describe('createIssueActivity method Test', () => {
  it('should return the output against input', () => {
    const data = {
      '@context': 'https://www.w3.org/ns/activitystreams', type: '', published: '', actor: { type: '', uri: '', name: '' }, object: { type: '', uri: '', name: '' },
    };
    assert.deepEqual(createProject(createIssueData, data), createIssueOutput);
  });
});
