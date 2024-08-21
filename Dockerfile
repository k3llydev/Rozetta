# Build application
FROM node:alpine as build

WORKDIR /tmp/therealmultiverse
COPY . /tmp/therealmultiverse
RUN npm install
RUN npm run build

# Prepare OS
FROM node:alpine

# Set metadata
LABEL title="TheRealMultiverse @ Discord"
LABEL description="A bot used to handle the entire multiverse around Discord."
LABEL authors="https://k3lly.dev"
LABEL version="1.0.0"

# Set configurations
WORKDIR /opt/therealmultiverse

# Move transpiled code into container
COPY --from=build /tmp/therealmultiverse/dist /opt/therealmultiverse
COPY --from=build /tmp/therealmultiverse/node_modules /opt/therealmultiverse/node_modules

# Install dependencies for built application
RUN npm install

# Run transpiled application
CMD ["node", "sharding"]
