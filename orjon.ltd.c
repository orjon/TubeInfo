server {

        root /var/www;

        index index.html index.htm index.nginx-debian.html;

        server_name www.orjon.ltd orjon.ltd;

        ## Other version of backend on 5000
        location /tubeapi {
                proxy_pass http://localhost:5000;
                proxy_http_version 1.1;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection 'upgrade';
                proxy_set_header Host $host;
                proxy_cache_bypass $http_upgrade;
                proxy_redirect off;
        }

        #### THIS BIT
        location /tubeinfo2 {
                proxy_pass http://localhost:5001;
                proxy_http_version 1.1;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection 'upgrade';
                proxy_set_header Host $host;
                proxy_cache_bypass $http_upgrade;
                proxy_redirect off;
        }
        #### 

        location / {
                # First attempt to serve request as file, then
                # as directory, then fall back to displaying a 404.
                try_files $uri $uri/ =404;
        }


#SSL stuff:     
    listen [::]:443 ssl ipv6only=on; # managed by Certbot
    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/orjon.ltd/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/orjon.ltd/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot
}


server {
    if ($host = www.orjon.ltd) {
        return 301 https://$host$request_uri;
    } # managed by Certbot

    if ($host = orjon.ltd) {
        return 301 https://$host$request_uri;
    } # managed by Certbot

        listen 80;
        listen [::]:80;

        server_name www.orjon.ltd orjon.ltd;
    return 404; # managed by Certbot

}
