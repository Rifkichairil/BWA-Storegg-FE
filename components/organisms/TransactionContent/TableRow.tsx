import classNames from 'classnames';
import Link from 'next/link'
import React from 'react'
import cx from 'classNames'
import NumberFormat from 'react-number-format';

interface TableRowProps {
    image: string;
    title: string;
    categori: string;
    item: string;
    price: number;
    status: string;
    id: string;
}

export default function TableRow(props: TableRowProps) {

    const {image, title, categori, item, price, status, id} = props
    const statusClass = cx ({
        'float-start' :true,
        'icon-status' :true,
        'pending':status === 'pending',
        'success':status === 'success',
        'failed':status === 'failed',

    });
    return (
        <tr data-category="pending" className="align-middle">
            <th scope="row">
                <img className="float-start me-3 mb-lg-0 mb-3"
                    src={image}
                    width="80" height="60" alt=""/>
                <div className="game-title-header">
                    <p className="game-title fw-medium text-start color-palette-1 m-0">{title}</p>
                    <p className="text-xs fw-normal text-start color-palette-2 m-0">{categori}</p>
                </div>
            </th>
            <td>
                <p className="fw-medium color-palette-1 m-0">{item}</p>
            </td>
            <td>
                <p className="fw-medium color-palette-1 m-0">
                    <NumberFormat value={price} prefix='Rp. ' displayType='text' thousandSeparator='.' decimalSeparator=',' />  
                </p>
            </td>
            <td>
                <div>
                    <span className={statusClass}></span>
                    <p className="fw-medium text-start color-palette-1 m-0 position-relative">
                        {status}</p>
                </div>
            </td>
            <td>
                <Link href={`/member/transaction/${id}`}>
                {/* <Link href="/member/transaction/detail"> */}
                    <a className="btn btn-status rounded-pill text-sm">Details</a>
                </Link>
            </td>
        </tr>
    )
}
