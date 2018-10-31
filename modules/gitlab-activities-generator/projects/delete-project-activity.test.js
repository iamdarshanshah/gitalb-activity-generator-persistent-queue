/* global describe it:true */

const { assert } = require('chai');
const deleteProject = require('./delete-project-activity.js');
// const assert = require('chai').assert;

const deleteProjectData = {
  method: 'DELETE', path: '/neelanjan/getting-started', format: 'html', controller: 'ProjectsController', action: 'destroy', status: 302, duration: 43.06, view: 0.0, db: 16.37, location: 'http://localhost:10080/dashboard/projects', time: '2018-10-09T06:20:42.254Z', params: [{ key: '_method', value: 'delete' }, { key: 'authenticity_token', value: '[FILTERED]' }, { key: 'namespace_id', value: 'neelanjan' }, { key: 'id', value: 'getting-started' }], remote_ip: '172.20.0.1', user_id: 3, username: 'neelanjan', ua: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36',
};
const deleteProjectOutput = {
  '@context': 'https://www.w3.org/ns/activitystreams',
  type: 'DELETE',
  published: '2018-10-09T06:20:42.254Z',
  actor:
    {
      type: 'Person',
      uri: 'localhost:10080/neelanjan',
      name: 'neelanjan',
    },
  object:
    {
      type: 'project',
      uri: 'http://localhost:10080/dashboard/projects',
      name: 'getting-started',
    },
};

describe('deleteProjectActivity method Test', () => {
  it('should return the output against input', () => {
    const data = {
      '@context': 'https://www.w3.org/ns/activitystreams', type: '', published: '', actor: { type: '', uri: '', name: '' }, object: { type: '', uri: '', name: '' },
    };
    assert.deepEqual(deleteProject(deleteProjectData, data), deleteProjectOutput);
  });
});
