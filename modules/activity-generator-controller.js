const createIssueActivity = require('./gitlab-activities-generator/issues/create-issue-activity');
const reopenIssueActivity = require('./gitlab-activities-generator/issues/reopen-issue-activity');
const closeIssueActivity = require('./gitlab-activities-generator/issues/close-issue-activity');
const deleteGroupActivity = require('./gitlab-activities-generator/groups/delete-group-activity');
const deleteProjectActivity = require('./gitlab-activities-generator/projects/delete-project-activity');
const createGroupActivity = require('./gitlab-activities-generator/groups/create-group-activity');
const createProjectActivity = require('./gitlab-activities-generator/projects/create-project-activity');
const createLabelActivity = require('./gitlab-activities-generator/labels/create-label-activity');
const deleteLabelActivity = require('./gitlab-activities-generator/labels/delete-label-activity');
const updateLabelActivity = require('./gitlab-activities-generator/labels/update-label-activity');

//this function will create relevent activities after parsing log-file
function createActStream(line) {

  const data = {
    '@context': 'https://www.w3.org/ns/activitystreams', type: '', published: '', actor: { type: '', uri: '', name: '' }, object: { type: '', uri: '', name: '' },
  };

  if ((line.method === 'POST') && (line.action === 'create') && (line.controller === 'Projects::IssuesController') && (line.params[2].key === 'issue')) {
    const activity = {
      eventType: '',
      actstream: ''
    };
    activity.eventType = 'ISSUE';
    activity.actstream = createIssueActivity(line, data);
    return activity;
  }

  else if (line.method === 'PUT' && line.controller === 'Projects::IssuesController'
    && line.action === 'update' && (line.params[0].value.state_event === 'reopen')) {
    const activity = {
      eventType: '',
      actstream: ''
    };
    activity.eventType = 'ISSUE';
    activity.actstream = reopenIssueActivity(line, data);
    return activity;
  }
  else if (line.method === 'PUT' && line.controller === 'Projects::IssuesController'
    && line.action === 'update' && line.params[0].value.state_event === 'close') {
    const activity = {
      eventType: '',
      actstream: ''
    };
    activity.eventType = 'ISSUE';
    activity.actstream = closeIssueActivity(line, data);
    return activity;
  }
  else if (line.method === 'DELETE' && line.controller === 'GroupsController' && line.action === 'destroy') {
    const activity = {
      eventType: '',
      actstream: ''
    };
    activity.eventType = 'GROUP';
    activity.actstream = deleteGroupActivity(line, data);
    return activity;
  }

  else if (line.method === 'DELETE' && line.controller === 'ProjectsController' && line.action === 'destroy') {
    const activity = {
      eventType: '',
      actstream: ''
    };
    activity.eventType = 'PROJECT';
    activity.actstream = deleteProjectActivity(line, data);
    return activity;
  }

  else if (line.method === 'POST' && line.action === 'create' && line.controller === 'ProjectsController') {
    const activity = {
      eventType: '',
      actstream: ''
    };
    activity.eventType = 'PROJECT';
    activity.actstream = createProjectActivity(line, data);
    return activity;
  }

  else if (line.method === 'POST' && line.action === 'create' && line.controller === 'GroupsController') {
    const activity = {
      eventType: '',
      actstream: ''
    };
    activity.eventType = 'GROUP';
    activity.actstream = createGroupActivity(line, data);
    return activity;
  }


  else if (line.method === 'POST' && line.action === 'create' && line.controller === 'Projects::LabelsController') {
    const activity = {
      eventType: '',
      actstream: ''
    };
    activity.eventType = 'LABEL';
    activity.actstream = createLabelActivity(line, data);
    return activity;
  }


  else if (line.method === 'DELETE' && line.controller === 'Projects::LabelsController' && line.action === 'destroy') {
    const activity = {
      eventType: '',
      actstream: ''
    };
    activity.eventType = 'LABEL';
    activity.actstream = deleteLabelActivity(line, data);
    return activity;
  }

  else if (line.method === 'PATCH' && line.controller === 'Projects::LabelsController' && line.action === 'update') {
    const activity = {
      eventType: '',
      actstream: ''
    };
    activity.eventType = 'LABEL';
    activity.actstream = updateLabelActivity(line, data);
    return activity;
  }

}

module.exports = createActStream;
