'use strict';

console.log('javascript connected');

function Img(url, title, description, keyword, horns) {
  this.url = url;
  this.title = title;
  this.description = description;
  this.keyword = keyword;
  this.horns = horns;
}

$.get('./data/page-1.json', data => {
  console.log(data);
  data.forEach(data => {
    let img = new Img(data.image_url, data.title, data.description, data.keyword, data.horns);
    $('h2').append(img.title);
    $('img').attr('src', `${img.url}`);
    $('p').append(img.description);
  });
});
