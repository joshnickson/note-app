(function(exports) {
  function SingleNoteView(note) {
    this._note = note;
  }

  SingleNoteView.prototype.htmlize = function(array){
    return `<div>${this._note.text.substring(0,20)}</div>`;
  }

  exports.SingleNoteView = SingleNoteView;
})(this);