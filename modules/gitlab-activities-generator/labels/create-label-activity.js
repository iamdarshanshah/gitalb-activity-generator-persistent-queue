function createLabelActivity(line, act) {
    const activity = act;
    activity.type = 'Create';
    activity.actor.type = 'Person';
    activity.actor.name = line.username;
    activity.actor.uri = `http://localhost:10080/${line.username}`;
    activity.object.type = line.params[2].key;
    activity.published = line.time;
    activity.object.uri = line.location;
    activity.object.name = line.params[2].value.title;
    activity.target = {};
    activity.target.type = 'project';
    activity.target.name = line.params[4].value;
    activity.target.uri = `${activity.actor.uri}/${activity.target.name}`;
    // console.log(activity);
    return activity;
}


module.exports = createLabelActivity;