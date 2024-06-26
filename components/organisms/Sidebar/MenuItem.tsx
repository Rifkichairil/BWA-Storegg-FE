import Image from 'next/image'
import React from 'react'
import cx from 'classnames'
import classNames from 'classnames';
import Link from 'next/link';

interface MenuItemProps {
    icon: 'ic-menu-overview' | 'ic-menu-transaction' |'ic-menu-message' |'ic-menu-card' |'ic-menu-reward' |'ic-menu-settings' |'ic-menu-logout'
    title: string;
    active?:boolean;
    href: string;
    onClick?: () => void
}

export default function MenuItem(props: Partial<MenuItemProps>) {

    const {title, icon, active, href, onClick} = props;
    const classItem = cx({
        'item' : true,
        'mb-30' : true,
        'active' : active
        
    })
    
    return (
        <div className={classItem} onClick={onClick}>
            <div className="me-3">
                <Image src={`/icon/${icon}.svg`} width={25} height={25} />
            </div>
            <p className="item-title m-0">
                {onClick ? (
                    <a  className="text-lg text-decoration-none">{title}</a>
                ) : (
                <Link href={href}>
                    <a  className="text-lg text-decoration-none">{title}</a>
                </Link>
                )}
            </p>
        </div>
    )
}
