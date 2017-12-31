FROM node:latest

# File Author / Maintainer
MAINTAINER Davide Bizzi <d.bizzi@appleseed-mail.it>

# Install nodemon

# Define working directory
WORKDIR /usr/src/app



# Copy npm configurations
COPY package*.json ./

# Run npm install
RUN npm install

# Copy files
COPY ./public ./public
COPY ./.env ./.env
COPY ./run.sh ./run.sh

RUN chmod +x run.sh

# Expose port
EXPOSE  1337


# Run app 
ENTRYPOINT ["/bin/sh", "-c" , "/usr/src/app/run.sh"]
