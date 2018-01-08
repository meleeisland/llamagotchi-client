# llamagotchi-client

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/standard/standard)
[![DeepScan Grade](https://deepscan.io/api/projects/1640/branches/6205/badge/grade.svg)](https://deepscan.io/dashboard/#view=project&pid=1640&bid=6205)

Llamagotchi client è un server http node.js che espone un interfaccia web per il client del llamagotchi

- per costruire l'immagine del server:
 `
 sudo mkdir -p /var/www/node
 sudo chown $USER:$USER /var/www/node
 cd /var/ww/node/
 git clone $REPO/llamagotchi-client
 cd llamagotchi-client
 docker build -t meleeisland/llamagotchi-client .`
- per eseguire l'immagine del server:
 `docker run -e PORT=8080 -p 8080:8080 -h 0.0.0.0 -d -v /var/www/node/llamagotchi-client/src/:/usr/src/app/src/ -v /var/www/node/llamagotchi-client/views/:/usr/src/app/views/ --name llamagotchi-client meleeisland/llamagotchi-client`
