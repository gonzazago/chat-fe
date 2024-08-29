import { getCandidates } from "@/actions/get-candidates";
import { CandidatesGrid, Search } from "@/components";





export default async function Home() {

    return (
        <>
            <div className="flex items-center justify-center min-h-screen background-custom">
                <div className="relative z-10 flex flex-col items-center">
                    <h1 className="mb-4 text-3xl font-bold text-white">Encuentra tu candidatoo</h1>
                    <div className="flex items-center p-4 bg-white rounded-lg shadow-lg">
                        <Search />
                    </div>
                </div>
            </div>

        </>
    )
}
