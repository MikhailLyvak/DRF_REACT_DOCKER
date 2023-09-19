| BACKEND APP | 
  1) cd ~/Documents/DockerApp/backend
  2) python manage.py runserver
| BACEND CELERY |
    1) sudo service redis-server start
    2) celery -A config worker -B -l INFO
| FRONTEND |
    1) npm start
# DRF_REACT_DOCKER
