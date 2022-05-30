import styles from "../styles/Link.module.css";
import NextLink from "next/link";
import classNames from "classnames";

const Link: React.FC<{
    children: React.ReactNode;
    href: string;
    isActive?: boolean;
}> = ({ children, isActive, href }) => (
    <NextLink href={href}>
        <div
            className={classNames(styles.link, {
                [styles.active]: isActive ?? false,
            })}
        >
            {children}
        </div>
    </NextLink>
);

export default Link;
