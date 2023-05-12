import "./../Styles/Checkbox.css";

function CheckBox(valor, setValor, name) {
    return (
        <div className="bauble_box">
            <input
                className="bauble_input"
                id={name}
                name={name}
                type="checkbox"
                onChange={() => setValor(!valor)}
                checked={valor ? true : false}
            />
            <label className="bauble_label" htmlFor={name} />
        </div>
    );
}

export default CheckBox;
