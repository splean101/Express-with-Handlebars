/*Создайте сервер, который принимает минимальное и максимальное значения /:min/:max (req.params.min/max)
целого числового диапазона через параметры запроса 
(по умолчанию оба значения равны 0). 
 В ответ сервер возвращает HTML-страницу (создается движком Handlebars), 
 которое выводит все цифры из этого диапазона.*/
const express = require('express');

const app = express();

app.set('view engine', 'hbs');
app.use('/:min?/:max/', (req, res) => {
    let min = Number(req.params.min) || 0;
    let max = Number(req.params.max) || 0;
    if(min > max){
        [min, max] = [max, min];
    }
    let arr = [];
    for(let i = min; i <= max; i++){
        arr.push(i);
    };
    res.render('numbers.hbs', {
        number: arr
    });
});

app.listen(3000);