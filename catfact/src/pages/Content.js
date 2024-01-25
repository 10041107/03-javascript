import { useState, useEffect } from 'react';
import "../app.css";

// ================================== 고양이 이미지 불러오기
const CatImage = () => {
  const [imageId, setImageId] = useState(null);

  useEffect(() => {
    const apiUrl = "https://api.thecatapi.com/v1/images/search";
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const imageInfo = data[0];
        const newImageId = imageInfo.id;
        setImageId(newImageId);
      })
      .catch(error => {
        console.error("Cat Image API에서 오류가 발생했습니다.", error);
      });
  }, []);

  // ================================== 
  // 새로고침 없이 값 재 리로드
  
  const [refresh, setRefresh] = useState(1);

  useEffect(() => {
    fetchData();
  }, [refresh]);

  const handleAddFriend = () => {
    addFriend();
    setRefresh(refresh => refresh * -1);
  };

  return (
    <div className="container">
      <br/>
      {imageId && (
        <img
          className="catImages"
          alt="photo"
          src={`https://cdn2.thecatapi.com/images/${imageId}.jpg`}
        />
      )}
      <br/>
      <button type="button" onClick={handleAddFriend}>Close</button>
      <br/>
    </div>
  );
}

export default CatImage;
