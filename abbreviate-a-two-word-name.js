// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name){
  const names = name.toUpperCase().split(' ');
  return names.map(name => name[0]).join('.');
}

function abbrevName(name){
  return name.toUpperCase().split(' ').map(name => name[0]).join('.');
}
