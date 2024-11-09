import CalenderBox from "./calenderBox.tsx";
import "./calendarsideBar.css"
import {useState} from "react";

type calenderSideBarProps = {
    schedule ?: any
}

const company = ['Binford Ltd.', 'Astro', 'Notion', 'Google Calender']

export default function CalenderSideBar({schedule}: calenderSideBarProps) {

    const styleSet = (company) => {
        switch (company) {
            case 'Binford Ltd.' :
                return '#2982FF'
            case 'Astro' :
                return '#FFC229'
            case 'Notion' :
                return '#FF5151'
            case 'Google Calender':
                return '#00E984'
            default:
                return '#FFFFFF' // default color if no match
        }
    }

    return (
        <div className="calendarsideBar-container">
            <CalenderBox schedule={schedule} />
            <button className="calendarsideBar-button">Create Event</button>
            <div style={{display: 'flex', flexDirection: 'column', alignItems:"flex-start", width: '218px', gap:"12px"}}>
                {company.map(company => (
                    <div key={company} style={{display: 'flex', gap:"4px", alignItems:"center", justifyContent:"center"}}>
                        <p style={{fontSize:"12px", color: styleSet(company)}}>●</p>
                        <p style={{color:"white", fontSize:"12px"}}>{company}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
