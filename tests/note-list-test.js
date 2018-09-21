(function (exports) {
  function testNotesListModel() {
    var noteList = new NoteListModel
    noteList.add('new note')
    assert.isTrue(noteList.notes.pop().text === 'new note')
  }  
  testNotesListModel()
})(this)