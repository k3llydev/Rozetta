# Build application
FROM node:alpine as build

WORKDIR /tmp/rozetta
COPY . /tmp/rozetta
RUN npm install
RUN npm run build

# Prepare OS
FROM node:alpine

# Set metadata
LABEL title="Rozetta @ Discord"
LABEL description=""
LABEL authors="https://k3lly.dev"
LABEL version="1.0.0"

# Set configurations
WORKDIR /opt/rozetta

# Move transpiled code into container
COPY --from=build /tmp/rozetta/dist /opt/rozetta
COPY --from=build /tmp/rozetta/node_modules /opt/rozetta/node_modules

# Install dependencies for built application
RUN npm install

# Run transpiled application
CMD ["node", "sharding"]
