import {IPost, IPostApi} from "../../types";
import PostItem from "../../components/PostItem/PostItem.tsx";
import {useCallback, useEffect, useState} from "react";
import axiosApi from "../../axiosApi.ts";
import Loader from "../../UI/Loader/Loader.tsx";
import {useNavigate, useParams} from "react-router-dom";
import {toast} from "react-toastify";


const ReadMore= () => {
    const { idPost } = useParams();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [post, setPost] = useState<IPost | null>(null);

    const fetchData = useCallback(async () => {
        if (idPost) {
            try {
                setLoading(true);
                const response = await axiosApi.get<IPostApi>("posts.json");
                if (response.data) {
                    const postsObject = response.data;
                    const postData = postsObject[idPost];
                    if (postData) {
                        setPost({ id: idPost, ...postData });
                    } else {
                        setPost(null);
                    }
                } else {
                    setPost(null);
                }
            } catch (e) {
                alert(e);
            } finally {
                setLoading(false);
            }
        }
    }, [idPost]);

    useEffect(() => {
        void fetchData();
    }, [fetchData]);

    const deletePost = async (post: IPost) => {
        if (post.id) {
            try {
                setLoading(true);
                await axiosApi.delete<IPostApi>(`posts/${post.id}.json`);
                navigate("/");
                toast.success("Post was successfully deleted!");
            } catch (e) {
                alert(e);
            } finally {
                setLoading(false);
            }
        }
    };
    if (loading) {
        return <Loader />;
    }

    if (!post) {
        return <h1>Post not found</h1>;
    }

    return (
        <PostItem post={post} onDeletePost={() => deletePost(post)} />
    );

};

export default ReadMore;