import { createContext, ReactNode, useCallback, useContext, useReducer } from 'react';

enum ActionTypes {
  UPDATE_POSTS = 'posts/updatePosts',
}

interface IAction {
  type: ActionTypes;
  payload: any[];
}

interface IInitialState {
  posts: any[];
}

interface IPostsProvider extends IInitialState {
  updatePosts: (newPosts: any[]) => void;
}

interface IPostsProviderProps {
  children: ReactNode;
}

const initialState = {
  posts: [] as any[],
};

const PostsContext = createContext<IPostsProvider>({} as IPostsProvider);

function reducer(_state: IInitialState, action: IAction): IInitialState {
  switch (action.type) {
    case ActionTypes.UPDATE_POSTS:
      return { posts: action.payload };

    default:
      throw new Error('PostsProvider: unknown action type');
  }
}

function PostsProvider({ children }: IPostsProviderProps) {
  const [{ posts }, dispatch] = useReducer(reducer, initialState);

  const updatePosts = useCallback((newPostData: any[]) => {
    dispatch({ type: ActionTypes.UPDATE_POSTS, payload: newPostData });
  }, []);

  return (
    <PostsContext.Provider
      value={{
        posts,
        updatePosts,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
}

export function usePosts() {
  const context = useContext(PostsContext);

  if (!context) throw new Error('usePosts must be used within a PostsProvider');

  return context;
}

export default PostsProvider;
