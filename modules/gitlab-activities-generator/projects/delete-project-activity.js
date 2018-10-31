function deleteProjectActivity(line, act) {
  const activity = act;
  activity.type = line.method;
  activity.published = line.time;
  activity.actor.type = 'Person';
  activity.actor.name = line.username;
  activity.actor.uri = `localhost:10080/${line.username}`;
  activity.object.name = line.params[3].value;
  activity.object.type = 'project';
  activity.object.uri = line.location;
  return activity;
}

module.exports = deleteProjectActivity;
