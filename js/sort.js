//sort by horns, highest to lowest
const sortByHorns = (arr) => {
  $('#sortByTitle').prop('checked', false);
  arr.sort((a,b) => b.horns - a.horns);
  return arr;
}


//sort by title alphabetically
const sortByTitle = (arr) => {
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
$('#sortByTitle').on('click', sortByTitle);

$('#sortByHorns').on('click', sortByHorns);
