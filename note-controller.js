(function(exports){
  function NoteController(list = new NoteListModel(), view = new NoteListView()){
    this._noteList = list;
    this._noteListView = view;
  }

  NoteController.prototype.listItems = function() {
    var listItems = document.getElementById('list-items');
    listItems.innerHTML = this._noteListView.htmlize(this._noteList.show());
  }

  NoteController.prototype.addNote = function(text) {
    this._noteList.add(text)
  }

  exports.NoteController = NoteController;
})(this)
