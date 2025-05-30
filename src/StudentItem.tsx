import React from "react";

type Props = {
    id: number;
    name: string;
    present: boolean;
    togglePresence: (id: number) => void;
};

const StudentItem = ({ id, name, present, togglePresence }: Props) => {
    return (
        <li>
            {name} - {present ? "Obecny" : "Nieobecny"}
            <button onClick={() => togglePresence(id)}>Zmień status</button>
        </li>
    );
};

export default StudentItem;