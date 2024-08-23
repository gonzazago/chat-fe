"use client"
import { useEffect, useState } from 'react';
import { CandidatesGrid } from '@/components';
import { getCandidates } from '@/actions/get-candidates';
import { CandidateCardInfo } from '@/interfaces/Candidate';
import { titleFont } from '@/config/fonts';
type Props = {
    params: { id: string }
    searchParams: { [key: string]: string | undefined }
}
export default function SearchPage({ searchParams }: Props) {
    console.log()


    const [search, setSearch] = useState(searchParams['search'] || '');
    const [candidatesInfo, setCandidates] = useState<CandidateCardInfo[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCandidates = async () => {
            setLoading(true);
            const candidates = await getCandidates(search) as CandidateCardInfo[] // Llama a la función para obtener candidatos
            console.log
            setCandidates(candidates);
            setLoading(false);
        };

        fetchCandidates();
    }, [search]);

    return (
        <div>
            <h1>Candidatos encontrados para tu búsqueda "{search}"</h1>
            {loading ? <h1
                className={` ${titleFont.className} antialiased font-bold text-lg bg-gray-200 animate-pulse `}
            >
                &nbsp;
            </h1> : <CandidatesGrid candidates={candidatesInfo} />}
        </div>
    );
}