import blockContent from './blockContent';
import category from './category';
import post from './post';
import author from './author';
import comments from './comments';
import tag from './tag';
import team from './team';
import projects from './project';

// eslint-disable-next-line import/prefer-default-export
export const schemaTypes = [post, projects, author, team, category, tag, blockContent, comments];
