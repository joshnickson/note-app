(function(exports){
  function NoteController(){
    this._noteModel = new NoteModel();
    this._noteView = new NoteView();
  }

  


})(this)


function changeGreeting() {
  var elem = document.getElementById('app')
  elem.innerHTML = "howdy"
}

changeGreeting()

function listItems() {
  
  var note1 = new Note('hello world')
  var note2 = new Note('congee')
  var note3 = new Note('door')

  var noteList = new NoteList()
  noteList.add(note1.text)
  noteList.add(note2.text)
  noteList.add(note3.text)

  
  var noteListView = new NoteListView()
  var listItems = document.getElementById('list-items')
  console.log(noteListView);
  console.log("help");
  
  listItems.innerHTML = noteListView.htmlize(noteList.show())
}

listItems()