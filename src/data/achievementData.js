import uiImage from "../assets/png/uiImage.avif"
import google from "../assets/png/googleImage.avif"
import security from "../assets/png/security.webp"
export const achievementData = {
    bio : "Achievements are the milestones that define the journey of growth, perseverance, and dedication. They represent the culmination of hard work, learning, and overcoming challenges. Every achievement, big or small, reflects the ability to push boundaries, take initiative, and strive for excellence. It’s not just about reaching a goal but embracing the journey that transforms us into better, more capable individuals, ready to take on the next challenge with even greater enthusiasm and determination. Celebrate each success as a testament to the power of persistence and continuous improvement.",
    achievements : [
        {
            id : 1,
            title : 'Google Data Analytics',
            details : 'Certified in data analysis with expertise in data cleaning, analysis, and visualization using tools like SQL, Tableau, and R. Skilled in turning data into actionable insights to drive business decisions.',
            date : 'December 02, 2022',
            // field : 'Automation',
            image : google
        },
        {
            id : 2,
            title : 'UI/UX Certification',
            details : 'Certified in UI/UX design, skilled in creating user-centered interfaces and experiences. Proficient in wireframing, prototyping, and user research to design intuitive and visually appealing digital products.',
            date : 'Aug, 2024',
            
            image : uiImage
        },
        {
            id : 3,
            title : 'Privacy & Security in online social media',
            details : 'Certified in Privacy & Security for Online Social Media, focused on protecting user data, ensuring safe online interactions, and understanding privacy challenges. Skilled in safeguarding digital identities and maintaining secure social media environments.',
            date : 'Jan-Apr 2023',
            // field : 'Automation',
            image : security
        }

    ]
}


// Do not remove any fields.
// Leave it blank instead as shown below.

/*

export const achievementData = {
    bio : "",
    achievements : []
}

*/