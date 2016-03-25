const mysql = require('mysql');

//var connection = mysql.createConnection('mysql://root:qwerty@localhost/db_docq');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'qwerty',
  database : 'db_docq'
});

connection.connect(function(err) {
  if (err) {
    console.error('connection error \n' + err.stack);
  }
});

function saveDocumentation(docTitle, docProgram, docVersion, docLocation, docTags) {
  var documentation = {
    title   : docTitle,
    program : docProgram,
    version : docVersion,
    location: docLocation,
    tags    : docTags
  };

  connection.query('INSERT INTO documentation SET ?', documentation, function(err, result) {
    if (!err) {
      console.log('documentation insertion succeed');
      getAllDocumentation();
    } else {
      console.error('documentation insertion failed' + err.stack);
    }
  });
}

function searchDocumentation(docSearch) {
  var searchQuery = 'SELECT * FROM documentation WHERE title LIKE "%' + docSearch + '%"'
                  + ' OR program LIKE "%' + docSearch + '%"'
                  + ' OR version LIKE "%' + docSearch + '%"'
                  + ' OR tags LIKE "%' + docSearch + '%";';

  connection.query(searchQuery, function(err, rows, fields) {
    if (!err) {
      var result, tags, arrTags, resultTags, location;
      result = '';

      // alert(fields[3].name);

      for (var i = 0; i < rows.length; i++) {
        tags = rows[i].tags;
        arrTags = tags.split(',');  // split into array. comma as delimiter
        resultTags = '';

        for (var j = 0; j < arrTags.length; j++) {
          resultTags += '<span class="tag">' + arrTags[j] + '</span>';
        }

        location = rows[i].location;
        location = location.replace(/\\/g, '\\\\'); // add escape character into backslashes
        result += '<div class="doc-item" onclick="openDocumentation(\'' + location + '\');">\n'
                +   '<h3>' + rows[i].title + '</h3>\n'
                +   '<div class="doc-info">\n'
                +     '<span class="program">' + rows[i].program + '</span>\n'
                +     '<span class="version">' + rows[i].version + '</span>\n'
                +     '<div>' + resultTags + '</div>\n'
                +   '</div>\n'
                + '</div>\n';
      }

      $('#documentations').html(result);
      console.log('success loading searched documentations');
    } else {
      console.error('error searching a documentation\n' + err.stack);
    }
  });
}

function getAllDocumentation() {
  connection.query('SELECT * FROM documentation', function(err, rows, fields) {
    if (!err) {
      var result, tags, arrTags, resultTags, location;
      result = '';

      for (var i = 0; i < rows.length; i++) {
        tags = rows[i].tags;
        arrTags = tags.split(',');  // split into array. comma as delimiter
        resultTags = '';

        for (var j = 0; j < arrTags.length; j++) {
          resultTags += '<span class="tag">' + arrTags[j] + '</span>';
        }

        location = rows[i].location;
        location = location.replace(/\\/g, '\\\\'); // add escape character into backslashes
        result += '<div class="doc-item" onclick="openDocumentation(\'' + location + '\');">\n'
                +   '<h3>' + rows[i].title + '</h3>\n'
                +   '<div class="doc-info">\n'
                +     '<span class="program">' + rows[i].program + '</span>\n'
                +     '<span class="version">' + rows[i].version + '</span>\n'
                +     '<div>' + resultTags + '</div>\n'
                +   '</div>\n'
                + '</div>\n';
      }

      $('#documentations').html(result);
      console.log('success loading all documentation');
    } else {
      console.error('error while loading all documentation');
    }
  });
}
