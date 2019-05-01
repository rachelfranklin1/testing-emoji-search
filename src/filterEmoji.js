import emojiList from "./emojiList.json";

export default function filterEmoji(searchText, maxResults) {
  console.log("=========", searchText);
  console.log("=========", maxResults);
  const arr = emojiList.filter(emoji => {
    if (emoji.title.toLowerCase().includes(searchText.toLowerCase())) {
      return true;
    }
    if (emoji.keywords.includes(searchText)) {
      return true;
    }
    return false;
  });
  console.log("*****", arr);
  console.log("-----", arr.slice(0, maxResults));
  return arr.slice(0, maxResults);
}
