import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";   // ✅ bring useSelector
import "./RegistrationForm.css";

const RegistrationForm = ({ onClose }) => {
    // ✅ get user and my_course from redux
    const { user } = useSelector((state) => state.user);
    const { my_course } = useSelector((state) => state.myCourse);
    const [members, setMembers] = useState([]);
    const [problemStatement, setProblemStatement] = useState("");
    const [description, setDescription] = useState("");
    const [teamName, setTeamName] = useState("");


    const [leadStudent, setLeadStudent] = useState({
        fullName: "",
        college: "",
        email: "",
    });

    const [teamMembers, setTeamMembers] = useState([
        { name: "", college: "", email: "" },


    ]);

    // ✅ pre-fill when redux user data is available
    useEffect(() => {
        if (user) {
            setLeadStudent((prev) => ({
                ...prev,
                fullName: user?.name || "",
                email: user?.email || "",
                college: user?.college.name || "",
            }));
        }
    }, [user, my_course]);

    const handleAddMember = () => {
        if (teamMembers.length < 4) {
            setTeamMembers([...teamMembers, { name: "", college: "", email: "" }]);
        }
    };

    const handleRemoveMember = (index) => {
        setTeamMembers((prev) => prev.filter((_, i) => i !== index));
    };

    const handleChange = (index, field, value) => {
        const updatedMembers = [...teamMembers];
        updatedMembers[index][field] = value;
        setTeamMembers(updatedMembers);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted", { leadStudent, teamMembers });
        onClose();
    };

    // ✅ Save Registration
    const handleSaveRegistration = () => {
        const registrationData = {
            teamName,
            leadStudent,
            members,
            problemStatement,
            description,
        };

        console.log("Team Registration:", registrationData);
        alert("Registration saved (check console)");
    };


    return (
        <div className="modal-overlay">
            <div className="modal-container">
                {/* Close Button */}
                <button onClick={onClose} className="close-btn">✖</button>

                <h2 className="modal-title">Register Your Team</h2>
                <p className="modal-subtitle">
                    Pre-filled details where possible. You can edit anytime before submission.
                </p>

                <form onSubmit={handleSubmit} className="form-container">
                    <div className="form-grid">
                        {/* Lead Student */}
                        <div className="form-section">

                            <h3 className="section-title">Team Name</h3>
                            <input
                                type="text"
                                placeholder="Team Name e.g., ByteBandits"
                                className="input-box"
                                value={teamName}
                                onChange={(e) => setTeamName(e.target.value)}
                            />

                            <h3 className="section-title">Lead Student</h3>
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="input-box"
                                value={leadStudent.fullName}
                                onChange={(e) =>
                                    setLeadStudent({ ...leadStudent, fullName: e.target.value })
                                }
                            />
                            <input
                                type="text"
                                placeholder="College"
                                className="input-box"
                                value={leadStudent.college}
                                onChange={(e) =>
                                    setLeadStudent({ ...leadStudent, college: e.target.value })
                                }
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="input-box"
                                value={leadStudent.email}
                                onChange={(e) =>
                                    setLeadStudent({ ...leadStudent, email: e.target.value })
                                }
                            />

                        </div>

                        {/* Problem Statement */}
                        <div className="form-section">
                            <h3 className="section-title">Problem Statement</h3>
                            <select
                                className="input-box"
                                value={problemStatement}
                                onChange={(e) => setProblemStatement(e.target.value)}
                            >
                                <option value="">Choose a problem</option>
                                <option value="Problem 1">Problem 1</option>
                                <option value="Problem 2">Problem 2</option>
                            </select>

                            <textarea
                                className="input-box"
                                placeholder="Select a problem from the list above."
                                rows={5}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            ></textarea>

                        </div>
                    </div>

                    {/* Team Members */}
                    <div className="team-members">
                        <h3 className="section-title">Team Members</h3>
                        {teamMembers.map((member, index) => (
                            <div key={index} className="team-member-row">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="input-box"
                                    value={member.name}
                                    onChange={(e) => handleChange(index, "name", e.target.value)}
                                />
                                <input
                                    type="text"
                                    placeholder="College"
                                    className="input-box"
                                    value={member.college}
                                    onChange={(e) => handleChange(index, "college", e.target.value)}
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="input-box"
                                    value={member.email}
                                    onChange={(e) => handleChange(index, "email", e.target.value)}
                                />
                                <button
                                    type="button"
                                    className="remove-btn"
                                    onClick={() => handleRemoveMember(index)}
                                >
                                    Remove
                                </button>
                            </div>
                        ))}

                        {teamMembers.length < 4 && (
                            <button
                                type="button"
                                onClick={handleAddMember}
                                className="add-btn"
                            >
                                Add Member
                            </button>
                        )}
                    </div>

                    {/* Save Button */}
                    <div className="submit-container">
                        <button type="submit" className="submit-btn" onClick={handleSaveRegistration}>
                            Save Registration
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegistrationForm;
