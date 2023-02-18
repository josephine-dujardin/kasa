import './description.css'
import { Hooks } from '../../utils/hooks';
import { useParams } from "react-router-dom";

function Description() {

    const apiData = Hooks();
    const { logementId } = useParams();
    const logementSelected = apiData.find((logement) => logement.id === logementId);

    // Housing title Data

    const Title = []
    Title.push(logementSelected)
    const housingTitle = Title[0]?.title
    const emptyArrayTitle = []
    emptyArrayTitle.push(housingTitle)


    // Housing location Data

    const Location = []
    Location.push(logementSelected)
    const ArrayLocation = Location[0]?.location
    const emptyArrayLocation = []
    emptyArrayLocation.push(ArrayLocation)

    // Housing tag Data

    const HousingTag = []
    HousingTag.push(logementSelected)
    const ArrayHousingTag = HousingTag[0]?.tags
    const emptyArrayHousingTag = []
    emptyArrayHousingTag.push(ArrayHousingTag)

    return (
        <>
            <span className="description_container">
                <div className="description_div">
                    <div key={housingTitle} className="housing-title">
                        <h1>
                            {housingTitle}
                        </h1>
                    </div>
                    <div key={ArrayLocation} className="housing-location">
                        <p>
                            {ArrayLocation}
                        </p>
                    </div>
                    <div key={ArrayHousingTag} className="housing-tags">
                        {ArrayHousingTag && ArrayHousingTag.length > 0 && ArrayHousingTag.map((housingTags, i) => (
                            <p key={i} className="tags">
                                {housingTags}
                            </p>
                        ))}
                    </div>
                </div>
            </span>
        </>
    )
}

export default Description