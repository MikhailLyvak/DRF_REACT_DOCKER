from __future__ import absolute_import, unicode_literals
from celery import shared_task
from celery.task import periodic_task
from celery.schedules import crontab
from datetime import timedelta

from test_app.models import User

@periodic_task(run_every=timedelta(seconds=10), name="test_celery")
def celery_test():
    User.objects.create(name="test", email="ammgkdfm@gmail.com", password="test")
