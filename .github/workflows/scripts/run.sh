#!/bin/bash

# # Node.js 설치
# curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
# sudo apt-get install -y nodejs

# Add Node.js and npm to PATH
export PATH="/home/ubuntu/.nvm/versions/node/v18.17.0/bin:$PATH"

# 권한 부여
sudo chown -R $USER:$GROUP /home/ubuntu/action

# 애플리케이션 디렉토리 생성 (이미 존재하면 무시됨)
sudo mkdir -p /home/ubuntu/action

# 애플리케이션 디렉토리로 이동
cd /home/ubuntu/action

# npm dependencies 설치
npm install

# 애플리케이션 실행 (백그라운드에서)
nohup npm start > output.log 2>&1 &
