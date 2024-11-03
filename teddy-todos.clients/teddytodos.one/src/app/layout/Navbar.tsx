interface NavbarProps {
    className?: string
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
    return (
        <div className={className}>
            <h1>Navbar</h1>
        </div>
    )
}

export default Navbar
