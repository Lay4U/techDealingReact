import Router from 'koa-router'
import * as postsCtrl from './posts.ctrl';
import checkLoggedIn from "../../lib/checkLoggedIn";
import { checkOwnPost } from "./posts.ctrl";
const posts = new Router();


posts.get('/', postsCtrl.list);
posts.post('/', checkLoggedIn, postsCtrl.write);

const post = new Router();
post.get('/:id', postsCtrl.read);
post.delete('/:id', checkLoggedIn, postsCtrl.checkOwnPost, postsCtrl.remove);
post.patch('/:id', checkLoggedIn, postsCtrl.checkOwnPost, postsCtrl.update);

posts.use('/:id', postsCtrl.getPostById, post.routes());
export default posts;
