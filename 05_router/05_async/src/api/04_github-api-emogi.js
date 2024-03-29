import { useState } from "react"

const SearchBox = ({setImgUrl}) =>{
    const [emojiname, setEmojiName] = useState('');

    const onChangeHandler = (e) =>{
        setEmojiName(e.target.value);
    }
    const onClickHandler = (e) => {
        fetch("https://api.github.com/emojis")
        .then(r=>r.json())
        .then(result => setImgUrl(result[emojiname]));
    }
    return(
        <>
        <input type="text" onChange={onChangeHandler}/>
        <button onClick={onClickHandler}>검색</button>
        </>
    )
}

const ImageBox= ({imgUrl}) => {
    return !!imgUrl? <img src={imgUrl}/>:<h1>텅</h1>
}

const EmojiContainer = () =>{
    const [imgUrl,setImgUrl] = useState('');

    return(
        <>
        <SearchBox setImgUrl={setImgUrl}/>
        <br/>
        <ImageBox imgUrl={imgUrl}/>
        </>
    )
}

export default EmojiContainer;