(function (exports) {
  function testNoteIsHelloWorld() {
    var note = new Note("hello world");
    assert.isTrue(note.text === "hello world")
  }  
  function testNoteHasID() {
    var note = new Note("hello world");
    assert.isTrue(note.id === "0")
  }  
  testNoteHasID() 
  testNoteIsHelloWorld()
})(this)
