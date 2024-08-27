import { CandidateCardInfo } from '@/interfaces/Candidate'
import React from 'react'
import { FaStar, FaThumbsDown, FaThumbsUp, FaTwitter } from 'react-icons/fa'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'

interface Props {
    candidate: CandidateCardInfo;
}
export const CandidateCard = ({ candidate }: Props) => {
    return (
        <div className="bg-white shadow-xl rounded-lg overflow-hidden w-[340px] h-auto mt-5">
            <header className={`w-full background-card text-white p-6 rounded-lg shadow-lg mx-auto`}>
                <div className="flex flex-col items-center">
                    <img
                        src={`/user_avatar.png`}
                        alt={`user's profile`}
                        className=" p-1 w-24 h-24 rounded-full mb-4 shadow-sm shadow-gray-50 border-double border-2"
                    />
                    <h2 className="text-xl font-semibold">{candidate.name}</h2>
                    <p className="text-sm">{candidate.location}</p>
                    <div className="flex space-x-4 mt-4 mb-2">
                        <a href="#" className="text-white">
                            <FaLinkedin />
                        </a>
                        <a href="#" className="text-white">
                            <FaTwitter />
                        </a>
                        <a href="#" className="text-white">
                            <FaGithub />
                        </a>
                    </div>
                    <div className="bg-white w-[90%] h-[100px] px-2 pt-3 pb-2 m-auto text-center rounded-md shadow-sm shadow-gray-50">
                        <p className="mt-6 text-center text-black">{candidate.position}</p>
                        <button className={`px-6 py-2 mt-4 rounded-full bg-gradient-to-r from-sky-600 to-gray-300 `}>Ver Perfil</button>
                    </div>
                </div>

            </header>
            <div className="p-4">
                <div className="flex justify-between mt-4">
                    <div className="flex flex-col items-le space-x-2">
                        <div className="bg-green-200 w-[100px] inline-flex text-green-700 rounded-full px-2 py-1 text-sm">
                            <FaThumbsUp className="mr-1 mt-1" />
                            <h3>Fortalezas</h3>

                        </div>
                        <p className="">{candidate.strengths}</p>
                        <div className="bg-red-200 text-red-700 w-[150px] inline-flex rounded-full px-2 py-1 text-sm">
                            <FaThumbsDown className="mr-1 mt-1" />
                            <h3>Debilidades</h3>
                        </div>
                        <p>{candidate.weaknesses}</p>
                        <div className="bg-red-200 text-gray-800 w-[150px] inline-flex rounded-full px-2 py-1 text-sm">
                            <h3>Feedback</h3>
                        </div>
                        <p>{candidate.feedback}</p>
                    </div>
                    <div className="text-xl">
                        <FaStar className="text-yellow-500 mr-1" /> {3}/5
                    </div>
                </div>
            </div>
        </div>
    )
}
