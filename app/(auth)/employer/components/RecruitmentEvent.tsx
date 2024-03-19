// RecruitmentEvent.tsx

import React, { useState } from 'react';

const RecruitmentEvent: React.FC = () => {
    const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

    const handleRegistrationToggle = () => {
        setIsRegistrationOpen(!isRegistrationOpen);
    };

    const title = "Tech Recruitment Fair";
    const date = "March 15, 2024";
    const description = "Join us for an exciting tech recruitment fair where top companies will be looking for talented individuals.";

    return (
        <div>
            <h2>{title}</h2>
            <p>Date: {date}</p>
            <p>Description: {description}</p>

            <button onClick={handleRegistrationToggle}>
                {isRegistrationOpen ? 'Close Registration' : 'Open Registration'}
            </button>

            {isRegistrationOpen && (
                <div>
                    {/* Include your registration form or any additional registration information here */}
                    <p>Registration Form Goes Here</p>
                </div>
            )}
        </div>
    );
};

export default RecruitmentEvent;

