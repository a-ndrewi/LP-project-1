type HeaderProps = {
    title: string;
};

export default function Header({ title }: HeaderProps) {
    return (
        <header className="w-full bg-surface">
            <div className="px-4 py-4 md:px-6">
                <h1 className="text-2xl font-bold text-center text-accent text-2xl">{title}</h1>
            </div>
        </header>
    )
}