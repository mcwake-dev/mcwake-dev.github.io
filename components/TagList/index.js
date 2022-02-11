import styles from "./TagList.module.css";

export default function TagList({taglist}) {
    return (
        <>
            Tagged with: {taglist.map((tag, index) => 
                <span className={styles.tag} key={index}>{tag}</span>
            )}
        </>
    )
}