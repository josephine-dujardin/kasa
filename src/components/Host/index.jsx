import './host.css'
import { Hooks } from '../../utils/hooks';
import { useParams } from "react-router-dom";

function Host() {

    const apiData = Hooks();
    const { logementId } = useParams();
    const logementSelected = apiData.find((logement) => logement.id === logementId);

    // Host Name Data

    const nameArray = []
    nameArray.push(logementSelected)
    const hostNameArray = nameArray[0]?.host.name
    const emptyArrayName = []
    emptyArrayName.push(hostNameArray)

    // Host Picture Data

    const hostPicture = []
    hostPicture.push(logementSelected)
    const ArrayHostPicture = hostPicture[0]?.host.picture
    const emptyArrayHostPicture = []
    emptyArrayHostPicture.push(ArrayHostPicture)

    return (
        <>
            <span className="host_container">
                <div className="host_div">
                    {nameArray && nameArray.length > 0 && nameArray.map((hostName, i) => (
                        <div key={i} className="host_name">
                            <p>
                                {hostName?.host.name.split(" ")[0]}
                                <br />
                                {hostName?.host.name.split(" ")[1]}
                            </p>
                        </div>
                    ))}
                    {hostPicture && hostPicture.length > 0 && hostPicture.map((hostPicture, i) => (
                        <div key={i} className="div_host_picture">
                            <img
                                className="host_picture" key={i} src={hostPicture?.host.picture} alt={hostPicture?.host.name}
                            />
                        </div>
                    ))}
                </div>
            </span>
        </>
    )
}

export default Host