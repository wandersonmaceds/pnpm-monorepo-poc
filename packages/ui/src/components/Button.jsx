
export const Button = ({ content = '', onClick = () => {} }) => {
    return <button type="button" onClick={onClick}>{content}</button>;
}
