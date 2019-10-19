export function formatDate(timestamp) {
  const date = new Date(timestamp);
  const time = date.toLocaleTimeString("en-US");
  return time.substr(0, 3) + time.slice(-2) + " | " + date.toLocaleDateString();
}

export function formatQuestion(question, author, authedUser) {
  const { id, timestamp, optionOne, optionTwo, avatarURL } = question;
  console.log(author);
  // const { name, avatarURL } = author;
  // const avatarURL = author;
  // const name = author;

  return {
    id,
    timestamp,
    // name,
    optionOne,
    optionTwo,
    avatar: avatarURL,
    // avatarURL
    // users,

    author

    // id: authedUser.id
  };
}
