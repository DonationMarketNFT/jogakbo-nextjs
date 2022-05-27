import axios from "axios";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 80px;
`;

const ImagePage = () => {
  const onChangeImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files) {
      const formData = new FormData();
      for (var i = 0; i < e.target.files.length; i++) {
        formData.append("images", e.target.files[i]);
      }
      await axios({
        method: "post",
        url: "http://localhost:3000/image",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
        .then(res => console.log("성공"))
        .catch(e => console.error(e));
    }
  };
  return (
    <Wrapper>
      <form>
        <input type="file" multiple onChange={e => onChangeImage(e)} />
      </form>
    </Wrapper>
  );
};

export default ImagePage;
