import Tag from "../Tag";
import { TagsContainer } from "./style";

export default function Tags({ tags }) {
  return (
    <TagsContainer>
      Tagi: { tags.map(({ category: tag }, index) => <Tag tag={tag} last={index === tags.length - 1} />) }
    </TagsContainer>
  );
}