#!/bin/bash

echo "Running localtunnel startup bash script..."

function localtunnel {
lt --subdomain yggfinancedev --local-host reverse-proxy --port 80
}

until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done