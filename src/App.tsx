import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"
import { Routes, Route, Navigate } from "react-router-dom"
import { NewNote } from "./NewNote"

export type Note = {
  id: string
} & NoteData

export type RawNote = {
  id: string
}

export type RawNoteData = {
  title: string
  markdown: string 
  tags: Tag[]
}

export type NoteData = {
  title: string
  markdown: string
  tags: Tag[]
}

export type Tag = {
  id: string
  label: string
}


function App() {
  const [notes, setNotes] = useLocalStorage<RawNote>("notes", [])
  return (
    <div className="App">
      <Container className="my-4">
        <Routes>
          <Route path="/new" element={<NewNote />}/>
          <Route path="/" element={<h1>HELLO THERE</h1>}/>
          <Route path="/:id">
            <Route index element={<h1>Show</h1>} />
            <Route path="edit" element={<h1>Show</h1>} />
          </Route>
          <Route path="*" element={<Navigate to ="/" />} />
        </Routes>
      </Container>
    </div>
  )
}

export default App
