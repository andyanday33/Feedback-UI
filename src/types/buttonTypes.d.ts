declare interface IButtonProps {
    children: React.ReactNode,
    version?: number,
    type?: "button" | "submit" | "reset" | undefined,
    isDisabled?: boolean,
}