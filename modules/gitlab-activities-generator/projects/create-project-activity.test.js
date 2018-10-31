/* global describe it:true */

const { assert } = require('chai');
const createProject = require('./create-project-activity');

// const assert = require('chai').assert;

const createProjectData = {
  method: 'POST',
  path: '/projects',
  format: 'html',
  controller: 'ProjectsController',
  action: 'create',
  status: 302,
  duration: 116.87,
  view: 0.0,
  db: 30.92,
  location: 'http://localhost:10080/neelanjan/getting-started',
  time: '2018-10-09T06:00:05.990Z',
  params: [{ key: 'utf8', value: '✓' }, { key: 'authenticity_token', value: '[FILTERED]' }, {
    key: 'project',
    value: {
      ci_cd_only: 'false', name: 'getting-started', namespace_id: '3', path: 'getting-started', description: '', visibility_level: '0',
    },
  }],
  remote_ip: '172.20.0.1',
  user_id: 3,
  username: 'neelanjan',
  ua: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36',
  gitaly_calls: 13,
};

const createProjectOutput = {
  '@context': 'https://www.w3.org/ns/activitystreams',
  type: 'Create',
  published: '2018-10-09T06:00:05.990Z',
  actor:
    {
      type: 'Person',
      uri: 'http://localhost:10080/neelanjan',
      name: 'neelanjan',
    },
  object:
    {
      type: 'project',
      uri: 'http://localhost:10080/neelanjan/getting-started',
      name: 'getting-started',
    },
};


describe('createProjectActivity method Test', () => {
  it('should return the output against input', () => {
    const data = {
      '@context': 'https://www.w3.org/ns/activitystreams', type: '', published: '', actor: { type: '', uri: '', name: '' }, object: { type: '', uri: '', name: '' },
    };
    assert.deepEqual(createProject(createProjectData, data), createProjectOutput);
  });
});
