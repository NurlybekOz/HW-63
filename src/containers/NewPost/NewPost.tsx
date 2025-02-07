
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Loader from "../../UI/Loader/Loader.tsx";
import axiosApi from "../../axiosApi.ts";
import {toast} from "react-toastify";
import {IPostForm} from "../../types";
import PostForm from "../../components/PostForm/PostForm.tsx";


const NewPost = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    const onSubmitAddNewPost = async (post: IPostForm) => {
        try {
            setLoading(true);
            await axiosApi.post("/posts.json", post);
            toast.success("New Post Added!")
            navigate("/");
        } catch (e) {
            alert(e)
        } finally {
            setLoading(false);
        }
    }
    let form = (<PostForm onSubmitAction={onSubmitAddNewPost} isEdit={false}/>)

    if (loading) form = <Loader/>
    return (
        <div>
            {form}
        </div>
    );
};

export default NewPost;