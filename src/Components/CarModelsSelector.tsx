import { CarType } from "../CarHelper";

interface Props {
    carType: CarType
    backPageButtonHandler: (event: React.FormEvent<HTMLFormElement>) => void;
}

function CarModelSelector({ carType, backPageButtonHandler }: Props) {
    return (
        <>
            <h1 className="center">
                {carType}
            </h1>
            <div>
                <form className="center" onSubmit={(e) => backPageButtonHandler(e)}>
                    <button className="btn btn-danger" type='submit'>
                        Back
                    </button>
                </form>
            </div>
        </>
    );
}

export default CarModelSelector