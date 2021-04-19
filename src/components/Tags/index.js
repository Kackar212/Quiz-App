import Tag from "../Tag";

export default function Tags({ tags }) {
  return (
    <div> 
      { tags.map(tag => <Tag tag={tag} />) }
    </div>
  );
}