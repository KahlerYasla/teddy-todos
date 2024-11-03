interface FooterProps {
    className?: string
}

const Footer: React.FC<FooterProps> = ({ className }) => {
    return (
        <div className={className}>
            <h1>Footer</h1>
        </div>
    )
}

export default Footer
