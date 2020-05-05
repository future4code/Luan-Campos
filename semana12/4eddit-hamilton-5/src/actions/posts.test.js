import { setAllPosts, setPostDetails } from "./posts";

describe("Actions de salvar os posts e seus detalhes", () => {
  test("Action - setAllPosts", () => {
    const mockPost = {
      username: "Luan",
      postId: 13,
      postText: "SALVE RAPAZIADA - 1",
    };

    const action = setAllPosts(mockPost)

    expect(action.type).toBe("SET_ALL_POSTS")
    expect(action.payload.post).toBe(mockPost)
  });

  test("Action - setPostDetails", () => {
    const mockPost = {
      username: "Luan",
      postId: 14,
      postText: "Salve rapaziada - 2",
    };

    const action = setPostDetails(mockPost)

    expect(action.type).toBe("SET_POST_DETAILS")
    expect(action.payload.comment).toBe(mockPost)
  });
});
