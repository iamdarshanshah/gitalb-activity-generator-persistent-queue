function deleteLabelActivity(line, act) {

    const activity = act;
    activity.type = line.method;
    activity.published = line.time;
    activity.actor.type = 'Person';
    activity.actor.name = line.username;
    activity.actor.uri = `localhost:10080/${line.username}`;
    activity.object.name = 'label';
    activity.object.type = 'label';
    activity.object.uri = `localhost:10080${line.path}`;
    activity.target = {};
    activity.target.type = line.params[3].key;
    activity.target.name = line.params[3].value;
    activity.target.uri = `${activity.actor.uri}/${activity.target.name}`;
    return activity;

}

module.exports = deleteLabelActivity;