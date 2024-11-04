# official mongodb image
FROM mongo:latest

# copy initialization scripts to /docker-entrypoint-initdb.d/
# MongoDB will automatically execute all .js or .sh scripts in this directory when it starts
COPY init.js /docker-entrypoint-initdb.d/init.js
COPY scripts /docker-entrypoint-initdb.d/scripts

# Expose MongoDB's default port
EXPOSE 27017
