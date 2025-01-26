import React from 'react';

const Footer = ({ onOpenModal }) => {

    const workIcons = [
        { path: "/profolio/public/images/terminal.svg", alt: "terminal", text: "Terminal" },
        { path: "/profolio/public/images/picture.svg", alt: "picture", text: "Picture" },
        { path: "/profolio/public/images/calendar.svg", alt: "calendar", text: "Calendar" },
        { path: "/profolio/public/images/stickies.png", alt: "note", text: "Stickies" },
        { path: "/profolio/public/images/book.png", alt: "contact", text: "Contact" },
    ]

    const icons = [
        { path: "/profolio/public/images/dockerIcon.svg", alt: "Docker", text: "Docker" },
        { path: "/profolio/public/images/sourcetree.svg", alt: "Sourcetree", text: "Sourcetree" },
        { path: "/profolio/public/images/postman.svg", alt: "Postman", text: "Postman" },
    ];

    return (
        <footer>
            <div className="fixed absolute left-1/2 -translate-x-1/2 bottom-0 bg-gray-400 bg-opacity-50 px-4 mb-4 py-2 flex justify-center items-center w-80 rounded-lg space-x-4">

                {workIcons.map((icon, index) => (
                    <div key={index} className="relative group">
                        <img onClick={() => onOpenModal(icon.alt)} src={icon.path} alt={icon.alt} className="w-10 cursor-pointer" />
                        <div className="bubble-text">{icon.text}</div>
                    </div>
                ))}

                {icons.map((icon, index) => (
                    <div key={index} className="relative group">
                        <img src={icon.path} alt={icon.alt} className="w-10 cursor-pointer" />
                        <div className="bubble-text">{icon.text}</div>
                    </div>
                ))}
            </div>
        </footer>
    );
};

export default Footer