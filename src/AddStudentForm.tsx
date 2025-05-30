import React, { useState } from "react";

type Props = {
    addStudent: (name: string) => void;
};

const AddStudentForm = ({ addStudent }: Props) => {
    const [name, setName] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name.trim()) {
            addStudent(name);
            setName("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Imię ucznia"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button type="submit">Dodaj ucznia</button>
        </form>
    );
};

export default AddStudentForm;
