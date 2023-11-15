import { CarType } from "../CarHelper";

interface Props {
    carType: CarType
    backPageButtonHandler: (event: React.FormEvent<HTMLFormElement>) => void;
}

function CarModelSelector({ carType, backPageButtonHandler }: Props) {
    return (
        <div>
            <h1>{carType}</h1>
            <div>
                <form onSubmit={(e) => backPageButtonHandler(e)}>
                    <button type='submit'>
                        Back
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CarModelSelector