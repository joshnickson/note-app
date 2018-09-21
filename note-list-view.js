(function(exports){
  function NoteListView() {}

  NoteListView.prototype.htmlize = function(array){
    htmls = [`<ul>`]
    array.forEach(function(item) {
      var ellipsis = (item.text.length > 20) ? '...' : '';
      htmls.push(`<li><div>${item.text.substring(0, 20)}${ellipsis}</div></li>`)
    })
    htmls.push(`</ul>`)
    return htmls.join('')
  }

  exports.NoteListView = NoteListView
})(this)