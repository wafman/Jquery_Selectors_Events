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
  let selectElement = $('select');

  data.forEach(data => {
    let img = new Img(data.image_url, data.title, data.description, data.keyword, data.horns);

    template.append(`
      <section class="${ img.keyword }">
      <h2>${img.title}</h2>
      <img src="${img.url}" alt="${img.keyword}">
      <p>${img.description}</p>
      </section>
      `
    );

    selectElement.append(`<option>${ data.keyword }</option>`);
  });
});

$("select").change((e) => $("section").show().not(document.getElementsByClassName(`${ e.target.value }`)).hide());
