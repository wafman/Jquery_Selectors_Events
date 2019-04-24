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
      <section>
      <h2>${img.title}</h2>
      <img src="${img.url}" alt="${img.keyword}">
      <p>${img.description}</p>
      </section>
      `
    );

    selectElement.append(`<option>${ data.keyword }</option>`);
  });
});

// $('select').change((e) => ($("img").attr("alt") !== e.target.value) ? $("section").hide() : $("section").show());
$("select").change((e) => {
  $("section").each ((index, section) => {
    // if (section.img.attr("alt") === e.target.value) {
    //   $("section").show();
    //   console.log(`EQUAL!!! ALT: ${ section.img.attr("alt") } || EVENT: ${ e.target.value }`);
    // } else {
    //   $("section").hide();
    //   console.log(`NOT EQUAL!!! ALT: ${ section } || EVENT: ${ e.target.value }`); 
    // }
    console.log(index);
    console.log(section.img.attr("alt"));
  });
});
