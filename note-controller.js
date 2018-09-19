(function(exports){

  function NoteController() {
    this._noteModel = new Note();
    this._noteListModel = new NoteList();
    this._noteListView= new NoteListView();
  }

  NoteController.prototype.changeGreeting = function() {
    var elem = document.getElementById('app')
    elem.innerHTML = "howdy"
  }

    exports.NoteController = NoteController
})(this)

