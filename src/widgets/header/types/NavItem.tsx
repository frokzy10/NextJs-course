'use client'
import React, {FC} from 'react';
import {MenuItem} from "@/widgets/header/types/menuItem";
import Link from "next/link";
import cls from "./NavItem.module.scss";
import cn from "clsx"
import {usePathname} from "next/navigation";

interface INavItem {
    item: MenuItem
}

const NavItem: FC<INavItem> = ({item}) => {
    const pathname = usePathname();
    return (
        <ul className={cls.navItem}>
            <Link href={item.link} className={cn(cls.link,
                pathname === item.link ? cls.active : cls.link
            )}>
                {item.name}
            </Link>
        </ul>
    );
};

export default NavItem;