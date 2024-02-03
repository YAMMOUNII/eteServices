import { useTable, useSortBy, usePagination } from 'react-table';
import './../utils/Style/components/table.scss';
import React from 'react';

const SimpleTable = ({
    data,
    columns,
}) => {

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        state: { },
    } = useTable(
        { columns, data },
        useSortBy,
        usePagination
    );

    return (
        <div className='table-container'>

            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render('Header')}
                                    <span>{column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}</span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row) => {
                        prepareRow(row);

                        return (
                            <React.Fragment key={row.id}>
                                <tr {...row.getRowProps()}>
                                    {row.cells.map((cell) => (
                                        <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    ))}

                                </tr>

                            </React.Fragment>
                        );
                    })}

                </tbody>
            </table>

        </div>
    );
};

export default SimpleTable;
