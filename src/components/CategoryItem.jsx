import styled  from "styled-components"

const Container = styled.div`
    //gives all images same block of size
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Info = styled.div`
    position: absolute;

    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    
    //brings the content to center and displays the category items - image , button , title etc. 
    //one after the other.
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
`;

const Title = styled.h1`
    color: white;
    margin-bottom: 20px;

`;
const Button = styled.button`
    border: none;
    padding: 10px;
    font-size: 20px;
    background-color: white;
    color: black;
    cursor: pointer;
    font-weight: 600;

    :hover {
        font-weight: 800;
        background-color: #d2dcec;
        transition: 0.2s;
    }
`;

//Each category item is being fetched from here to the Categories
const CategoryItem = ({item}) => {
  return (
    <Container>  
      <Image src={item.img} />
      <Info> 
        <Title> {item.title} </Title>
        <Button> SHOP NOW </Button>
      </Info>
    </Container>
  );
}

export default CategoryItem