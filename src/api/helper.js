export function formatDate(timestamp) {
  const date = new Date(timestamp);
  const time = date.toLocaleTimeString("en-US");
  return time.substr(0, 3) + time.slice(-2) + " | " + date.toLocaleDateString();
}

export function formatQuestion(question, author, authedUser) {
  const { id, timestamp, optionOne, optionTwo, avatarURL } = question;
  console.log(author);

  return {
    id,
    timestamp,
    optionOne,
    optionTwo,
    avatar: avatarURL,
    author
  };
}
