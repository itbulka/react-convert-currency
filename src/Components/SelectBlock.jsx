import React from 'react';
import NativeSelect from "@mui/material/NativeSelect";

const SelectBlock = ({currences, value, onChange}) => {

    return (
        <div className="select__block">
            <p className="select__block-text">Базовая валюта</p>
            <NativeSelect
                value={value}
                onChange={evt => onChange(evt.target.value)}
            >
                {<option disabled value={0}>Не выбрано</option>}
                {currences.map(currency =>
                    <option value={currency.Value} key={currency.ID}>{currency.Name}</option>
                )}
            </NativeSelect>
            <p className="select__block-text">Выберите базовую валюту</p>
        </div>
    );

};

export default SelectBlock;