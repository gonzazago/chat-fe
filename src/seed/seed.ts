import { CandidateCardInfo } from "@/interfaces/Candidate"

const socials = [
    { icon: 'twitter', link: 'https://twitter.com' },
    { icon: 'faceboo´k', link: 'https://facebook.com' },
    { icon: 'dribbble', link: 'https://dribbble.com' },
    { icon: 'linkedin', link: 'https://linkedin.com' },
]

export const candidates: CandidateCardInfo[] = [
    {
        id: "1",
        name: "John Doe",
        location: "New York, USA",
        linkedinUrl: "https://www.linkedin.com/in/johndoe",
        xUrl: "https://www.x.com/johndoe",
        githubUrl: "https://github.com/johndoe",
        position: "Software Engineer",
        strengths: "Problem-solving, teamwork, leadership",
        weaknesses: "Public speaking, time management",
        feedback: "John is a highly skilled developer with a strong work ethic."
    },
    {
        id: "2",
        name: "Jane Smith",
        location: "London, UK",
        linkedinUrl: "https://www.linkedin.com/in/janesmith",
        xUrl: "https://www.x.com/janesmith",
        githubUrl: "https://github.com/janesmith",
        position: "UX Designer",
        strengths: "Creativity, empathy, user research",
        weaknesses: "Attention to detail, time management",
        feedback: "Jane is a talented UX designer with a strong focus on user experience."
    },
    {
        id: "3",
        name: "Michael Johnson",
        location: "Sydney, Australia",
        linkedinUrl: "https://www.linkedin.com/in/michaeljohnson",
        xUrl: "https://www.x.com/michaeljohnson",
        githubUrl: "https://github.com/michaeljohnson",
        position: "Data Scientist",
        strengths: "Data analysis, machine learning, Python",
        weaknesses: "Communication, presentation skills",
        feedback: "Michael is a skilled data scientist with a passion for uncovering insights."
    },
    {
        id: "4",
        name: "Emily Brown",
        location: "Toronto, Canada",
        linkedinUrl: "https://www.linkedin.com/in/emilybrown",
        xUrl: "https://www.x.com/emilybrown",
        githubUrl: "https://github.com/emilybrown",
        position: "Project Manager",
        strengths: "Organization, leadership, communication",
        weaknesses: "Delegation, conflict resolution",
        feedback: "Emily is an effective project manager with a strong focus on delivering results."
    },
    {
        id: "5",
        name: "David Lee",
        location: "Berlin, Germany",
        linkedinUrl: "https://www.linkedin.com/in/davidlee",
        xUrl: "https://www.x.com/davidlee",
        githubUrl: "https://github.com/davidlee",
        position: "Marketing Manager",
        strengths: "Creativity, communication, strategy",
        weaknesses: "Public speaking, time management",
        feedback: "David is a creative and strategic marketing manager."
    },
    {
        id: "6",
        name: "Olivia Carter",
        location: "Paris, France",
        linkedinUrl: "https://www.linkedin.com/in/oliviacarter",
        xUrl: "https://www.x.com/oliviacarter",
        githubUrl: "https://github.com/oliviacarter",
        position: "Sales Manager",
        strengths: "Sales, negotiation, customer relationship management",
        weaknesses: "Public speaking, time management",
        feedback: "Olivia is a skilled sales manager with a strong track record."
    },
    {
        id: "7",
        name: "William Harris",
        location: "Tokyo, Japan",
        linkedinUrl: "https://www.linkedin.com/in/williamharris",
        xUrl: "https://www.x.com/williamharris",
        githubUrl: "https://github.com/williamharris",
        position: "UI/UX Designer",
        strengths: "Design, user experience, prototyping",
        weaknesses: "Communication, time management",
        feedback: "William is a talented UI/UX designer with a strong eye for detil."
    },
]