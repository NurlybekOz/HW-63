import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import {IPost} from "../../types";
import {NavLink} from "react-router-dom";

interface Props {
    post: IPost;
    onDeletePost: React.MouseEventHandler;
}


const PostItem:React.FC<Props> = ({post, onDeletePost}) => {
    return (
       <Card variant='outlined' sx={{minWidth: 275}}>
           <CardContent>
               <Typography gutterBottom sx={{fontSize: 19 }}>
                   <strong>Created on: </strong>{post.date}
               </Typography>
               <hr/>
               <Typography gutterBottom sx={{fontSize: 19 }}>
                   <strong>Title: </strong>{post.title}
               </Typography>
               <Typography gutterBottom sx={{fontSize: 19 }}>
                   <strong>Description: </strong>{post.description}
               </Typography>

           </CardContent>
           <CardActions>
               <Button size="small" variant='contained' component={NavLink} to={`/posts/${post.id}/edit`}>Edit</Button>
               <Button size="small" variant='contained' color='error' onClick={onDeletePost}>Delete</Button>
           </CardActions>
       </Card>
    );
};

export default PostItem;