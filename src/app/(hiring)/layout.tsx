import { TopMenu } from "@/components"




export default function HiringLayout({children,}: {
    children: React.ReactNode
}) {
    return (
        <main className="min-h-screen">
            <TopMenu/>
            <div className={"px-0 h-auto"}>
                {children}
            </div>
        </main>
    )
}