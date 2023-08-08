import axios from "axios";

export default class PostService {
  static async getAll(limit = 9, page = 1) {
    const posts = await axios.get("http://3.6.39.101:9800/post/posts", {});

    const photos = {
      data: [
        {
          id: 1,
          url: "https://picsum.photos/200/300?random=1",
        },
        {
          id: 2,
          url: "https://picsum.photos/200/300?random=2",
        },
        {
          id: 3,
          url: "https://picsum.photos/200/300?random=3",
        },
        {
          id: 4,
          url: "https://picsum.photos/200/300?random=4",
        },
        {
          id: 5,
          url: "https://picsum.photos/200/300?random=5",
        },
        {
          id: 6,
          url: "https://picsum.photos/200/300?random=6",
        },
        {
          id: 7,
          url: "https://picsum.photos/200/300?random=7",
        },
        {
          id: 8,
          url: "https://picsum.photos/200/300?random=8",
        },
        {
          id: 9,
          url: "https://picsum.photos/200/300?random=9",
        },
        {
          id: 10,
          url: "https://picsum.photos/200/300?random=10",
        },
        {
          id: 11,
          url: "https://picsum.photos/200/300?random=11",
        },
        {
          id: 12,
          url: "https://picsum.photos/200/300?random=12",
        },
        {
          id: 13,
          url: "https://picsum.photos/200/300?random=13",
        },
        {
          id: 14,
          url: "https://picsum.photos/200/300?random=14",
        },
        {
          id: 15,
          url: "https://picsum.photos/200/300?random=15",
        },
        {
          id: 16,
          url: "https://picsum.photos/200/300?random=16",
        },
        {
          id: 17,
          url: "https://picsum.photos/200/300?random=17",
        },
        {
          id: 18,
          url: "https://picsum.photos/200/300?random=18",
        },
        {
          id: 19,
          url: "https://picsum.photos/200/300?random=19",
        },
        {
          id: 20,
          url: "https://picsum.photos/200/300?random=20",
        },
        {
          id: 21,
          url: "https://picsum.photos/200/300?random=21",
        },
      ],
    };

    const [postsResponse, photosResponse] = await Promise.all([posts, photos]);

    postsResponse.data.forEach((post, index) => {
      post.photo = photosResponse.data[index].url.replace("600", "400");
    });

    return postsResponse;
  }

  static async getById(id) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/" + id
    );
    return response;
  }

  static async getCommentsByPostId(id) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    return response;
  }
}
