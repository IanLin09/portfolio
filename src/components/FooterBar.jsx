import {memo} from 'react';

const Footer = ({ onOpenModal }) => {

    const workIcons = [
        { path: "https://res.cloudinary.com/dsftikc0a/image/upload/v1737887913/profolio/ppvwt9jftgh4lcoy6c2u.svg", alt: "terminal", text: "Terminal" },
        { path: "https://res.cloudinary.com/dsftikc0a/image/upload/v1737887912/profolio/jdk2dlbuo0nrynlc3kii.svg", alt: "picture", text: "Picture" },
        { path: "https://res.cloudinary.com/dsftikc0a/image/upload/v1737886671/profolio/yarainagcxjwvcywidzu.svg", alt: "calendar", text: "Calendar" },
        { path: "https://res.cloudinary.com/dsftikc0a/image/upload/v1737887913/profolio/tpurfiv3znxq40wppmpb.png", alt: "note", text: "Stickies" },
        { path: "https://res.cloudinary.com/dsftikc0a/image/upload/v1737887911/profolio/ja5orzmyihmioqzrbxj3.png", alt: "contact", text: "Contact" },
    ]

    const icons = [
        { path: "https://res.cloudinary.com/dsftikc0a/image/upload/v1737887912/profolio/v3mue0gja5x8hd5bstgn.svg", alt: "Docker", text: "Docker" },
        { path: "https://res.cloudinary.com/dsftikc0a/image/upload/v1737887912/profolio/petsw5ba6z4kobnhieby.svg", alt: "Sourcetree", text: "Sourcetree" },
        { path: "https://res.cloudinary.com/dsftikc0a/image/upload/v1737887912/profolio/i9xtckueqz2wmutogytc.svg", alt: "Postman", text: "Postman" },
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

export default memo(Footer) 