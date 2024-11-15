import { useEffect, useState, ChangeEvent, KeyboardEvent } from "react";
import xCircle from "../../assets/XCircle.svg";
import X from "../../assets/X.svg";
import ImageSquare from "../../assets/ImagesSquare.svg";
import Pencil from "../../assets/PencilSimpleLine.svg"
import Trash from "../../assets/Trash.svg"
import RecruitmentBox from "./recruitmentBox.tsx";
import "./recruitmentList.css";
import Modal from "../modal/modal.tsx";
import PrevImage from "../chat/chatFunction/prevImage.tsx";

interface Post {
    title: string;
    content: string;
    tags: string[];
    images?: string[];
    start: string;
    end: string;
    Roles: string[];
    requirement: string;
    id?: string;
}

interface RecruitmentData {
    posts: Record<string, Post>;
}


export default function RecruitmentList() {
    const [recruitementData, setRecruitementData] = useState<RecruitmentData>({ posts: {} });
    const [isNewModalOpen, setIsNewModalOpen] = useState(false);
    const [isMyModalOpen, setIsMyModalOpen] = useState(false);
    const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
    const [selectedPost, setSelectedPost] = useState<any>(null); // 선택된 게시글 정보
    const [roles, setRoles] = useState<string[]>([]); // 역할 배열
    const [roleInput, setRoleInput] = useState(""); // 입력 필드 상태
    const [files, setFiles] = useState<File[]>([]); // 여러 파일을 저장할 배열
    const [selectMyPost, setSelectMyPost] = useState<Post[]>([]);

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

    const modalOpen = () => {
        setIsNewModalOpen(true);
        document.getElementsByClassName('recruitmentList-container')[0].className += ' blur';
    };

    const modalClose = () => {
        setIsNewModalOpen(false);
        document.getElementsByClassName('recruitmentList-container')[0].classList.remove('blur');
    };

    const myModalOpen = () => {
        setIsMyModalOpen(true);
        document.getElementsByClassName('recruitmentList-container')[0].className += ' blur';
        myPostSelected()
    }

    const myModalClose = () => {
        setIsMyModalOpen(false);
        document.getElementsByClassName('recruitmentList-container')[0].classList.remove('blur');
    }


    const detailModalOpen = (post: any) => {
        setSelectedPost(post);
        setIsDetailModalOpen(true);
        document.getElementsByClassName('recruitmentList-container')[0].className += ' blur';
    };


    const detailModalClose = () => {
        setIsDetailModalOpen(false);
        document.getElementsByClassName('recruitmentList-container')[0].classList.remove('blur');
    }

    const recentPosts = recruitementData.posts && Object.keys(recruitementData.posts).slice(0, 3);

    const handleRoleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setRoleInput(e.target.value);
    };

    const handleRoleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && roleInput.trim() !== "") {
            setRoles((prevRoles) => [...prevRoles, roleInput.trim()]);
            setRoleInput("");
        }
    };

    const handleRoleDelete = (index: number) => {
        setRoles((prevRoles) => prevRoles.filter((_, i) => i !== index));
    };

    const handleFileSet = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const selectedFiles = Array.from(e.target.files); // FileList를 배열로 변환
            if (files.length + selectedFiles.length > 3) {
                alert("최대 3개의 파일만 업로드할 수 있습니다.");
                return;
            }
            setFiles((prevFiles) => [...prevFiles, ...selectedFiles.slice(0, 3 - prevFiles.length)]); // 최대 3개까지만 추가
        }
    };


    const myPostSelected = () => {
        const myPosts = Object.values(recruitementData.posts).filter(
            (post: any) => post.id === "me"
        ) as unknown as any;

        myPosts && setSelectMyPost(myPosts);
        console.log(myPosts);
    };




    return (
        <>
            <div className="recruitmentList-container">
                <div className="recruitmentList-search">
                    <input placeholder="Search a recruitment..." />
                    <button onClick={modalOpen} className="recruitment-button">New recruitment</button>
                    <button onClick = {myModalOpen} className="my-button">My Page</button>
                </div>
                <div className="recruitmentList-recently-posts">
                    <h1 style={{ marginBottom: "12px", color: "white", fontSize: "20px" }}>Recently posted</h1>
                    <div className="recruitmentList-recently-postlist">
                        {recentPosts && recentPosts.map((key) => {
                            const post = recruitementData.posts[key];
                            return <RecruitmentBox json={post} key={key}/>;
                        })}
                    </div>
                </div>
                <div className="recruitmentList-top-posts">
                    <h1 style={{ marginBottom: "12px", color: "white", fontSize: "20px" }}>Top posted</h1>
                    <div className="recruitmentList-top-postlist">
                        {recruitementData.posts && Object.keys(recruitementData.posts).map((key) => {
                            const post = recruitementData.posts[key];
                            return <RecruitmentBox
                                json={post}
                                key={key}
                                onclick={() => detailModalOpen(post)} // 이벤트 대신 post 객체를 넘깁니다.
                            />

                        })}
                    </div>
                </div>
            </div>
            <Modal onOpen={isMyModalOpen} onClose={myModalClose} className="recruitmentList-Mymodal" >
                <>
                    <div className="title">
                        <h1>My page</h1>
                        <button onClick={myModalClose}>
                            <img src={X} alt="x"/>
                        </button>
                    </div>
                    <div className="contents">
                        {selectMyPost.map((post) => (
                            <div className="content-container">
                                <div className="nameNcontent">
                                    <h1 style={{fontWeight:"500"}}>{post.title}</h1>
                                    <p>{post.content}</p>
                                    <div className="rolesCon">
                                        {post.Roles.map((role) => (
                                            <span>{role}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="image">
                                    {post.images && (post.images.map((image) => (
                                        <img src={`/${image}.svg`} alt={image} />
                                    )))}
                                </div>
                                <div className="buttons">
                                    <button><img src={Pencil} alt="pencilsimple"/></button>
                                    <button><img src={Trash} alt ="trash"/></button>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            </Modal>
            <Modal width="850px" height="725px" onOpen={isDetailModalOpen} onClose={detailModalClose} className="recruitmentList-Detailmodal">
                {selectedPost ? (
                    <>
                        <div className="title">
                            <p>{selectedPost.title}</p>
                            <button onClick={detailModalClose}>
                                <img src={X} alt="X"/>
                            </button>
                        </div>
                        <div className="imageList">
                            {selectedPost.images && selectedPost.images.map((image: string, index: number) => (
                                <img key={index} src={`/${image}.svg`} alt={`Post image ${index}`} className="image"/>
                            ))}
                        </div>
                        <div className="description">
                            <h1>Summary description</h1>
                            <p>{selectedPost.content}</p>
                        </div>
                        <div className="timelineNroles">
                            <div className="timeline">
                                <h1>Project Timeline</h1>
                                <span className="period">
                                    <p>{selectedPost.start}</p>
                                    <p> ~ </p>
                                    <p>{selectedPost.end}</p>
                                </span>
                            </div>
                            <div className="rolescon">
                                <h1>Roles Needed</h1>
                                <div className="roleslist">
                                    {selectedPost.Roles.map((role: string, index: number) => (
                                        <span key={index} className="role">{role}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="requirement">
                            <h1>Requirements</h1>
                            <p>{selectedPost.requirement}</p>
                        </div>
                    </>

                ) : (
                    <p>Loading...</p> // 데이터가 아직 없을 경우 로딩 메시지나 빈 화면 표시
                )}
            </Modal>
            <Modal width="50vw" height="76vh" onOpen={isNewModalOpen} onClose={modalClose}
                   className="recruitmentList-modal">
                <div className="recruitmentList-modal-con name">
                    <h1>Project Name</h1>
                    <input placeholder="Enter the name..."/>
                </div>
                <div className="recruitmentList-modal-con description">
                    <h1>Summary Description</h1>
                    <input placeholder="Enter the summary description..."/>
                </div>
                <div className="recruitmentList-modal-con date">
                    <div className="recruitmentList-modal-contents">
                        <h1>start</h1>
                        <input type="date" />
                    </div>
                    <div className="recruitmentList-modal-contents">
                        <h1>end</h1>
                        <input type="date" />
                    </div>
                </div>
                <div className="recruitmentList-modal-con rolesNrequirement">
                    <div className="recruitmentList-modal-contents roles">
                        <h1>Roles Needed</h1>
                        <input
                            value={roleInput}
                            onChange={handleRoleChange}
                            onKeyDown={handleRoleKeyDown}
                            placeholder="Enter a role and press Enter"
                        />
                        <div className="roles-list">
                            {roles.map((role, index) => (
                                <div key={index} className="role-item">
                                    <p style={{ fontSize: "12px" }}>{role}</p>
                                    <button
                                        onClick={() => handleRoleDelete(index)}
                                        className="delete-button"
                                    >
                                        <img src={xCircle} alt="xcircle" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="recruitmentList-modal-contents require">
                        <h1>Requirements</h1>
                        <input />
                    </div>
                </div>
                <div className="recruitmentList-modal-con photo">
                    <h1>Photo Upload</h1>
                    {/* 파일이 없으면 라벨을 보여주고, 파일이 있으면 숨깁니다 */}
                    {files.length === 0 && (
                        <label htmlFor="file-input" className="file-label">
                            <img src={ImageSquare} alt="imagesquare" />
                            Drag or select a photo to upload
                        </label>
                    )}
                    <input
                        id="file-input"
                        onChange={handleFileSet}
                        type="file"
                        multiple // 여러 파일 선택 가능하게 설정
                    />
                </div>
                {files.length != 0 && (
                    <div className="file-previews">
                        {files.map((file, index) => (
                            <PrevImage key={index} src={[file]} height="150px" /> // 파일을 배열로 감싸서 전달
                        ))}
                    </div>
                )}

                <div className="recruitmentList-modal-con saveNcancel">
                    <button className="recruitmentList-modal-contents-cancel" onClick={modalClose}>cancel</button>
                    <button className="recruitmentList-modal-contents-save">save</button>
                </div>
            </Modal>
        </>
    );
}
