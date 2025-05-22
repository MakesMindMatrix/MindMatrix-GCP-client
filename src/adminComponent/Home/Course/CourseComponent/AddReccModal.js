import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import './AddReccModal.css'
import { getBranch, getCollegeList, getUniversity } from "../../../../actions/academicDataAction";

const CourseForm = () => {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        batch_id: "",
        course_name: "",
        course_banner_image: "",
        course_card_image: "",
        course_university: [""],
        course_college: [""],
        course_branch: [""],
        course_semester: [""],
        hero_section: {
            hero_title: "",
            hero_image: "",
            hero_description: "",
            hero_button_content: "",
            hero_button_type: "paid",
        },
        what_you_get_section: {
            points: [""],
        },
        prerequisite_section: {
            points: [""],
        },
        outcome_section: {
            points: [""],
        },
        elective_course_section: {
            cards: [""],
        },
        instructor_section: {
            instructor_name: "",
            instructor_image: "",
            instructor_designation: "",
            instructor_description: "",
        },
        curriculum_section: {
            modules: [{ title: "", description: "" }],
            curriculum_image: "",
        },
        motivation_section: {
            quote: "",
            button_content: "",
            button_type: "paid",
        },
    });
    const { loading, collegeListData, universityData, branchData } = useSelector((state) => state.academicData);

    const handleChange = (e, path) => {
        const keys = path.split(".");
        setFormData((prev) => {
            const copy = { ...prev };
            let nested = copy;
            for (let i = 0; i < keys.length - 1; i++) {
                nested = nested[keys[i]];
            }
            nested[keys.at(-1)] = e.target.value;
            return { ...copy };
        });
    };

    const handleArrayChange = (value, path, index) => {
        const keys = path.split(".");
        setFormData((prev) => {
            const copy = { ...prev };
            let nested = copy;
            for (let i = 0; i < keys.length - 1; i++) {
                nested = nested[keys[i]];
            }
            nested[keys.at(-1)][index] = value;
            return { ...copy };
        });
    };

    const addToArray = (path, defaultValue = "") => {
        const keys = path.split(".");
        setFormData((prev) => {
            const copy = { ...prev };
            let nested = copy;
            for (let i = 0; i < keys.length - 1; i++) {
                nested = nested[keys[i]];
            }
            nested[keys.at(-1)].push(defaultValue);
            return { ...copy };
        });
    };

    const addModule = () => {
        setFormData((prev) => ({
            ...prev,
            curriculum_section: {
                ...prev.curriculum_section,
                modules: [...prev.curriculum_section.modules, { title: "", description: "" }],
            },
        }));
    };

    const handleModuleChange = (value, index, field) => {
        setFormData((prev) => {
            const updatedModules = [...prev.curriculum_section.modules];
            updatedModules[index][field] = value;
            return {
                ...prev,
                curriculum_section: {
                    ...prev.curriculum_section,
                    modules: updatedModules,
                },
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting formData:", formData);
        // send to backend using axios or fetch
    };

    useEffect(() => {
        dispatch(getUniversity())
        dispatch(getBranch())
        dispatch(getCollegeList())
    }, [dispatch])

    return (
        <div className="reccModal_container">
            <form onSubmit={handleSubmit}>
                <h2>Basic Info</h2>
                <div className="reccModal_basicInfo_parent">
                    <input placeholder="Batch ID" value={formData.batch_id} onChange={(e) => handleChange(e, "batch_id")} />
                    <input placeholder="Course Name" value={formData.course_name} onChange={(e) => handleChange(e, "course_name")} />
                    <input placeholder="Banner Image URL" value={formData.course_banner_image} onChange={(e) => handleChange(e, "course_banner_image")} />
                    <input placeholder="Card Image URL" value={formData.course_card_image} onChange={(e) => handleChange(e, "course_card_image")} />
                </div>

                <h3>Course University</h3>
                {formData.course_university.map((item, idx) => (
                    <select
                        key={idx}
                        value={item}
                        onChange={(e) => handleArrayChange(e.target.value, "course_university", idx)}
                    >
                        <option value="">Select University</option>
                        {universityData?.data?.map((uni) => (
                            <option key={uni._id} value={uni._id}>{uni.name}</option>
                        ))}
                    </select>
                ))}
                <button type="button" onClick={() => addToArray("course_university")}>+ Add University</button>

                <h3>Course College</h3>
                {formData.course_college.map((item, idx) => (
                    <select
                        key={idx}
                        value={item}
                        onChange={(e) => handleArrayChange(e.target.value, "course_college", idx)}
                    >
                        <option value="">Select College</option>
                        {collegeListData?.map((college) => (
                            <option key={college._id} value={college._id}>{college.name}</option>
                        ))}
                    </select>
                ))}
                <button type="button" onClick={() => addToArray("course_college")}>+ Add College</button>

                <h3>Course Branch</h3>
                {formData.course_branch.map((item, idx) => (
                    <select
                        key={idx}
                        value={item}
                        onChange={(e) => handleArrayChange(e.target.value, "course_branch", idx)}
                    >
                        <option value="">Select Branch</option>
                        {branchData?.data?.map((branch) => (
                            <option key={branch._id} value={branch._id}>{branch.name}</option>
                        ))}
                    </select>
                ))}
                <button type="button" onClick={() => addToArray("course_branch")}>+ Add Branch</button>

                <h3>Course Semesters</h3>
                {formData.course_semester.map((item, idx) => (
                    <select
                        key={idx}
                        value={item}
                        onChange={(e) => handleArrayChange(Number(e.target.value), "course_semester", idx)}
                    >
                        <option value="">Select Semester</option>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                            <option key={sem} value={sem}>{sem}</option>
                        ))}
                    </select>
                ))}
                <button type="button" onClick={() => addToArray("course_semester", "")}>+ Add Semester</button>

                <h3>Hero Section</h3>
                <div className="reccModal_heroSection_parent">
                    <input placeholder="Hero Title" value={formData.hero_section.hero_title} onChange={(e) => handleChange(e, "hero_section.hero_title")} />
                    <input placeholder="Hero Image URL" value={formData.hero_section.hero_image} onChange={(e) => handleChange(e, "hero_section.hero_image")} />
                    <input placeholder="Hero Description" value={formData.hero_section.hero_description} onChange={(e) => handleChange(e, "hero_section.hero_description")} />
                    <input placeholder="Hero Button Content" value={formData.hero_section.hero_button_content} onChange={(e) => handleChange(e, "hero_section.hero_button_content")} />
                </div>

                <h3>What You Get Section</h3>
                {formData.what_you_get_section.points.map((point, idx) => (
                    <input
                        key={idx}
                        placeholder={`Point ${idx + 1}`}
                        value={point}
                        onChange={(e) => handleArrayChange(e.target.value, "what_you_get_section.points", idx)}
                    />
                ))}
                <button type="button" onClick={() => addToArray("what_you_get_section.points")}>+ Add Point</button>

                <h3>Prerequisites</h3>
                {formData.prerequisite_section.points.map((point, idx) => (
                    <input
                        key={idx}
                        placeholder={`Prerequisite ${idx + 1}`}
                        value={point}
                        onChange={(e) => handleArrayChange(e.target.value, "prerequisite_section.points", idx)}
                    />
                ))}
                <button type="button" onClick={() => addToArray("prerequisite_section.points")}>+ Add Prerequisite</button>

                <h3>Outcomes</h3>
                {formData.outcome_section.points.map((point, idx) => (
                    <input
                        key={idx}
                        placeholder={`Outcome ${idx + 1}`}
                        value={point}
                        onChange={(e) => handleArrayChange(e.target.value, "outcome_section.points", idx)}
                    />
                ))}
                <button type="button" onClick={() => addToArray("outcome_section.points")}>+ Add Outcome</button>

                <h3>Elective Cards</h3>
                {formData.elective_course_section.cards.map((card, idx) => (
                    <input
                        key={idx}
                        placeholder={`Card ${idx + 1}`}
                        value={card}
                        onChange={(e) => handleArrayChange(e.target.value, "elective_course_section.cards", idx)}
                    />
                ))}
                <button type="button" onClick={() => addToArray("elective_course_section.cards")}>+ Add Card</button>

                <h3>Instructor</h3>
                <div className="reccModal_Instructor_parent">
                    <input placeholder="Name" value={formData.instructor_section.instructor_name} onChange={(e) => handleChange(e, "instructor_section.instructor_name")} />
                    <input placeholder="Image" value={formData.instructor_section.instructor_image} onChange={(e) => handleChange(e, "instructor_section.instructor_image")} />
                    <input placeholder="Designation" value={formData.instructor_section.instructor_designation} onChange={(e) => handleChange(e, "instructor_section.instructor_designation")} />
                    <textarea placeholder="Description" value={formData.instructor_section.instructor_description} onChange={(e) => handleChange(e, "instructor_section.instructor_description")} />
                </div>

                <h3>Curriculum</h3>
                {formData.curriculum_section.modules.map((mod, idx) => (
                    <div key={idx} className="reccModal_curriculum_parent">
                        <input placeholder="Module Title" value={mod.title} onChange={(e) => handleModuleChange(e.target.value, idx, "title")} />
                        <input placeholder="Module Description" value={mod.description} onChange={(e) => handleModuleChange(e.target.value, idx, "description")} />
                    </div>
                ))}
                <button type="button" onClick={addModule}>+ Add Module</button>
                <input placeholder="Curriculum Image" value={formData.curriculum_section.curriculum_image} onChange={(e) => handleChange(e, "curriculum_section.curriculum_image")} />

                <h3>Motivation Section</h3>
                <input placeholder="Quote" value={formData.motivation_section.quote} onChange={(e) => handleChange(e, "motivation_section.quote")} />
                <input placeholder="Button Content" value={formData.motivation_section.button_content} onChange={(e) => handleChange(e, "motivation_section.button_content")} />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default CourseForm;
