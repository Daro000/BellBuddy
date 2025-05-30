import React from "react";
import StudentItem from "./StudentItem";

type Student = {
    id: number;
    name: string;
    present: boolean;
};

type Props = {
    students: Student[];
    togglePresence: (id: number) => void;
};

const StudentList = ({ students, togglePresence }: Props) => {
    return (
        <ul>
            {students.map((student) => (
                <StudentItem
                    key={student.id}
                    id={student.id}
                    name={student.name}
                    present={student.present}
                    togglePresence={togglePresence}
                />
            ))}
        </ul>
    );
};

export default StudentList;