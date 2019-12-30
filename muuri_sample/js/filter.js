document.addEventListener('DOMContentLoaded', function () {

  grid = new Muuri('.grid');

  $('.filter').on('click', function(){
    var filterValue = $(this).attr("value");
    grid.filter(filterValue);
  });

});
