interface FooterProps {
    className?: string
}

const Footer: React.FC<FooterProps> = ({ className }) => {
    return (
        <div className={className}>
            <h1>
                teddytodos.one by{" "}
                <a
                    href="https://github.com/kahleryasla/teddy-todos"
                    className="text-primary"
                >
                    kahleryasla
                </a>
            </h1>
        </div>
    )
}

export default Footer
