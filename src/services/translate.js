const getTranslate = async (fristLanguage, secondLanguage, text) => {
  try {
    const data = await fetch(
      `https://api.mymemory.translated.net/get?q=${text}?!&langpair=${fristLanguage}|${secondLanguage}`
    );

    const response = await data.json();

    return response.matches[0];
  } catch (error) {
    console.log(error);
  }
};
export default getTranslate;
