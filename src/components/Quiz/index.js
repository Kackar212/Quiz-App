import { useQuery } from "react-query";
import { useParams } from "react-router";
import Questions from "../Questions";
import Tags from "../Tags";

export default function Quiz() {
    return (
        <div>
           <p>{name}</p>
            <Tags tags={tags}/>           
            <form data-id={id}>
                <Questions questions={questions} />
                <button type="submit">Sprawdź odpowiedzi</button>
            </form>
        </div>
    )
}