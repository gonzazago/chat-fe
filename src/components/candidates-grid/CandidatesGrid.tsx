import { CandidateCardInfo } from '@/interfaces/Candidate';
import React from 'react'
import { CandidateCard } from "@/components";


interface Props {
    candidates: CandidateCardInfo[];
}
export const CandidatesGrid = ({ candidates }: Props) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 p-3 justify-items-center auto-cols-max">
            {candidates.map(candidate =>
                <CandidateCard key={candidate.id} candidate={candidate} />
            )}

        </div>
    )
}


