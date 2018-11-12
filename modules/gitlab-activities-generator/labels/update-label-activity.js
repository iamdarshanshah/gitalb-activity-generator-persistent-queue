function updateLabelActivitiy(line,act)
{
    const activity = act;
    activity.type = line.method;
    activity.published = line.time;
    activity.actor.type = 'Person';
    activity.actor.name = line.username;
    activity.actor.uri = `localhost:10080/${line.username}`;
    activity.object.name = line.params[3].value.title;
    activity.object.type = line.params[3].key;
    activity.object.uri = `localhost:10080${line.path}`;
    activity.target = {};
    activity.target.type = line.params[5].key;
    activity.target.name = line.params[5].value;
    activity.target.uri = `${activity.actor.uri}/${activity.target.name}`;
    return activity;
}

module.exports = updateLabelActivitiy;