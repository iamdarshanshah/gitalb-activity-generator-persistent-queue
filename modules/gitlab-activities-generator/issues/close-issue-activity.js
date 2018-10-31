function closeIssueActivity(line, act) {
  const activity = act;
  activity.type = line.params[0].value.state_event;
  activity.published = line.time;
  activity.actor.type = 'Person';
  activity.actor.name = line.username;
  activity.actor.uri = `localhost:10080/${line.username}`;
  activity.object.name = line.params[0].key;
  activity.object.type = line.params[0].key;
  activity.object.uri = `localhost:10080${line.path}`;
  activity.target = {};
  activity.target.type = 'project';
  activity.target.name = line.params[2].value;
  activity.target.uri = `${activity.actor.uri}/${activity.target.name}`;
  return activity;
}

module.exports = closeIssueActivity;
