import {IPost, IPostApi} from "../../types";
import {useCallback, useEffect, useState} from "react";
import axiosApi from "../../axiosApi.ts";
import Loader from "../../UI/Loader/Loader.tsx";
import Grid from "@mui/material/Grid2";
import {Button} from "@mui/material";
import {NavLink} from "react-router-dom";


const Home = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchData = useCallback(async () => {
        try {
            setLoading(true)
            const response = await axiosApi<IPostApi>('posts.json');

            if (response.data) {
                const postsObject = response.data;
                const postsObjectKeys = Object.keys(postsObject);
                const postsArray = postsObjectKeys.map(postIdorKey => {
                    return {
                        id: postIdorKey,
                        ...postsObject[postIdorKey],
                    }
                })
                setPosts(postsArray);
            } else {
                setPosts([])
            }

        } catch (e) {
            alert(e);
        } finally {
            setLoading(false);
        }

    }, [])

    useEffect(() => {
        void fetchData();
    }, [fetchData]);


    let content = null;

    if (loading) {
        content = <Loader />;
    }

    if (!loading) {
      if (posts.length > 0) {
          content = (
              <Grid container spacing={2}>
                  {posts.map(post => (
                      <Grid key={post.id} sx={{border: '1px solid', padding: '20px'}}>
                         <span><strong>Created on: </strong>{post.date}</span> <hr/> <h3>{post.title}</h3>
                         <Button variant='contained' size="small" component={NavLink} to={`/posts/${post.id}`}>Read More </Button>
                      </Grid>
                  ))}
              </Grid>
          )
      } else {
          content = (<h2>No posts yet</h2>)
      }
    }
    return (
       <>
           {content}
       </>
    );
};

export default Home;