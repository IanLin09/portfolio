// ImageWithModal.jsx
import React from "react";
import { TypeAnimation } from 'react-type-animation';
import Modal from './Modal.jsx'

const Terminal = ({
    isOpen,
    onCloseModal
}) => {

    const modalStyle = "container min-w-80 max-h-128 bg-black w-6/12 h-2/3 text-green-500 rounded-md shadow-lg font-mono text-sm ax-w-screen-md"
    return (
        <div>
            <Modal isOpen={isOpen} onClose={() => onCloseModal("terminal")} modalStyle={modalStyle}>

                <img className="w-2/3 h-auto object-contain" src="https://res.cloudinary.com/dsftikc0a/image/upload/v1737887814/profolio/s48hij4owovtlwsalpl7.png" />
                <div className="pt-4">

                    <TypeAnimation
                        style={{ whiteSpace: 'pre-line', height: '180px', display: 'block' }}
                        sequence={[
                            `My name is Chun Yi Lin \nCall me Ian is fine.\n You are visiting my MacOS-like portfolio website.\n
                            Since you have not close this page so I assume you have some interest in me.\n Here's a littie tips help you find out more information:\n
                            I put a photo of me in Picture.
                            Sharing my job experience on Calender.
                            Stickies will show you which kind of project I had or have been made.
                            Last but not least, fews contact info on Contact icon.
                            `,
                            2000,
                            
                        ]}
                        speed={30}
                    />

                </div>
            </Modal>
        </div>
    );
}

export default Terminal