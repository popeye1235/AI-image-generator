// const API_KEY = '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';
// const API_KEY = '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';

const submitIcon = document.querySelector('#submit-icon');
const inputElement = document.querySelector('input');
const imageSection = document.querySelector('.image-section');

const getImages = async () => {
  const options = {
    method: 'POST',
    Headers: {
      Authorization: `Bearer ${API_KEY}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      prompt: inputElement.value,
      n: 4,
      size: '1024x1024',
    }),
  };
  try {
    const response = await fetch(
      'https://api.openai.com/v1/images/generations',
      options
    );
    const data = await response.json();
    console.log(data);
    data?.data.forEach((imageObject) => {
      const imageContainer = document.createElement('div');
      imageContainer.classList.add('image-container');
      const imageElement = document.createElement('img');
      imageElement.setAttribute('src', imageObject.url);
      imageContainer.append(imageElement);
      imageSection.append(imageContainer);
    });
  } catch (error) {
    consol.error(error);
  }
};

submitIcon.addEventListener('click', getImages);
