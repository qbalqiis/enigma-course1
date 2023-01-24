import {
    FormControl, FormLabel, FormGroup
} from "react-bootstrap";

const Index = ( //buat form input buat dipanggil di pages add course
    {label, type, name, placeholder, value, onChange} //
) => {

    let props;
    switch (type) {
        case "textarea":
            props = {as: type, value}
            break;
        case "file":
            props = {type, value}
            break;
    }
    const onChangeHandler = (e) => {
        if (type === "file") {
            onChange(e.target.files[0])
        } else {
            onChange(e.target.value)
    }
}
    return (
        <FormGroup className="mb-3">
            <FormLabel>{label}</FormLabel>
            <FormControl
                {...props}
                placeholder={placeholder}
                onChange={onChangeHandler}
            />
        </FormGroup>
        )
}
export default Index;
