cd /var/www/cataloug-rtm-admin-api
rm package-lock.json
git pull origin release/rtm
npm i
npm run build 
pm2 restart cataloug-rtm-admin-api