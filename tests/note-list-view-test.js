(function(exports) {
  function testNoteListView() {
    var noteList = new NoteListModel()
    var htmlString =  `<ul><li><div>some haribo</div></li><li><div>some congee</div></li></ul>`
    noteList.add('some haribo')
    noteList.add('some congee')
    var noteListView = new NoteListView(noteList) 
    assert.isTrue(noteListView.htmlize(noteList.show()) === htmlString )
  
  }
  testNoteListView()
})(this)