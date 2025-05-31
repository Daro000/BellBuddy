import { useState } from 'react'
import Clock from "./Clock.tsx";
import StudentList from "./StudentList.tsx";
import AddStudentForm from "./AddStudentForm.tsx";

import './App.css'

function App() {
  const [students, setStudents] = useState([
    {id: 1, name: "Jan Kowalski", present: true},
    {id: 2, name: "Marek Wiśniewski", present: false},
  ]);

  const [showOnlyPresent, setShowOnlyPresent] = useState(false);

  const togglePresence = (id: number) => {
    setStudents(prev =>
        prev.map(student =>
            student.id === id ? { ...student, present: !student.present } : student
        )
    );
  };

  const addStudent = (name: string) => {
    setStudents(prev => [
      ...prev,
      {
        id: prev.length > 0 ? prev[prev.length - 1].id + 1 : 1,
        name,
        present: false,
      }
    ]);
  };


  const filteredStudents = showOnlyPresent
      ? students.filter(student => student.present)
      : students;

  const presentCount = students.filter(student => student.present).length;

  return (
      <>
        <Clock />

        <button onClick={() => setShowOnlyPresent(prev => !prev)}>
          {showOnlyPresent ? "Pokaż wszystkich" : "Pokaż tylko obecnych"}
        </button>

        <p>Ilość obecnych uczniów: {presentCount}</p>

        <StudentList students={filteredStudents} togglePresence={togglePresence} />
        <AddStudentForm addStudent={addStudent} />
      </>
  )
}

export default App;
