import {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {IPostForm} from "../../types";
import axiosApi from "../../axiosApi.ts";
import {toast} from "react-toastify";
import Loader from "../../UI/Loader/Loader.tsx";
import PostForm from "../../components/PostForm/PostForm.tsx";



const EditPost = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {idPost} = useParams();

    const onSubmitAddNewGame = async (post: IPostForm) => {
        try {
            setLoading(true);
            await axiosApi.put(`posts/${idPost}.json`, post);
            toast.success("Post was successfully edited!");
            navigate('/');
        } catch (e) {
            alert(e)
        } finally {
            setLoading(false);
        }
    }
    let form = (<PostForm onSubmitAction={onSubmitAddNewGame} isEdit={true} idPost={idPost} />)

    if (loading) form = <Loader/>
    return (
        <div>
            {form}
        </div>
    );
};

export default EditPost;