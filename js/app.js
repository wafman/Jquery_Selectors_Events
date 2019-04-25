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
let sortedArray = [];

let template = $('main');
$.get('./data/page-1.json', data => {
  console.log(data);
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
  $('#template2').attr('id', 'template1');
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
  $('#template1').attr('id', 'template2');
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
  $('#sortByTitle').prop('checked', false);
  console.log(event);
  
  if($('#template1')){
    sortedArray = pageOneHorns;
  }
  if($('#template2')){
    sortedArray = pageTwoHorns;
  }
  sortedArray.sort((horn1, horn2) => horn1.horns - horn2.horns);
  template.empty();
  pageOneHorns.forEach((img) => template.append(hornTemplate(img)));
}


//sort by title alphabetically
const sortByTitle = () => {
  $('#sortByHorns').prop('checked', false);
  if($('#template1')){
    sortedArray = pageOneHorns;
  }
  if($('#template2')){
    sortedArray = pageTwoHorns;
  }
  pageOneHorns.sort((horn1, horn2) => horn1.title.localeCompare(horn2.title));
  
  template.empty();
  pageOneHorns.forEach((img) => template.append(hornTemplate(img)));
}



//event listeners
$('#sortByTitle').change(sortByTitle);

$('#sortByHorns').change(sortByHorns);
