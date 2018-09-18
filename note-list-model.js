(function(exports) {
  function NoteList() {
    this.notes = []
  }    

    NoteList.prototype.add = function(note) {
      this.notes.push(note)
    }
    NoteList.prototype.show = function() {
      return this.notes
    }

  exports.NoteList = NoteList
})(this)
