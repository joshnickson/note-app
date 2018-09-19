(function(exports){

  function NoteController() {
    this._noteModel = new Note();
    this._noteListModel = new NoteListModel();
    this._noteListView= new NoteListView();
  }

  NoteController.prototype.changeGreeting = function() {
    var elem = document.getElementById('app')
    elem.innerHTML = "howdy"
  }()

  NoteController.prototype.listItems = function() {
  
    var note1 = new Note('hello world')
    var note2 = new Note('congee')
    var note3 = new Note('door')
    console.log(this._noteListModel)

    this._noteListModel.add(note1.text)
    this._noteListModel.add(note2.text)
    this._noteListModel.add(note3.text)
   
    
    var listItems = document.getElementById('list-items')
    console.log(noteListView);
    console.log("help");
    
    listItems.innerHTML = this._noteListView.htmlize(noteList.show())
  }()

  exports.NoteController = NoteController
})(this)

