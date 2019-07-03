/*Создайте представление для движка Handlebars, которое визуализирует объекты типа Person. 
Другими словами, объекты типа Person будут моделью для данного представления.
*/
const express = require('express');

const app = express();
app.set('view engine', 'hbs');

class Person {
    constructor(firstName, lastName, post, salary, age, experience) {
       this.firstName = firstName;
       this.lastName = lastName;
       this.post = post;
       this.salary = salary;
       this.age = age;
       this.experience = experience;
    }
 }
 let person = new Person('Vitalii', 'Hubariev', 'engineer', -1, 33, 'experienced')
app.get('/', (req, res)=>{
    res.render('person.hbs', {
        firstName: person.firstName,
        lastName: person.lastName,
        post: person.post,
        salary: person.salary,
        age: person.age,
        experience: person.experience
    });
});

app.listen(3000);