(function(exports) {
  function NoteListModel() {
    this.notes = [];
    this.id = 0;
  }    

    NoteListModel.prototype.add = function(text, id) {
      var _note = new Note(text, id);
      this.notes.push(_note);
      this.id++
    }
    NoteListModel.prototype.show = function() {
      return this.notes;
    }

  exports.NoteListModel = NoteListModel;
})(this)
