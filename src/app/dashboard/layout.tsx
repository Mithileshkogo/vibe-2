export default function Layout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen">
            <div className="grow h-auto overflow-y-scroll ml-[75px]">{children}</div>
        </div>
    );
}
