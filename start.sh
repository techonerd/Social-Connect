#! /bin/bash

source ~/Desktop/socialenv/bin/activate
source ~/.bash_profile
python manage.py migrate
python manage.py runserver