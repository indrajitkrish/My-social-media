import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    picture: "../Assets/profile1.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio:"enthusiastic developer",
    github: "www.github.com",
    followers: [{
      _id: uuid(),firstName: "shubham",lastName: "soni",username: "shubhamsoni",password: "shubhamsoni123",picture: "../Assets/profile2.jpg",createdAt: formatDate(),updatedAt: formatDate(),followers: [],following: [],bookmarks: [],
    },
    {_id: uuid(),firstName: "Jhanavi",lastName: "RK",username: "jhanavi",password: "hanu0987",picture: "../Assets/profile3.png",createdAt: formatDate(),updatedAt: formatDate(),followers: [],following: [],bookmarks: [],
    },
  ],
          following: [{
            _id: uuid(),firstName: "shubham",lastName: "soni",username: "shubhamsoni",password: "shubhamsoni123",picture: "../Assets/profile2.jpg",createdAt: formatDate(),updatedAt: formatDate(),followers: [],following: [],bookmarks: [],
          },
          {_id: uuid(),firstName: "Jhanavi",lastName: "RK",username: "jhanavi",password: "hanu0987",picture: "../Assets/profile3.png",createdAt: formatDate(),updatedAt: formatDate(),followers: [],following: [],bookmarks: [],
          },],
          bookmarks: [],
  },
  {
    _id: uuid(),
    firstName: "shubham",
    lastName: "soni",
    username: "shubhamsoni",
    password: "shubhamsoni123",
    picture: "../Assets/profile2.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    followers: [{_id: uuid(),firstName: "Jhanavi",lastName: "RK",username: "jhanavi",password: "hanu0987",picture: "../Assets/profile3.png",createdAt: formatDate(),updatedAt: formatDate(),followers: [],following: [],bookmarks: [],
  },],
          following: [
            {_id: uuid(),firstName: "Jhanavi",lastName: "RK",username: "jhanavi",password: "hanu0987",picture: "../Assets/profile3.png",createdAt: formatDate(),updatedAt: formatDate(),followers: [],following: [],bookmarks: [],
          },],
          bookmarks: [],
  },
  {
    _id: uuid(),
    firstName: "Jhanavi",
    lastName: "RK",
    username: "jhanavi",
    password: "hanu0987",
    picture: "../Assets/profile3.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    followers: [],
          following: [],
          bookmarks: [],
  },
  {
    _id: uuid(),
    firstName: "Indrajit",
    lastName: "S",
    username: "IndrajitKrish",
    password: "qwerty@123",
    picture: 'http://bit.ly/42Zm7tM',
    createdAt: formatDate(),
    updatedAt: formatDate(),
    followers: [],
          following: [],
          bookmarks: [],
  },
  {
    _id: uuid(),
    firstName: "Raj",
    lastName: "A",
    username: "RAJraj",
    password: "Raj@1234",
    picture: 'http://bit.ly/42Zm7tM',
    createdAt: formatDate(),
    updatedAt: formatDate(),
    followers: [],
          following: [],
          bookmarks: [],
  },
];

