import {ButtonProps} from './types'


 import './Button.css';

export const Button = ({handleToast, label}: ButtonProps) => {
    return (
        <button className="button" onClick={handleToast}>{label}</button>
    )
}
