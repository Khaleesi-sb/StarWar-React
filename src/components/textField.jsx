import React from 'react';

const TextField = ({
    placeholder,
    value,
    onChange,
    label
}) => {
    return (
        <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
            <label style={{ color: "black", width: "100px", marginRight: "10px", textAlign: "start" }}>{label}</label>
            <input style={{ fontSize: "14px", height: "35px", width: "200px" }} placeholder={placeholder} value={value} onChange={onChange} />
        </div>
    );
}

export default TextField;
