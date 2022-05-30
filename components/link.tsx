import styles from "../styles/Link.module.css";
import NextLink from "next/link";
import classNames from "classnames";

const Link: React.FC<{
    children: React.ReactNode;
    href: string;
    isActive?: boolean;
    className?: string
}> = ({ children, isActive, href, className }) => (
    <NextLink href={href}>
        <div
            className={classNames(styles.link, className, {
                [styles.active]: isActive ?? false,
            })}
        >
            {children}
        </div>
    </NextLink>
);

export default Link;
