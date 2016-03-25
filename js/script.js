'use strict';

const electron = require('electron');
const remote = electron.remote;
const dialog = remote.dialog;

getAllDocumentation();  // database.js

$('.closes').click(function() {
  var window = remote.getCurrentWindow();
  window.close();
});

$('.minimizes').click(function() {
  var window = remote.getCurrentWindow();
  window.minimize();
});

$('#search-area .search-button').click(function() {
  if ($('#search-area .search-box').val().length > 0) {
    getAllDocumentation();
    $('#search-area .search-box').val('');
  } else {
    var docSearch = $('#search-area .search-box').val();
    searchDocumentation(docSearch);
  }
});

$('#search-area .search-box').keyup(function() {
  if ($('#search-area .search-box').val().length > 0) {
    $('#search-area .search-button').css({
      'background'  : "url('images/search-reset.png') #fbb83a"
    });
  } else {
    $('#search-area .search-button').css({
      'background'  : "url('images/search.png') #fbb83a"
    });
  }

  var docSearch = $('#search-area .search-box').val();
  searchDocumentation(docSearch);
});

$('.add-button').click(function() {
  resetAddForm();
  $('#add-form').fadeIn(500);
  $('#foot').hide();
});

$('#documentations, #search-area, #menu-button').click(function() {
  $('.field-button .cancel').click();
});

$('#add-form .form-close').click(function() {
  $('.field-button .cancel').click();
});

$('.browse').click(function() {
  var location = dialog.showOpenDialog({
    properties  : ['openFile']
  });
  $('.field-location .location').val(location[0]);
});

$('.field-button .submit').click(function() {
  var docTitle = $('#add-form input.title').val();
  var docProgram = $('#add-form input.program').val();
  var docVersion = $('#add-form input.version').val();
  var docLocation = $('#add-form input.location').val();
  var docTags = $('#add-form input.tags').val();

  saveDocumentation(docTitle, docProgram, docVersion, docLocation, docTags);
  $('.alert-save').fadeIn(500).fadeOut(2500);
  resetAddForm();
});

$('.field-button .cancel').click(function() {
  $('#add-form').fadeOut(100);
  $('#foot').fadeIn(500);
});

function resetAddForm() {
  $('#add-form input.title').val('');
  $('#add-form input.program').val('');
  $('#add-form input.version').val('');
  $('#add-form input.location').val('');
  $('#add-form input.tags').val('');
}
