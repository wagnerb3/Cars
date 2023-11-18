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

    const buttons = make.types.map((type, index) => <button type="button" className="btn btn-secondary" value={CarType[type]} key={index} onClick={(e) => handleSelectCarType(CarType[type])}>{CarType[type]}</button>)

    return (
        <>
            <h1 className="center">
                {make.make}
            </h1>
            <div className="center">
                <div className="center block">
                    <img className="image" src={make.image} alt={make.make} height={200} />
                </div>
                <div className="btn-group center block" role="group" aria-label="Basic example">
                    {buttons}
                </div>
            </div>
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

export default CarTypeSelector