<!-- running app through docker containers -->

<!-- running whole setup i.e. gitlab instance and activity-generator -->
sudo docker-compose run -d --service-ports gitlab-activities-generator

<!-- running gitlab docker container -->
sudo docker-compose run -d --service-ports gitlab


<!-- Important note --> 
1 - change the path of volumes in docker-compose.yml file to the application path in local machine.
2 - also change the name of the images to be build in docker-compose.yml file for new instances as      whenever you want to run a new docker container it will cause the dockerized app to rebuild.