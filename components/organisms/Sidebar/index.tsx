import { useRouter } from 'next/router';
import React from 'react'
import Footer from './Footer'
import MenuItem from './MenuItem'
import Profile from './Profile'
import Cookies from 'js-cookie'

interface SidebarProps{
    activeMenu: 'overview' | 'transaction' | 'settings'
}

export default function Sidebar(props: SidebarProps) {

    const {activeMenu} = props;
    const router = useRouter();

    const onLogout = () => {
        Cookies.remove('token');
        router.push('/')
    }
    
    return (
        <section className="sidebar">
        <div className="content pt-50 pb-30 ps-30">
            <Profile />
            <div className="menus">
                <MenuItem title='Overview' icon='ic-menu-overview'  href='/' active={activeMenu === 'overview'}/>
                <MenuItem title='Transactions'  icon='ic-menu-transaction' href='/member/transaction'  active={activeMenu === 'transaction'}/>
                <MenuItem title='Messages'  icon='ic-menu-message' href='/member'/>
                <MenuItem title='Card'  icon='ic-menu-card' href='/member'/>
                <MenuItem title='Rewards'  icon='ic-menu-reward' href='/member'/>
                <MenuItem title='Settings'  icon='ic-menu-settings' href='/member/edit-profile'  active={activeMenu === 'settings'}/>
                <MenuItem title='Log Out'  icon='ic-menu-logout' onClick={onLogout}/>
            </div>
            <Footer />
        </div>
    </section>
    )
}
