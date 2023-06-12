import React from 'react'
import cn from 'classnames'
import styles from './_card.module.scss';

interface IProps {
    children?: React.ReactNode;
    classname?: string;
}

export const Base = ({ children, classname = '' }: IProps) => {
    return (
        <section className={cn(styles['card-container'], classname)}>
            {children}
        </section>
    )
}

export const Title = ({ children, classname = '' }: IProps) => {
    return (
        <header className={cn(styles['card-container-title'], classname)}>
            {children}
        </header>
    )
}


export const Body = ({ children, classname = '' }: IProps) => {
    return (
        <div className={cn(styles['card-container-body'], classname)}>
            {children}
        </div>
    )
}

export const Footer = ({ children, classname = '' }: IProps) => {
    return (
        <div className={cn(styles['card-container-footer'], classname)}>
            {children}
        </div>
    )
}

