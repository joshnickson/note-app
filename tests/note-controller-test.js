(function(exports) {
  function testNoteController() {
    var noteController = new NoteController()
    assert.isTrue(noteController)
  }

  function testNoteControllerInnerHTML() {
    var noteList = new NoteListModel();
    noteList.add('haribo');
    noteList.add('congee');
    noteList.add('door');
    var noteController = new NoteController(list=noteList);
    noteController.listItems();
    var htmlString =  `<ul><li><div>haribo</div></li><li><div>congee</div></li><li><div>door</div></li></ul>`;
    innerHTML = document.getElementById('list-items').innerHTML;
    assert.isTrue(innerHTML === htmlString);
  }
  
  testNoteController();
  testNoteControllerInnerHTML();
})(this)
