import { useParams } from 'react-router-dom';
import DetailSection from "../Component/Detail/DetailSection";

export default function DetailPage() {
    const params = useParams();

    return (
        <div className="relative flex flex-col">
            <DetailSection params={params} />
        </div>
    );
}