import React from 'react';
import NativeSelect from "@mui/material/NativeSelect";

const SelectBlock = () => {
    return (
        <div className="select__block">
            <p className="select__block-text">Базовая валюта</p>
            <NativeSelect defaultValue={20}>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={30}>30</option>
            </NativeSelect>
            <p className="select__block-text">Выберите базовую валюту</p>
        </div>
    );
};

export default SelectBlock;