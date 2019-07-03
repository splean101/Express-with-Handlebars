/*Создайте два хелпера:
header.js – описывает верхний колонтитул сайта
footer.js – описывает нижний колонтитул сайта
Создайте представление, которое выводит текст приветствия и использует оба хелпера.*/
const express = require('express');
const hbs = require('hbs');
const header = require('./helpers/header');
const footer = require('./helpers/footer');

const app = express();
hbs.registerHelper('header', header);
hbs.registerHelper('footer', footer);
app.set('view engine', 'hbs');

app.get('/', (req, res)=>{
    res.render('index.hbs');
});

app.listen(3000);