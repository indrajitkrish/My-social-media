import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id:1,
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    like: false,
    bookmark: false,
    picture: "../Assets/profile1.jpg",
    username: "adarshbalika",
    createdAt: "15 March,2023",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    like: false,
    bookmark: false,
    picture: "../Assets/profile2.jpg",
    username: "shubhamsoni",
    createdAt: "9 June,2023",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },
    like: false,
    bookmark: false,
    picture: "../Assets/profile3.png",
    username: "Indrajit",
    createdAt: "5 December,2022",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Hello neog camp",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    like: false,
    bookmark: false,
    picture: "../Assets/profile1.jpg",
    username: "adarshbalika",
    createdAt: "23 June,2023",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "code waala",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    like: false,
    bookmark: false,
    picture: "http://bit.ly/42Zm7tM",
    username: "RAJraj",
    createdAt: "29 June,2023",
    updatedAt: formatDate(),
  },
];
