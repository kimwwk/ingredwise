# ingredwise

## Ideas

1. Can redirect ppl to our blog
2. Or take sponsorship from other clients to write blog Base on the food health or product

## CLI

```bash
apt install nginx nodejs npm

ufw app list

ufw status

ufw allow 'Nginx HTTP'

ufw enable

systemctl status nginx

systemctl start nginx
systemctl stop nginx
systemctl reload nginx

# get your own ip address
curl -4 icanhazip.com

fuser 3000/tcp

lsof -i :3000

# option -9 to force action
kill $PID -9

# nginx config
nano /etc/nginx/sites-available/default

# nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
# nginx: configuration file /etc/nginx/nginx.conf test is successful
nginx -t

ufw allow 'Nginx Full' && sudo ufw delete allow 'Nginx HTTP'

pm2 start --name=backend index.js

pm2 list

# To monitor logs, custom metrics, application information:
pm2 monit

# Load Balance 4 instances of api.js:
pm2 start api.js -i 4

# Monitor in production:
pm2 monitor

# Make pm2 auto-boot at server restart:
pm2 startup

```

## Learn more

ref link: https://coderrocketfuel.com/article/create-and-deploy-an-express-rest-api-to-a-digitalocean-server

1. access control configuration
   - do not create root ssh connection but user ssh connection
2. configure DNS
