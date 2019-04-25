'use strict';

console.log('javascript connected');

let optionArr = [];
let source = $('#horn-template').text();
const hornTemplate = Handlebars.compile(source);

function Img(url, title, description, keyword, horns) {
  this.url = url;
  this.title = title;
  this.description = description;
  this.keyword = keyword;
  this.horns = horns;
}
const pageOneHorns = [];
const pageTwoHorns = [];

$.get('./data/page-1.json', data => {
  console.log(data);
  let template = $('main');
  let selectElement = $('select');

  data.forEach(data => {
    let img = new Img(data.image_url, data.title, data.description, data.keyword, data.horns);
    pageOneHorns.push(img); 

    optionArr.indexOf(data.keyword) === -1 ? optionArr.push(data.keyword) : console.log('keyword exists already');

    template.append(hornTemplate(img));
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
      
      template.append(hornTemplate(img));
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
      pageTwoHorns.push(img); 

      optionArr.indexOf(data.keyword) === -1 ? optionArr.push(data.keyword) : console.log('keyword exists already');
      
      template.append(hornTemplate(img));
    });
    optionArr.forEach((element) => {
      selectElement.append(`<option>${ element }</option>`);
    });
  });
});

//functions

//sort by horns, highest to lowest
const sortByHorns = () => {
  console.log("Hornsorting clicked");
  console.log(pageOneHorns);

  $('#sortByTitle').prop('checked', false);
  pageOneHorns.sort((horn1, horn2) => horn1.horns - horn2.horns);

  
}


//sort by title alphabetically
const sortByTitle = (arr) => {
  console.log(pageOneHorns);
  console.log("Title sorting clicked");
  $('#sortByHorns').prop('checked', false);
  arr.sort((a, b) => {
    if(a.toLowerCase() < b.toLowerCase()){
      return -1;
    }
    if(a.toLowerCase() > b.toLowerCase()){
      return 1;
    }
    if(a.toLowerCase() === b.toLowerCase()){
      return 0;
    }
  });
  return arr;
}



//event listeners
$('#sortByTitle').change(sortByTitle);

$('#sortByHorns').change(sortByHorns);