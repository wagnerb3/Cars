import { Car, Makes } from "../CarHelper";
import { CarType } from "../CarType";

interface Props {
    selectedMake: Car;
    carType: CarType;
    backPageButtonHandler: (event: React.FormEvent<HTMLFormElement>) => void;
}

function CarModelSelector({ selectedMake, carType, backPageButtonHandler }: Props) {

    const filteredCars =  Makes.filter(m => m.make === selectedMake.make)[0].models.filter(m => m.type === carType);
    const cars = filteredCars.map(c => <p>{c.name}<br></br></p>)

    return (
        <>
            <h1 className="center">
                {carType}
            </h1>
            <div>
                {cars}
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