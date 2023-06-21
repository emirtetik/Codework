import FavProvider from "./context/FavProvider";
import Router from "./Router";

const Wrapper = () => {
    return (
        <FavProvider>
            <Router/>
        </FavProvider>
    )
}

export default Wrapper