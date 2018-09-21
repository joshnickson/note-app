(function(exports) {
  function testNoteListView() {

    function NoteListModelDouble() {};
    NoteListModelDouble.prototype = {
      show: function() {
        return [{text: 'some haribo'} , {text: 'some congee'}]
      }
    }
    noteListModelDouble = new NoteListModelDouble()

    var htmlString = `<ul><li><div>some haribo</div></li><li><div>some congee</div></li></ul>`
    var noteListView = new NoteListView()
    assert.isTrue(noteListView.htmlize(noteListModelDouble.show()) === htmlString)

  }

  function TestNoteListViewShows20Chars() {
    function NoteListModelDouble() {};
    NoteListModelDouble.prototype = {
      show: function() {
        return [{text: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'}, {text: '1234567890123456789012345'}]
      }
    }
    noteListModelDouble = new NoteListModelDouble()
    var htmlString = `<ul><li><div>ABCDEFGHIJKLMNOPQRST...</div></li><li><div>12345678901234567890...</div></li></ul>`
    var noteListView = new NoteListView()
    assert.isTrue(noteListView.htmlize(noteListModelDouble.show()) === htmlString)
  }

  testNoteListView();
  TestNoteListViewShows20Chars();
})(this)

