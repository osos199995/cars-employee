cd /var/www/cataloug-admin-api
rm package-lock.json
git pull origin master
npm i
npm run build 
pm2 restart  cataloug-admin-api