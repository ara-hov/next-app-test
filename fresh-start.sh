#!/bin/sh -xe

# доустанавливаем node_modules
yarn

# очищаем артифакты предыдущих билдов
yarn clear

# генерируем модельки для prisma
yarn generate

# очищаем базу данных, создаем все таблицы по новой и сидируем
yarn migrate reset --force

# билдим
yarn build
