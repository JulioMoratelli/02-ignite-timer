import styles from './Button.module.css'

interface ButtonProps{
    variant?: 'primary' | 'secundary' | 'danger' | 'success';
}


export function Button(variant: ButtonProps){
    return <button className={styles.button}>Enviar</button> 
    
}