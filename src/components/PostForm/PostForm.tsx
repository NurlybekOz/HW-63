import {FormEvent, useCallback, useEffect, useState} from "react";
import Grid from "@mui/material/Grid2";
import {Button, TextField, Typography} from "@mui/material";
import {IPostForm} from "../../types";
import axiosApi from "../../axiosApi.ts";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import Loader from "../../UI/Loader/Loader.tsx";

interface Props {
    isEdit?: boolean;
    idPost?: string;
    onSubmitAction: (post: IPostForm) => void;
}


const PostForm: React.FC<Props> = ({isEdit = false, onSubmitAction, idPost}) => {
    const [form, setForm] = useState<IPostForm>({
        title: '',
        description: '',
        date: new Date().toLocaleString(),
    })
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const fetchOnePost = useCallback(async () => {
        try {
            setLoading(true)
            const response = await axiosApi<IPostForm>(`posts/${idPost}.json`);
           if (!response.data) {
               toast.error('Post not found');
               navigate('/')
               return;
           }
            setForm(response.data);
        } catch (e) {
            alert(e);
        } finally {
            setLoading(false);
        }

    }, [idPost, navigate])

    useEffect(() => {
        void fetchOnePost();
    }, [fetchOnePost])

    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
        onSubmitAction({...form})
    }
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({...form, [name]: value})
    }
    return (
        <>
            {loading ? <Loader/> :
            <form onSubmit={onSubmit}>
                <Typography variant='h4' sx={{flexGrow: 1, textAlign: 'center'}}>{isEdit ? 'Edit' : 'Add new post'}</Typography>

                <Grid container spacing={2} sx={{mx: 'auto', width: '50%', mt: 4}}>


                    <Grid size={12}>
                        <TextField
                            sx={{width: '100%'}}
                            label="title"
                            name="title"
                            variant="outlined"
                            value={form.title}
                            onChange={onInputChange}
                        >

                        </TextField>
                    </Grid>
                    <Grid size={12}>
                        <TextField
                            sx={{width: '100%'}}
                            label="Description"
                            name="description"
                            variant="outlined"
                            value={form.description}
                            onChange={onInputChange}
                        >

                        </TextField>
                    </Grid>

                    <Grid size={12}>
                        <Button sx={{width: '100%'}} type='submit' variant='contained'>{isEdit ? 'Edit' : 'Add'}</Button>
                    </Grid>
                </Grid>

            </form>
            }
        </>

    );
};

export default PostForm;