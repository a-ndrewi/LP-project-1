type FooterProps = {
    text: string;
};

export default function Footer({ text }: FooterProps) {
    return (
        <footer className="w-full bg-surface">
            <div className="px-4 py-4 md:px-6">
                <p className="text-center text-body">{text}</p>
            </div>
        </footer>
    )
}