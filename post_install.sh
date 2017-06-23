#!/bin/bash
echo ** Running bower install **
./node_modules/bower/bin/bower install
echo ** Running grunt **
./node_modules/grunt-cli/bin/grunt
