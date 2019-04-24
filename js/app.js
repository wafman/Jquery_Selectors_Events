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
  let template = $('main');
  data.forEach(data => {
    let img = new Img(data.image_url, data.title, data.description, data.keyword, data.horns);
    template.append(`
      <section>
      <h2>${img.title}</h2>
      <img src="${img.url}" alt="${img.keyword}">
      <p>${img.description}</p>
      </section>
      `
    );
  });
});
