
#-----------------------------------------
# Запуск тестового задания
#-----------------------------------------

1. Установить зависимости 

npm install

2. Установить фейковый json-server

sudo npm install -g json-server

3. Запустить его

json-server --watch db.json --port 8000

4. Запустить nuxt проект

npm run dev

5. Зайти на адрес http://localhost:3000/


#-----------------------------------------
# Dockerfile
#-----------------------------------------

FROM node:10
WORKDIR /app
ADD . /app/
RUN npm install
RUN npm run build
ENV HOST 0.0.0.0
EXPOSE 3000
CMD [ "npm", "start" ]

