import React, {useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import CurrencyRow from "./CurrencyRow";

const CardCurrency = () => {

    const [currences, setCurrences] = useState([
        {
            name: "Австралийский доллар",
            value: 1,
            code: "AUD",
            rate: 2.32
        },
        {
            name: "Австралийский доллар",
            value: 1,
            code: "AUD",
            rate: 2.32
        },
        {
            name: "Австралийский доллар",
            value: 1,
            code: "AUD",
            rate: 2.32
        },
        {
            name: "Австралийский доллар",
            value: 1,
            code: "AUD",
            rate: 2.32
        },
    ])

    return (
        <div className="card-currency__content">
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="left" sx={{ fontWeight: 'bold' }}>Валюта</TableCell>
                        <TableCell align="right" sx={{ fontWeight: 'bold' }}>Единиц</TableCell>
                        <TableCell align="right" sx={{ fontWeight: 'bold' }}>Буквенный код</TableCell>
                        <TableCell align="right" sx={{ fontWeight: 'bold' }}>Курс</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {currences.map( currency =>
                        <CurrencyRow currency={currency}/>
                    )}
                </TableBody>
            </Table>
        </div>
    );
};

export default CardCurrency;