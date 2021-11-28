import { StyledCard } from "./styled/Card.styled";

export default function Card({ item: { title, body, image }, index }) {
  return (
    <StyledCard inverted={index % 2 === 0}>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <div>
        <img src={`./images/${image}`} alt="" />
      </div>
    </StyledCard>
  );
}
