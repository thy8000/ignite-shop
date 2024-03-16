export default function Container({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col items-start justify-center min-h-screen">
            {children}
        </div>
    );
}