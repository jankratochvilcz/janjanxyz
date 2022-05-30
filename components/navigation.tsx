import classNames from "classnames";
import { useRouter } from "next/router";
import styles from "../styles/Navigation.module.css";
import Link from "./link";

const Navigation = () => {
    const router = useRouter();

    const routes: { path: string; title: string }[] = [
        {
            path: "/blog",
            title: "Blog"
        },
        {
            path: "/projects",
            title: "Projects"
        }
    ];

    return (
        <div className={styles["header-root"]}>
            <Link href="/"><div className={styles.logo}>Jan Kratochvil</div></Link>
            <ul className={styles.navigation}>
                {routes.map(({path, title}) => (
                    <li key={path}>
                        <Link href={path} isActive={router.pathname === path}>{title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navigation;
