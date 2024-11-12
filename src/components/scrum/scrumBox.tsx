import { useEffect, useState } from "react";
import "./scrumBox.css"

type ScrumBoxProps = {
    work: any;
    progress?: string;
};

export default function ScrumBox({ work }: ScrumBoxProps) {
    const [progresss, setProgresss] = useState<any>(null);

    useEffect(() => {
            setProgresss(work.days);
    }, [work]);

    console.log(progresss); // 데이터 확인용

    return (
        <div className="scrumBox-container">
            {progresss &&
                progresss.map((item : any) => (
                    <div className="scrumBox-contents-container" key={item.id}>
                        <h3>day {item.day}</h3>
                        <div className="scrumBox-contents">
                            <div className="scrumBox-content problem-box">
                                <h1>Problem</h1>
                                <div className="scrumBox-message">
                                    <h2>bug</h2>
                                    <p>{item.problem.issues.bug}</p>
                                </div>
                                <div className="scrumBox-message">
                                    <h2>delay</h2>
                                    <p>{item.problem.issues.delay}</p>
                                </div>
                            </div>
                            <div className="scrumBox-content plan-box">
                                <h1>Plan</h1>
                                <div className="scrumBox-message">
                                    <h2>setup</h2>
                                    <p>{item.plan.tasks.setup}</p>
                                </div>
                                <div className="scrumBox-message">
                                    <h2>meeting</h2>
                                    <p>{item.plan.tasks.meeting}</p>
                                </div>
                            </div>
                            <div className="scrumBox-content completed-box">
                                <h1>Completed</h1>
                                <div className="scrumBox-message">
                                    <h2>codeReview</h2>
                                    <p>{item.completed.works.codeReview}</p>
                                </div>
                                <div className="scrumBox-message">
                                    <h2>ChromeSupport</h2>
                                    <p>{item.completed.works.Chromesupport}</p>

                                </div>
                            </div>
                        </div>
                    </div>
                        ))
                        }
                    </div>
    );
}
