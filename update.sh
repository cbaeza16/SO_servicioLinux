#!/bin/bash
cd /home/casey/SO_servicioLinux/HelloWorld
git pull origin Deployment
sudo systemctl restart helloWorld.service
