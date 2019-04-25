'use strict';

console.log('javascript connected');

let optionArr = [];

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
    optionArr.indexOf(data.keyword) === -1 ? optionArr.push(data.keyword) : console.log('keyword exists already');
    // template.append(`
    //   <section class="${ img.keyword }">
    //   <h2>${img.title}</h2>
    //   <img src="${img.url}" alt="${img.keyword}">
    //   <p>${img.description}</p>
    //   </section>
    //   `
    // );
  });
  optionArr.forEach((element) => {
    selectElement.append(`<option>${ element }</option>`);
  });
});

$('#page1').on('click', function(){
  $('main').empty();
  $.get('./data/page-1.json', data => {
    console.log(data);
    let template = $('main');
    let selectElement = $('select');
  
    data.forEach(data => {
      let img = new Img(data.image_url, data.title, data.description, data.keyword, data.horns);
      optionArr.indexOf(data.keyword) === -1 ? optionArr.push(data.keyword) : console.log('keyword exists already');
      // template.append(`
      //   <section class="${ img.keyword }">
      //   <h2>${img.title}</h2>
      //   <img src="${img.url}" alt="${img.keyword}">
      //   <p>${img.description}</p>
      //   </section>
      //   `
      // );
    });
    optionArr.forEach((element) => {
      selectElement.append(`<option>${ element }</option>`);
    });
  });
});


$('select').change((e) => $('section').show().not(document.getElementsByClassName(`${ e.target.value }`)).hide());


//start logic for showing page 2

$('#page2').on('click', function(){
  console.log('event listener works');
  $('main').empty();
  $.get('./data/page-2.json', data => {
    console.log(data);
    let template = $('main');
    let selectElement = $('select');
  
    data.forEach(data => {
      let img = new Img(data.image_url, data.title, data.description, data.keyword, data.horns);
      optionArr.indexOf(data.keyword) === -1 ? optionArr.push(data.keyword) : console.log('keyword exists already');
      // template.append(`
      //   <section class="${ img.keyword }">
      //   <h2>${img.title}</h2>
      //   <img src="${img.url}" alt="${img.keyword}">
      //   <p>${img.description}</p>
      //   </section>
      //   `
      // );
    });
    optionArr.forEach((element) => {
      selectElement.append(`<option>${ element }</option>`);
    });
  });
});
