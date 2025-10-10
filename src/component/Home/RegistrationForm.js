import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";   // ✅ bring useSelector
import "./RegistrationForm.css";
import { registerTeam } from "../../actions/courseAction";

const RegistrationForm = ({ onClose, problem }) => {
    const slugify = (str) =>
        str
            .toLowerCase()
            .replace(/ /g, "-")
            .replace(/[^\w-]+/g, "");

    // Hardcoded problems - These come from Backend
    const problems = [
        { slug: "gen-ai-builder---xpress", name: "Gen AI Builder - Xpress", description: problem?.course_description },
        { slug: "problem-1", name: "Problem 1", description: "Description for Problem 1." },
        { slug: "problem-2", name: "Problem 2", description: "Description for Problem 2." },
    ];

    const dispatch = useDispatch();
    // ✅ get user and my_course from redux
    const { user } = useSelector((state) => state.user);
    const { my_course } = useSelector((state) => state.myCourse);
    // const [members, setMembers] = useState([]);
    const [problemStatement, setProblemStatement] = useState("");
    const [description, setDescription] = useState("");
    const [teamName, setTeamName] = useState("");
    const [errors, setErrors] = useState({});

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
            setProblemStatement(slugify(problem?.course_name))

            if (problem?.course_description) {
                setDescription(problem.course_description);
            }
        }
    }, [user, my_course, problem]);

    useEffect(() => {
        const selectedProblem = problems.find((p) => p.slug === problemStatement);
        if (selectedProblem) {
            setDescription(selectedProblem.description || "");
            if (errors.description) {
                setErrors((prev) => ({ ...prev, description: "" }));
            }
        }
    }, [problemStatement, errors.description]);

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
        const newErrors = {};

        if (!teamName.trim()) newErrors.teamName = "Team Name cannot be empty";
        if (!problemStatement.trim()) newErrors.problemStatement = "Please select a problem";
        if (!problems.find((p) => p.slug === problemStatement)?.description?.trim()) 
            newErrors.description = "Description cannot be empty";
        if (!leadStudent.fullName.trim()) newErrors.fullName = "Full Name cannot be empty";
        if (!leadStudent.college.trim()) newErrors.college = "College cannot be empty";
        if (!leadStudent.email.trim()) newErrors.email = "Email cannot be empty";

        setErrors(newErrors);

        // ✅ if any errors, stop here
        if (Object.keys(newErrors).length > 0) return;

        const validMembers = teamMembers.filter(
            (m) => m.name.trim() || m.email.trim() || m.college.trim()
        );

        const registrationData = {
            teamName,
            teamLeader : {
                name: leadStudent.fullName,
                email: leadStudent.email,
                college: leadStudent.college,
            },
            problemStatement : {
                title:  problems.find((p) => p.slug === problemStatement)?.name,
                description: description ,
            },
        };

        if(validMembers.length > 0) {
            registrationData.teamMembers = validMembers;
        }

        console.log("Team Registration:", registrationData);
        dispatch(registerTeam(registrationData))
        onClose();
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
                                className={`input-box ${errors.teamName ? "input-error" : ""}`}
                                value={teamName}
                                onChange={(e) => {
                                    setTeamName(e.target.value);
                                    if (errors.teamName) {
                                        setErrors((prev) => ({ ...prev, teamName: "" }));
                                    }
                                }}
                            />
                            {errors.teamName && <p className="error-text">{errors.teamName}</p>}

                            <h3 className="section-title">Lead Student</h3>
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="input-box"
                                value={leadStudent.fullName}
                                onChange={(e) => {
                                    setLeadStudent({ ...leadStudent, fullName: e.target.value })
                                    if (errors.fullName) {
                                        setErrors((prev) => ({ ...prev, fullName: "" }));
                                    }
                                }}
                            />
                            {errors.fullName && <p className="error-text">{errors.fullName}</p>}
                            <input
                                type="text"
                                placeholder="College"
                                className="input-box"
                                value={leadStudent.college}
                                onChange={(e) => {
                                    setLeadStudent({ ...leadStudent, college: e.target.value })
                                    if(errors.college) {
                                        setErrors((prev) => ({...prev, college: ""}))
                                    }
                                }}
                            />
                            {errors.college && <p className="error-text">{errors.college}</p>}
                            <input
                                type="email"
                                placeholder="Email"
                                className="input-box"
                                value={leadStudent.email}
                                onChange={(e) => {
                                    setLeadStudent({ ...leadStudent, email: e.target.value })
                                    if(errors.email){
                                        setErrors((prev) => ({...prev, email: ""}))
                                    }
                                }}
                            />
                            {errors.email && <p className="error-text">{errors.email}</p>}

                        </div>

                        {/* Problem Statement */}
                        <div className="form-section">
                            <h3 className="section-title">Problem Statement</h3>
                            <select
                                className="input-box"
                                value={problemStatement}
                                onChange={(e) => {
                                    setProblemStatement(e.target.value);
                                    if (errors.problemStatement) {
                                        setErrors((prev) => ({ ...prev, problemStatement: "" }));
                                    }
                                }}
                            >
                                <option value="">Choose a problem</option>
                                {problems.map((p) => (
                                    <option key={p.slug} value={p.slug}>
                                    {p.name}
                                    </option>
                                ))}
                            </select>
                            {errors.problemStatement && <p className="error-text">{errors.problemStatement}</p>}

                            <textarea
                                className="input-box"
                                placeholder="Select a problem from the list above."
                                rows={5}
                                value={description}
                                readOnly
                            ></textarea>
                            {errors.description && <p className="error-text">{errors.description}</p>}

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
                        <button type="submit" className="submit-btn">
                            Save Registration
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegistrationForm;
