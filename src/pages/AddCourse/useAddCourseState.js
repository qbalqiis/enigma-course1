import React from "react";

const useAddCourseState = () => {
    const [title, setTitle] = React.useState(""); //useState itu gunanaya untuk menganti variable, setTitle buat ganti2 value yang ada di dalam title
    const [description, setDescription] = React.useState("");
    const [file, setFile] = React.useState("");
    const [typeId, setTypeId] = React.useState("");
    const [level, setLevel] = React.useState("");
    const [duration, setDuration] = React.useState("");

    const getter = [title, description, file, typeId, level, duration];
    const setter = [setTitle,
        setDescription,
        setFile,
        setTypeId,
        setLevel,
        setDuration
    ];
    return [getter, setter];
};
export default useAddCourseState;