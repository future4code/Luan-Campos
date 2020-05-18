import posts from "./posts";
import { setAllPosts, setPostDetails } from "../actions/posts";
import { setLoading } from "../actions/global"

describe("Posts Reducer", () => {
  test("SET_ALL_POSTS", () => {
    // Preparação
    const mockPost = [{ username: "Luan", postId: 13, postText: "Olar!" }];
    const mockAction = setAllPosts(mockPost);
    const mockState = { posts: [] };

    // Execução
    const newState = posts(mockState, mockAction);

    // Verificação
    expect(newState.posts).toHaveLength(1);
    expect(newState.posts[0].username).toBe(mockPost[0].username);
    expect(newState.posts[0].postId).toBe(mockPost[0].postId);
    expect(newState.posts[0].postText).toBe(mockPost[0].postText);
  });

  test("SET_POST_DETAILS", () => {
    // Preparação
    const mockPost = [{ username: "Luan", postId: 14, postText: "Olar!!" }];
    const mockAction = setPostDetails(mockPost);
    const mockState = { post: null };

    // Execução
    const newState = posts(mockState, mockAction)

    // Verificação
    expect(newState.post).toBe(mockPost);
  });

  test("SET_LOADING", () => {
    // Preparação
    const mockLoading = true
    const mockAction = setLoading(mockLoading)
    const mockState = { isLoading: false}

    // Execução
    const newState = posts(mockState, mockAction)

    // Verificação
    expect(newState.isLoading).toBe(mockLoading)
  });
});
