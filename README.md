
# AI Image Generator

This React component allows generating AI images using the [OpenAI DALL-E API](https://openai.com/blog/dall-e/). 

## Overview

The component has the following features:

- Text input field to enter a text description of the image to generate
- Button to trigger image generation 
- Displays the generated image or a default image if no image was generated yet
- Uses Axios to make API requests to OpenAI

## Component Code Overview

```jsx
const ImageGenerator = () => {

  const [text, setText] = useState(''); 
  const [imgUrl, setImgUrl] = useState();

  const generateImage = async () => {

    // Call OpenAI API
    const response = await axios.post(OPENAI_API_URL, {
      prompt: text 
    });
    
    // Update image URL state
    setImgUrl(response.data.url); 
  }

  return (
    <div>
      <Input 
        value={text}
        onChange={e => setText(e.target.value)}  
      />
      
      <Button onClick={generateImage}>Generate</Button>
      
      <Image 
        src={imgUrl || defaultImage} 
      />
    </div>
  )
}
```

The key aspects are:

- `text` state variable to store the image description
- `imgUrl` state variable to store generated image URL
- `generateImage` calls the API when the button is clicked
- API response `url` is saved to `imgUrl` state
- `Image` component displays `imgUrl` or default image

## API Integration

The OpenAI API requires an API key and JSON payload with the `prompt` and configuration options.

API docs: https://openai.com/api/

Example request:

```js
const response = await axios.post(API_URL, {
  prompt: text,
  n: 1,
  size: '1024x1024',
  // Other options
}, {
  headers: {
    Authorization: `Bearer ${OPENAI_API_KEY}` 
  }
});
```
