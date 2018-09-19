(function (exports) {
  function testNotesListView() {
    var noteList = new NoteList
    noteList.add('new note')
    assert.isTrue(noteList.notes.includes('new note'))
  }  

  testNotesListView()

})(this)