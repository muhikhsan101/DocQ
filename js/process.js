const cp = require('child_process');

function openDocumentation(docLocation) {
  if (docLocation[docLocation.length - 1] == '\\') {
    
  } else {
    cp.exec('"' + docLocation + '"');
  }
}
