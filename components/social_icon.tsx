import Image from "next/image";
import styles from "../styles/SocialIcon.module.css";

const SocialIconSize = 20;

const SocialIcon = ({href, src, alt}: {href: string, src: string, alt: string}) => (
    <a href={href} target="_blank" rel="noreferrer" className={styles['social-icon']}>
        <Image src={src} alt={alt} width={SocialIconSize} height={SocialIconSize} />
    </a>
)

export default SocialIcon;
