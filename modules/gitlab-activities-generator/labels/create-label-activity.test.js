/* global describe it:true */

const { assert } = require('chai');
const createLabel = require('./create-label-activity');

const createLabelData =

    { "method": "POST", "path": "/neelanjan/hello-moto/labels", "format": "html", "controller": "Projects::LabelsController", "action": "create", "status": 302, "duration": 1317.02, "view": 0.0, "db": 1127.75, "location": "http://localhost:10080/neelanjan/hello-moto/labels", "time": "2018-11-12T05:55:41.307Z", "params": [{ "key": "utf8", "value": "✓" }, { "key": "authenticity_token", "value": "[FILTERED]" }, { "key": "label", "value": { "title": "Refactoring", "description": "", "color": "#428BCA" } }, { "key": "namespace_id", "value": "neelanjan" }, { "key": "project_id", "value": "hello-moto" }], "remote_ip": "172.19.0.1", "user_id": 3, "username": "neelanjan", "ua": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36" }


const createLabelOutput =
{
    '@context': 'https://www.w3.org/ns/activitystreams',
    "type": 'Create',
    "published": '2018-11-12T05:55:41.307Z',
    "actor":
    {
        "type": 'Person',
        "uri": 'http://localhost:10080/neelanjan',
        "name": 'neelanjan'
    },
    "object":
    {
        "type": 'label',
        "uri": 'http://localhost:10080/neelanjan/hello-moto/labels',
        "name": 'Refactoring'
    },
    "target":
    {
        "type": 'project',
        "name": 'hello-moto',
        "uri": 'http://localhost:10080/neelanjan/hello-moto'
    }
};


describe('createLabelActivity method Test', () => {
    it('should return the output against input', () => {
      const data = {
        '@context': 'https://www.w3.org/ns/activitystreams', type: '', published: '', actor: { type: '', uri: '', name: '' }, object: { type: '', uri: '', name: '' },
      };
      assert.deepEqual(createLabel(createLabelData, data), createLabelOutput);
    });
  });