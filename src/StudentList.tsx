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

const StudentList = () => {
    return ();
};

export default StudentList;