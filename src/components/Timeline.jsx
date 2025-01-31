import React from 'react';
import { Chrono } from 'react-chrono';

const items = [
    {
        title: "Jun. 2018",
        cardTitle: "Graduation",
        cardSubtitle: "Graduation with IM bachnlor degree",
        cardDetailedText: "Learning basic Coding knowledge and digital security. Made a website for care attendant who was hired for the elder ",
    },
    {
        title: "Apr. 2019",
        cardTitle: (
            <a href="https://www.unidyna.com/">
            Unidyna - Small size systems integration company
            </a>
        ),
        cardSubtitle: "First Job",
        cardDetailedText: `
            The company's flagship product is a comprehensive management system that empowers salespeople to efficiently monitor and track collaboration across all organizational levels.
            My responsibility includes maintaining projects from different companies and developing new features to their requirement. Using PHP as the main language.
        `,
    },
    {
        title: "Jun. 2020",
        cardTitle: (
            <a href="https://www.cbesg.com/">
            CBES - Cross-Border E-commerce Service
            </a>
        ),
        cardSubtitle: "Second Job",
        cardDetailedText: "The company owns a variety of the type e-commercial websites. We use Magento for the web page and Laravel for the system console that helps our sales trace prices, setsetting events, etc.",
    },
    {
        title: "Sep. 2022",
        cardTitle: (
            <a href="https://www.cbesg.com/">
            TWDD - designated driving service
            </a>
        ),
        cardSubtitle: "Third Job",
        cardDetailedText: "This enterprise offer designated driving service for people who can not driving at that moment. I am participant for re-build our data structure. Also take charge for the matching mechanism for our service.",
    },
    {
        title: "Feb. 2025",
        cardTitle: "Australia Working holiday",
        cardDetailedText: "Have been written some side project. Now excited about whole new expirience for the new life.",
    }
];

const HorizontalTimeline = () => {


    return (

        <Chrono
            className="custom-chrono"
            items={items}
            theme={{
                primary: "#7E57C2",            // Softer purple for primary elements
                secondary: "#F06292",          // Pastel pink for secondary highlights
                cardBgColor: "#FFF9C4",        // Soft pastel yellow for card background
                cardForeColor: "#333333",      // Dark gray for card text
                titleColor: "white",           // Keep as white for titles
                titleColorActive: "black",     // Keep as black for active titles
                toolbarBgColor: "#263238",     // Blue-gray for toolbar background
                toolbarBtnBgColor: "#E57373",  // Softer red for toolbar buttons
                toolbarTextColor: "white",     // White for text on toolbar
            }}
            mode="HORIZONTAL"
            cradWidth={150}
            itemWidth={300}
            showSingle
            disableNavOnKey
            enableLayoutSwitch={false}
        />

    );
};

export default HorizontalTimeline;