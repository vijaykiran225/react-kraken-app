cd client/frontend
npm run build

cd ../../server/backend/public/
rm -rf business

cp -r  ../../../client/frontend/build  business

cd ../../backend

npm start