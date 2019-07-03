/*Создайте два частичных представления:
header.hbs – описывает верхний колонтитул сайта
footer.hbs – описывает нижний колонтитул сайта
Создайте обычное представление, которое выводит текст приветствия и использует оба частичных представления.*/
const express = require('express');
const hbs = require('hbs');

const app = express();
hbs.registerPartials(__dirname + '/views/partial');
app.set('view engine', 'hbs');

app.get('/', (req, res)=>{
    res.render('index.hbs');
});

app.get('/contact', (req, res)=>{
    res.render('contact.hbs');
});

app.listen(3000);