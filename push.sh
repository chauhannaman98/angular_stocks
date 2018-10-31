#!/bin/sh
git push -u origin master
ng build --prod
cd dist/angular-stocks
surge --domain helpful-swim.surge.sh