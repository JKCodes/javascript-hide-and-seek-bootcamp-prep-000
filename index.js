function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return nestedTarget = document.getElementById('nested').getElementsByClassName('target')[0];
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list');
  for (var i = 0; i < rankedLists.length; i++) {
    rankedLists[i].innerHTML = parseInt(rankedLists[i]) + n;
  }
}

function deepestChild() {
  // var current = document.getElementById('grand-node');
  var current = document.querySelector('#grand-node');
  var previous;

  while (current) {
    if (current.childElementCount > 0) {
      current = current.children[0];
    } else {
      return current.parentNode;
    }
  }
}
