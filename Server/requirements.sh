#!/bin/bash

# Update package lists
sudo apt update

# Install whois
sudo apt install -y whois

# Install dig
sudo apt install -y dnsutils

# Install subfinder
GO111MODULE=on go get -v github.com/projectdiscovery/subfinder/v2/cmd/subfinder

# Install nuclei
GO111MODULE=on go get -v github.com/projectdiscovery/nuclei/v2/cmd/nuclei

# Install nmap
sudo apt install -y nmap

# Install wapiti
sudo apt install -y wapiti

# Install Python development tools
sudo apt install -y python3-dev python3-pip

# Install FastAPI and uvicorn
pip3 install fastapi uvicorn

# Install firebase_admin
pip3 install firebase_admin

echo "Tool installation completed!"
