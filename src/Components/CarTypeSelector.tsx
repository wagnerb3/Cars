import { Car, CarType } from "../CarHelper";

interface Props {
    make: Car;
    selectCarTypeButtonHandler: (carType: CarType) => void;
    backPageButtonHandler: (event: React.FormEvent<HTMLFormElement>) => void;
}

function CarTypeSelector({ make, selectCarTypeButtonHandler, backPageButtonHandler }: Props) {

    const handleSelectCarType = (type: string) => {
        selectCarTypeButtonHandler(CarType[type]);
        console.log(`Selected ${type}`);
    }

    const buttons = make.types.map((type, index) => <button type="button" className="btn btn-primary" value={CarType[type]} key={index} onClick={(e) => handleSelectCarType(CarType[type])}>{CarType[type]}</button>)

    return (
        <div>
            <h1>{make.make}</h1>
            <div>
                <div className="btn-group" role="group" aria-label="Basic example">
                    {buttons}
                </div>
            </div>
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

export default CarTypeSelector