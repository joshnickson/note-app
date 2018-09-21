(function(exports) {
  function testSingleNoteView() {
    note = new Note('test');
    var singleNoteView = new SingleNoteView(note);
    var expectedHTML = `<div>test</div>`
    assert.isTrue(singleNoteView.htmlize() === expectedHTML);
  }
  testSingleNoteView();
})(this)
