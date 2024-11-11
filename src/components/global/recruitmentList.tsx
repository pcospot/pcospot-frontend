import { useEffect, useState } from "react";
import searchIcon from "../../assets/MagnifyingGlass.svg";
import RecruitmentBox from "./recruitmentBox.tsx";
import "./recruitmentList.css";

export default function RecruitmentList() {
    const [recruitementData, setRecruitementData] = useState({ posts: {} });

    const recruitmentPostsFetch = async () => {
        try {
            const res = await fetch("/posts.json");
            const data = await res.json();
            setRecruitementData(data);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        recruitmentPostsFetch();
    }, []);

    // Get first 3 posts for recently posted section
    const recentPosts = recruitementData.posts && Object.keys(recruitementData.posts).slice(0, 3);

    return (
        <div className="recruitmentList-container">
            <div className="recruitmentList-search">
                <input placeholder="Search a recruitment..." />
                <button>New recruitment</button>
            </div>
            <div className="recruitmentList-recently-posts">
                <h1 style={{ marginBottom: "12px", color: "white", fontSize: "20px" }}>Recently posted</h1>
                <div className="recruitmentList-recently-postlist">
                    {recentPosts && recentPosts.map((key) => {
                        const post = recruitementData.posts[key];
                        return (
                            <RecruitmentBox json={post} key={key} />
                        );
                    })}
                </div>
            </div>
            <div className="recruitmentList-top-posts">
                <h1 style={{ marginBottom: "12px", color: "white", fontSize: "20px" }}>Top posted</h1>
                <div className="recruitmentList-top-postlist">
                    {recruitementData.posts && Object.keys(recruitementData.posts).map((key) => {
                        const post = recruitementData.posts[key];
                        return (
                            <RecruitmentBox json={post} key={key} />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
