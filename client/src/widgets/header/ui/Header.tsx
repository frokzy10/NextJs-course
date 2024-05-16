import React, {FC} from 'react';
import cls from "./Header.module.scss"
import Link from "next/link";
import {menu} from "@/widgets/header/types/menu.data";
import NavItem from "@/widgets/header/types/NavItem";

const Header: FC = () => {
    return (
        <header className={cls.header}>
            <div className={cls.header_container}>
                <Link href="/" className={cls.headerHomeLink}>
                    ECommerce
                </Link>
                <nav>
                    {menu.map(i => (
                        <NavItem item={i} key={i.link}/>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;