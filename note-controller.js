(function(exports){

  function NoteController() {
    this._noteModel = new Note();
    this._noteListModel = new NoteListModel();
    this._noteListView = new NoteListView();
  }

  NoteController.prototype.listItems = function() {
    console.log('hello')
    var note1 = new Note('haribo')
    var note2 = new Note('congee')
    var note3 = new Note('door')

    this._noteListModel.add(note1.text)
    this._noteListModel.add(note2.text)
    this._noteListModel.add(note3.text)
    
    var listItems = document.getElementById('list-items')
    console.log("help");
    
    listItems.innerHTML = this._noteListView.htmlize(this._noteListModel.show())
  }

  exports.NoteController = NoteController
})(this)
